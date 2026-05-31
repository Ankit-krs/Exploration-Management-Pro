import { opexRepository } from "../repositories/opexRepository.js";

type MasterCategory = {
  sortOrder: number;
  name: string;
  heads: string[];
};

export const MASTER_OPEX_TAXONOMY: MasterCategory[] = [
  { sortOrder: 1, name: "Administration", heads: ["Internet/mobile", "Legal", "Liaisoning", "Office Expense", "Printing", "Stationary", "others"] },
  { sortOrder: 2, name: "Any other", heads: ["Miscellaneous", "Others"] },
  { sortOrder: 3, name: "Camp & Site Infra", heads: ["Crane Charges", "Room Rent Advance", "JCB", "Night Guard payment", "Water Tanker", "Site setup Materials", "Food & Grocery", "Others"] },
  { sortOrder: 4, name: "Consumables", heads: ["Bentonite Mud", "DG Fuel", "Diesel", "Grease", "Hydraulic oil", "Lubricants", "Polymer", "others"] },
  { sortOrder: 5, name: "Demobilization", heads: ["travel", "transportation advance", "logistics", "others"] },
  { sortOrder: 6, name: "Drilling Operations", heads: ["Core Barrel", "Core Boxes", "Drill Bit", "Overshot", "Reamer Shell", "Rods", "Wireline Parts", "others"] },
  { sortOrder: 7, name: "Equipment", heads: ["Casings", "Rig Depreciation", "others"] },
  { sortOrder: 8, name: "Geological Operations", heads: ["Core Cutting/Splitting", "Core Logging", "Mapping", "Photography", "Pitting/Trenching", "Sampling", "others"] },
  { sortOrder: 9, name: "HEADQUARTER", heads: ["HoD's/Consultant visit", "others"] },
  { sortOrder: 10, name: "Laboratory Testing", heads: ["Chemical Analysis", "Sample Preparation", "others"] },
  { sortOrder: 11, name: "Maintenance", heads: ["Mechanic", "Rig Repair", "Rig Spares", "Welding & Fabrication", "others"] },
  { sortOrder: 12, name: "Manpower", heads: ["Camp Staff", "Operator Salary", "Geologist Salary", "Helper Wages", "Night Guard", "labour advance payment", "Advance salary"] },
  { sortOrder: 13, name: "Mobilization", heads: ["Transportation advance", "Transportation & Logistics", "others"] },
  { sortOrder: 14, name: "Safety Kits", heads: ["Safety Kits", "others"] },
  { sortOrder: 15, name: "Survey & DGPS", heads: ["Boundary Survey", "DGPS survey", "Drone Survey", "Total Station", "others"] },
  { sortOrder: 16, name: "Travel", heads: ["Employee movement", "Train/Bus Tickets", "Purchase Travel", "others"] }
];

const normalize = (value: string) => value.trim().toLowerCase();

export const opexTaxonomyService = {
  async ensureMasterTaxonomy() {
    const categories = await opexRepository.listCategories();
    const categoryByName = new Map(categories.map((c) => [normalize(c.name), c]));

    for (const category of MASTER_OPEX_TAXONOMY) {
      const existing = categoryByName.get(normalize(category.name));
      const categoryRow = existing
        ? existing
        : await opexRepository.createCategoryWithSort({
            name: category.name,
            sortOrder: category.sortOrder
          });

      if (existing && existing.sortOrder !== category.sortOrder) {
        await opexRepository.updateCategorySortOrder(existing.id, category.sortOrder);
      }

      const heads = (await opexRepository.listExpenseHeads()).filter((h) => h.categoryId === categoryRow.id);
      const headByName = new Map(heads.map((h) => [normalize(h.name), h]));

      for (let i = 0; i < category.heads.length; i += 1) {
        const headName = category.heads[i];
        if (!headName) continue;
        const sortOrder = i + 1;
        const existingHead = headByName.get(normalize(headName));
        if (!existingHead) {
          await opexRepository.createExpenseHeadWithSort({
            categoryId: categoryRow.id,
            name: headName,
            sortOrder
          });
        } else if (existingHead.sortOrder !== sortOrder) {
          await opexRepository.updateExpenseHeadSortOrder(existingHead.id, sortOrder);
        }
      }
    }
  }
};


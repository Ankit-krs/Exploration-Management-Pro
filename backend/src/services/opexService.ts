import { opexRepository } from "../repositories/opexRepository.js";
import { HttpError } from "../utils/httpError.js";
import { MASTER_OPEX_TAXONOMY } from "./opexTaxonomyService.js";

const normalize = (value: string) => value.trim().toLowerCase();
const isLegacyPlaceholderCategory = (name: string) => /^cat\s+\d+$/i.test(name.trim());
const isLegacyPlaceholderHead = (name: string) => /^head\s+\d+$/i.test(name.trim());

const categoryOrderMap = new Map(MASTER_OPEX_TAXONOMY.map((cat) => [normalize(cat.name), cat.sortOrder]));

export const opexService = {
  async listCategories() {
    const categories = (await opexRepository.listCategories()).filter((c) => !isLegacyPlaceholderCategory(c.name));
    return categories.sort((a, b) => {
      const aOrder = a.sortOrder ?? categoryOrderMap.get(normalize(a.name)) ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.sortOrder ?? categoryOrderMap.get(normalize(b.name)) ?? Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.name.localeCompare(b.name);
    });
  },

  createCategory(name: string) {
    return opexRepository.createCategory(name.trim());
  },

  deleteCategory(id: string) {
    return opexRepository.removeCategory(id);
  },

  async listExpenseHeads() {
    const categoryList = (await opexRepository.listCategories()).filter((c) => !isLegacyPlaceholderCategory(c.name));
    const validCategoryIds = new Set(categoryList.map((c) => c.id));
    const heads = (await opexRepository.listExpenseHeads()).filter(
      (h) => validCategoryIds.has(h.categoryId) && !isLegacyPlaceholderHead(h.name)
    );
    const categoryById = new Map(categoryList.map((c) => [c.id, c]));

    return heads.sort((a, b) => {
      const aCategory = categoryById.get(a.categoryId);
      const bCategory = categoryById.get(b.categoryId);
      const aCategoryOrder = aCategory?.sortOrder ?? categoryOrderMap.get(normalize(aCategory?.name ?? "")) ?? Number.MAX_SAFE_INTEGER;
      const bCategoryOrder = bCategory?.sortOrder ?? categoryOrderMap.get(normalize(bCategory?.name ?? "")) ?? Number.MAX_SAFE_INTEGER;
      if (aCategoryOrder !== bCategoryOrder) return aCategoryOrder - bCategoryOrder;

      const aHeadOrder = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
      const bHeadOrder = b.sortOrder ?? Number.MAX_SAFE_INTEGER;
      if (aHeadOrder !== bHeadOrder) return aHeadOrder - bHeadOrder;
      return a.name.localeCompare(b.name);
    });
  },

  createExpenseHead(input: { categoryId: string; name: string }) {
    return opexRepository.createExpenseHead({
      categoryId: input.categoryId,
      name: input.name.trim()
    });
  },

  deleteExpenseHead(id: string) {
    return opexRepository.removeExpenseHead(id);
  },

  listOpexEntries() {
    return opexRepository.listOpexEntries();
  },

  async createOpexEntry(input: {
    siteId: string;
    categoryId: string;
    expenseHeadId: string;
    amount: number;
    date: string;
    remarks?: string;
    createdById: string;
  }) {
    const expenseHead = await opexRepository.findExpenseHeadById(input.expenseHeadId);
    if (!expenseHead) {
      throw new HttpError(400, "Selected expense head does not exist");
    }
    if (expenseHead.categoryId !== input.categoryId) {
      throw new HttpError(400, "Selected expense head does not belong to selected category");
    }

    const payload = {
      siteId: input.siteId,
      categoryId: input.categoryId,
      expenseHeadId: input.expenseHeadId,
      amount: input.amount,
      date: new Date(input.date),
      createdById: input.createdById
    } as {
      siteId: string;
      categoryId: string;
      expenseHeadId: string;
      amount: number;
      date: Date;
      remarks?: string;
      createdById: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return opexRepository.createOpexEntry(payload);
  },

  async updateOpexEntry(input: {
    id: string;
    categoryId: string;
    expenseHeadId: string;
    amount: number;
    date: string;
    remarks?: string;
  }) {
    const expenseHead = await opexRepository.findExpenseHeadById(input.expenseHeadId);
    if (!expenseHead) {
      throw new HttpError(400, "Selected expense head does not exist");
    }
    if (expenseHead.categoryId !== input.categoryId) {
      throw new HttpError(400, "Selected expense head does not belong to selected category");
    }

    const payload = {
      id: input.id,
      categoryId: input.categoryId,
      expenseHeadId: input.expenseHeadId,
      amount: input.amount,
      date: new Date(input.date)
    } as {
      id: string;
      categoryId: string;
      expenseHeadId: string;
      amount: number;
      date: Date;
      remarks?: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return opexRepository.updateOpexEntry(payload);
  },

  deleteOpexEntry(id: string) {
    return opexRepository.removeOpexEntry(id);
  }
};

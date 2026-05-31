import { prisma } from "../config/prisma.js";
import { opexTaxonomyService } from "../services/opexTaxonomyService.js";

const run = async () => {
  await opexTaxonomyService.ensureMasterTaxonomy();
  const categoryCount = await prisma.category.count();
  const headCount = await prisma.expenseHead.count();
  console.log(`OPEX taxonomy seed complete. categories=${categoryCount} heads=${headCount}`);
};

run()
  .catch((error) => {
    console.error("OPEX taxonomy seed failed", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


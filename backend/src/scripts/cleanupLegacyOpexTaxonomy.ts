import { prisma } from "../config/prisma.js";

const isLegacyCategory = (name: string) => /^cat\s+\d+$/i.test(name.trim());
const isLegacyHead = (name: string) => /^head\s+\d+$/i.test(name.trim());

const run = async () => {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          opexEntries: true,
          expenseHeads: true
        }
      }
    }
  });

  const heads = await prisma.expenseHead.findMany({
    include: {
      _count: {
        select: {
          opexEntries: true
        }
      }
    }
  });

  const legacyHeads = heads.filter((h) => isLegacyHead(h.name));
  const legacyCategories = categories.filter((c) => isLegacyCategory(c.name));

  let deletedHeads = 0;
  let skippedHeadsInUse = 0;
  for (const head of legacyHeads) {
    if (head._count.opexEntries > 0) {
      skippedHeadsInUse += 1;
      continue;
    }
    await prisma.expenseHead.delete({ where: { id: head.id } });
    deletedHeads += 1;
  }

  let deletedCategories = 0;
  let skippedCategoriesInUse = 0;
  for (const category of legacyCategories) {
    const remainingHeads = await prisma.expenseHead.count({ where: { categoryId: category.id } });
    if (category._count.opexEntries > 0 || remainingHeads > 0) {
      skippedCategoriesInUse += 1;
      continue;
    }
    await prisma.category.delete({ where: { id: category.id } });
    deletedCategories += 1;
  }

  console.log(
    JSON.stringify(
      {
        legacyHeadsFound: legacyHeads.length,
        deletedHeads,
        skippedHeadsInUse,
        legacyCategoriesFound: legacyCategories.length,
        deletedCategories,
        skippedCategoriesInUse
      },
      null,
      2
    )
  );
};

run()
  .catch((error) => {
    console.error("Failed to clean legacy OPEX taxonomy rows", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


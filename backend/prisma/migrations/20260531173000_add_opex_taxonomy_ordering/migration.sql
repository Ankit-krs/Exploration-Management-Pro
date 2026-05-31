ALTER TABLE "categories" ADD COLUMN IF NOT EXISTS "sort_order" INTEGER;
ALTER TABLE "expense_heads" ADD COLUMN IF NOT EXISTS "sort_order" INTEGER;

CREATE INDEX IF NOT EXISTS "idx_categories_sort_order" ON "categories"("sort_order");
CREATE INDEX IF NOT EXISTS "idx_expense_heads_sort_order" ON "expense_heads"("sort_order");

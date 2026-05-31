-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_heads" (
    "id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expense_heads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opex_entries" (
    "id" UUID NOT NULL,
    "site_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "expense_head_id" UUID NOT NULL,
    "amount" DECIMAL(14,2) NOT NULL,
    "date" DATE NOT NULL,
    "remarks" TEXT NOT NULL DEFAULT '',
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "opex_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE INDEX "idx_expense_heads_category_id" ON "expense_heads"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_expense_heads_category_name" ON "expense_heads"("category_id", "name");

-- CreateIndex
CREATE INDEX "idx_opex_entries_site_date" ON "opex_entries"("site_id", "date");

-- CreateIndex
CREATE INDEX "idx_opex_entries_category_id" ON "opex_entries"("category_id");

-- CreateIndex
CREATE INDEX "idx_opex_entries_expense_head_id" ON "opex_entries"("expense_head_id");

-- AddForeignKey
ALTER TABLE "expense_heads" ADD CONSTRAINT "expense_heads_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opex_entries" ADD CONSTRAINT "opex_entries_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opex_entries" ADD CONSTRAINT "opex_entries_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opex_entries" ADD CONSTRAINT "opex_entries_expense_head_id_fkey" FOREIGN KEY ("expense_head_id") REFERENCES "expense_heads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opex_entries" ADD CONSTRAINT "opex_entries_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

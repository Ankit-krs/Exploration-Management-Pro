-- CreateTable
CREATE TABLE "advance_entries" (
    "id" UUID NOT NULL,
    "site_id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "amount" DECIMAL(14,2) NOT NULL,
    "remarks" TEXT NOT NULL DEFAULT '',
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "advance_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_advance_entries_site_date" ON "advance_entries"("site_id", "date");

-- AddForeignKey
ALTER TABLE "advance_entries" ADD CONSTRAINT "advance_entries_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advance_entries" ADD CONSTRAINT "advance_entries_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

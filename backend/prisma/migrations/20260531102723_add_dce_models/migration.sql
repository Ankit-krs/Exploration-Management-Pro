-- CreateEnum
CREATE TYPE "DceStatus" AS ENUM ('ACTIVE', 'PAUSED', 'STOPPED');

-- CreateTable
CREATE TABLE "dce_entries" (
    "id" UUID NOT NULL,
    "site_id" UUID NOT NULL,
    "cost_head" VARCHAR(200) NOT NULL,
    "per_day_cost" DECIMAL(14,2) NOT NULL,
    "start_date" DATE NOT NULL,
    "status" "DceStatus" NOT NULL DEFAULT 'ACTIVE',
    "remarks" TEXT NOT NULL DEFAULT '',
    "paused_at" DATE,
    "stopped_at" DATE,
    "total_paused_days" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dce_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_dce_entries_site_start_date" ON "dce_entries"("site_id", "start_date");

-- CreateIndex
CREATE INDEX "idx_dce_entries_status" ON "dce_entries"("status");

-- AddForeignKey
ALTER TABLE "dce_entries" ADD CONSTRAINT "dce_entries_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dce_entries" ADD CONSTRAINT "dce_entries_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

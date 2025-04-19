/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Buyer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `Farmer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `buyer` ADD COLUMN `uuid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `farmer` ADD COLUMN `uuid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `supplier` ADD COLUMN `uuid` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Buyer_uuid_key` ON `Buyer`(`uuid`);

-- CreateIndex
CREATE UNIQUE INDEX `Farmer_uuid_key` ON `Farmer`(`uuid`);

-- CreateIndex
CREATE UNIQUE INDEX `Supplier_uuid_key` ON `Supplier`(`uuid`);

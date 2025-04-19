/*
  Warnings:

  - The primary key for the `buyer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `buyer` table. All the data in the column will be lost.
  - The primary key for the `farmer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `farmer` table. All the data in the column will be lost.
  - The primary key for the `supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `supplier` table. All the data in the column will be lost.
  - Made the column `uuid` on table `buyer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uuid` on table `farmer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uuid` on table `supplier` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_buyerId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_farmerid_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_farmerid_fkey`;

-- DropIndex
DROP INDEX `Buyer_uuid_key` ON `buyer`;

-- DropIndex
DROP INDEX `Farmer_uuid_key` ON `farmer`;

-- DropIndex
DROP INDEX `Order_buyerId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_farmerid_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_supplierId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Product_farmerid_fkey` ON `product`;

-- DropIndex
DROP INDEX `Supplier_uuid_key` ON `supplier`;

-- AlterTable
ALTER TABLE `buyer` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);

-- AlterTable
ALTER TABLE `farmer` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);

-- AlterTable
ALTER TABLE `supplier` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

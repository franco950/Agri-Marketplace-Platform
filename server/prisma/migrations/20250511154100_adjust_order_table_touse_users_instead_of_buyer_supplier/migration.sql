/*
  Warnings:

  - You are about to drop the column `buyerId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_buyerId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_supplierId_fkey`;

-- DropIndex
DROP INDEX `Order_buyerId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_supplierId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `buyerId`,
    DROP COLUMN `supplierId`,
    MODIFY `customertype` ENUM('BUYER', 'SUPPLIER') NOT NULL DEFAULT 'BUYER';

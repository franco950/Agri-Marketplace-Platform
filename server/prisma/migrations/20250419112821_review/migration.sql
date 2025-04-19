/*
  Warnings:

  - The primary key for the `buyer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `buyer` table. All the data in the column will be lost.
  - The primary key for the `farmer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `farmer` table. All the data in the column will be lost.
  - The primary key for the `order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `supplier` table. All the data in the column will be lost.
  - The required column `id` was added to the `Buyer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Farmer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Supplier` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_buyerId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_farmerid_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productid_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_farmerid_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_productid_fkey`;

-- DropIndex
DROP INDEX `Order_buyerId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_farmerid_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_productid_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_supplierId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Product_farmerid_fkey` ON `product`;

-- DropIndex
DROP INDEX `Review_productid_fkey` ON `review`;

-- AlterTable
ALTER TABLE `buyer` DROP PRIMARY KEY,
    DROP COLUMN `uuid`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `farmer` DROP PRIMARY KEY,
    DROP COLUMN `uuid`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `order` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `productid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `review` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `productid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `supplier` DROP PRIMARY KEY,
    DROP COLUMN `uuid`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

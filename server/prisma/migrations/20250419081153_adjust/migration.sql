/*
  Warnings:

  - The primary key for the `buyer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `farmer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

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
DROP INDEX `Order_buyerId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_farmerid_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_supplierId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Product_farmerid_fkey` ON `product`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `buyer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `farmer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `order` MODIFY `buyerId` VARCHAR(191) NULL,
    MODIFY `supplierId` VARCHAR(191) NULL,
    MODIFY `farmerid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `farmerid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `supplier` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` MODIFY `id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `Farmer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The values [GRAIN,MEAT] on the enum `product_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_farmerid_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productid_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_userId_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `type` ENUM('CEREAL', 'FRUIT', 'VEGETABLE', 'LEGUME', 'TUBER', 'HERB', 'SPICE', 'NUT_AND_SEED', 'DAIRY', 'LIVESTOCK', 'POULTRY', 'AQUACULTURE', 'HONEY_AND_BEE', 'FLOWER_AND_ORNAMENTAL', 'ANIMAL_FEED', 'AGROCHEMICAL', 'FARM_TOOL_EQUIPMENT', 'PROCESSED_FOOD', 'BEVERAGE_CROP', 'FIBER_CROP', 'OTHER') NOT NULL,
    MODIFY `unit` ENUM('KG', 'LITERS', 'BAGS', 'CRATES', 'BUNCHES', 'PIECES', 'ANIMALS', 'PACKETS', 'TOOLS', 'OTHER') NOT NULL;

-- DropTable
DROP TABLE `order`;

-- CreateTable
CREATE TABLE `myorder` (
    `id` VARCHAR(191) NOT NULL,
    `customertype` ENUM('BUYER', 'SUPPLIER') NOT NULL,
    `productid` VARCHAR(191) NOT NULL,
    `deliverylatitude` DOUBLE NULL,
    `deliverylongitude` DOUBLE NULL,
    `deliveryoption` ENUM('FARMER', 'SELF', 'SERVICE') NOT NULL DEFAULT 'FARMER',
    `totalcost` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tracking` ENUM('DELIVERED', 'ENROUTE', 'PACKING', 'PACKED') NOT NULL DEFAULT 'PACKING',
    `farmerid` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    INDEX `Order_farmerid_fkey`(`farmerid`),
    INDEX `Order_productid_fkey`(`productid`),
    INDEX `Order_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chatbotMessage` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `prompt` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `read` BOOLEAN NOT NULL DEFAULT false,

    INDEX `message_receiverId_idx`(`receiverId`),
    INDEX `message_senderId_idx`(`senderId`),
    INDEX `message_senderId_receiverId_idx`(`senderId`, `receiverId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `myorder` ADD CONSTRAINT `Order_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `farmer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `myorder` ADD CONSTRAINT `Order_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `myorder` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chatbotMessage` ADD CONSTRAINT `chatbotMessage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

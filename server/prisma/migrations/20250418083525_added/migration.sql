-- AlterTable
ALTER TABLE `product` ADD COLUMN `discount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `locationlatitude` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `locationlongitude` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `supplierthreshold` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customertype` ENUM('BUYER', 'SUPPLIER') NOT NULL,
    `buyerId` INTEGER NULL,
    `supplierId` INTEGER NULL,
    `productid` INTEGER NOT NULL,
    `deliverylatitude` DOUBLE NOT NULL,
    `deliverylongitude` DOUBLE NOT NULL,
    `deliveryoption` ENUM('FARMER', 'SELF', 'SERVICE') NOT NULL,
    `totalcost` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tracking` ENUM('DELIVERED', 'ENROUTE', 'PACKING', 'PACKED') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

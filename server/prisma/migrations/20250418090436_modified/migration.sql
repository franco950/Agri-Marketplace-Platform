-- AlterTable
ALTER TABLE `product` ADD COLUMN `farmerdelivery` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `servicedelivery` BOOLEAN NOT NULL DEFAULT false;

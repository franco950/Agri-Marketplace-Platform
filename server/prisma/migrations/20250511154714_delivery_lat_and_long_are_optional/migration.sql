-- AlterTable
ALTER TABLE `order` ALTER COLUMN `customertype` DROP DEFAULT,
    MODIFY `deliverylatitude` DOUBLE NULL,
    MODIFY `deliverylongitude` DOUBLE NULL,
    MODIFY `deliveryoption` ENUM('FARMER', 'SELF', 'SERVICE') NOT NULL DEFAULT 'FARMER';

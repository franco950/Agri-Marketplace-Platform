/*
  Warnings:

  - Made the column `tracking` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `tracking` ENUM('DELIVERED', 'ENROUTE', 'PACKING', 'PACKED') NOT NULL DEFAULT 'PACKING';

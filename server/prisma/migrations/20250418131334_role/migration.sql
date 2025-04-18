/*
  Warnings:

  - The values [BUYER,SUPPLIER,FARMER,ADMIN,WORKER] on the enum `User_usertype` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `usertype` ENUM('buyer', 'supplier', 'farmer', 'admin', 'worker') NOT NULL;

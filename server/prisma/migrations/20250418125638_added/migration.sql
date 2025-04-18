-- CreateTable
CREATE TABLE `User` (
    `userid` INTEGER NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `isactive` BOOLEAN NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `usertype` ENUM('BUYER', 'SUPPLIER', 'FARMER', 'ADMIN', 'WORKER') NOT NULL,

    PRIMARY KEY (`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropForeignKey
ALTER TABLE `officerprofile` DROP FOREIGN KEY `OfficerProfile_userId_fkey`;

-- AddForeignKey
ALTER TABLE `OfficerProfile` ADD CONSTRAINT `OfficerProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

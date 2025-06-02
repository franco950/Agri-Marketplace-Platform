-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: agri_marketplace_db
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('04ad4f89-6199-416f-af31-737aa3946a91','718d87d526a6adf311dc6948aa6bc3990661cc0e527bc84b16b9968e09315d4c','2025-04-19 11:27:20.365','20250418131939_adde',NULL,NULL,'2025-04-19 11:27:20.205',1),('0cd7b899-a3e0-44be-b79c-f3165fd8c501','149aba027a2c2297ae9d2e4ec2d8ff5fa0a203043ad7024853aacfded08c526f','2025-04-19 11:28:29.319','20250419112821_review',NULL,NULL,'2025-04-19 11:28:27.321',1),('1193dc28-024d-4acf-9859-d52c213a8a96','ba4f28f7a39a0928572642b6708ff8a68290b443b9107de7565deda85207e65b','2025-04-19 11:27:22.488','20250419081153_adjust',NULL,NULL,'2025-04-19 11:27:20.555',1),('1b9b5aa5-c9ed-4e66-b54f-bb6c780d0cf6','9153fa196d2a5fd4a401d2bce8740b78fe1206f12b68f85e2dbe51d749323b2a','2025-04-19 11:27:20.174','20250418125924_changed_userid_to_id_in_user',NULL,NULL,'2025-04-19 11:27:20.068',1),('2b7d0d75-bdc1-49f9-bdeb-6a674b1586ff','0d457a2b59a684e8240089af93152a740874bbe0daf4bd23ea9f1c6de3ec4c72','2025-04-19 11:27:19.133','20250418090436_modified',NULL,NULL,'2025-04-19 11:27:18.957',1),('2edfdc6a-9811-415c-8841-fc6f32a06c5a','36b1ca9d3ce2a2d8e56f7ecbcac9045e8cc2fb8b44a62bec786fa1cb16324f3e','2025-05-11 15:47:22.643','20250511154714_delivery_lat_and_long_are_optional',NULL,NULL,'2025-05-11 15:47:22.515',1),('4dbc2aae-6612-4b73-9d75-893f21717729','5016198f0e7c3c07744e0c95278d633c1cf1b3b4f0bb65508ddabc5d8f44a0af','2025-04-19 11:27:20.016','20250418125638_added',NULL,NULL,'2025-04-19 11:27:19.970',1),('71df0378-f0fb-420f-94f5-d0ba2b60025f','6030b0c2abf6ad0f9328c91f2be02557732756984b4e228e78a417d8d20f7a19','2025-04-19 12:25:13.230','20250419122505_update',NULL,NULL,'2025-04-19 12:25:12.855',1),('7a4cd272-d541-4516-8352-e3582715afb5','25f71a8b51bfcf261b12e1a799963d3fee694a726085c79d30671b4147ddbe0a','2025-04-19 11:27:19.967','20250418112103_modified',NULL,NULL,'2025-04-19 11:27:19.523',1),('8bf45f32-d772-43d1-b7c3-457ed429ad80','0199f3207856a52bef241cbdda4af3c7973c3e9b3800a9a22b946e2b5f4287e4','2025-04-19 12:43:08.956','20250419124259_update',NULL,NULL,'2025-04-19 12:43:08.908',1),('8c9b180f-70a2-47fe-9302-640c56592780','a3dbd42b08b01fc74eba6ffd033df1a9520d0f1897f6e54993231a69614bd4dd','2025-05-11 17:13:23.378','20250511171317_added_quantity_to_order_table',NULL,NULL,'2025-05-11 17:13:23.288',1),('954b0d6c-7ac2-4d26-a751-527be7cec529','7d147ffb7648f87493f59a7416a099d53308d6bf863e363b816c5aeb2c0a5e0e','2025-04-19 11:27:19.518','20250418102659_modified',NULL,NULL,'2025-04-19 11:27:19.136',1),('bb54e623-b281-42cc-ade5-c713be2fb716','055d2b1bfaa35439f47ea03cf35269c965a5b44af83f8e6d50bc10b7b3d87715','2025-05-11 15:41:08.099','20250511154100_adjust_order_table_touse_users_instead_of_buyer_supplier',NULL,NULL,'2025-05-11 15:41:07.869',1),('c4cb8e91-0c6e-41da-807d-a3de95d44a3a','6d1a6056f9d34ba6e121a912a7dbdd238eca71bed075ca11381717f9a5a69abe','2025-05-10 20:16:29.275','20250510201621_adjusted_order_model',NULL,NULL,'2025-05-10 20:16:28.996',1),('d1109e18-e7d3-4043-9256-51b27a62dd5a','11083ead8868038168b637a0fb304fb90acee8ddafab04c1318cb2b05fc5cba1','2025-04-19 11:27:24.793','20250419111042_map',NULL,NULL,'2025-04-19 11:27:23.127',1),('d6ef10fb-09e8-46c9-95a2-61b86accb811','36cbadd61c069d949bce8de4bb990e197574f95751d5c35e069693d40d24d5ea','2025-04-19 11:27:20.064','20250418125814_added',NULL,NULL,'2025-04-19 11:27:20.022',1),('d8619d4d-501d-4393-bae3-15201ea64535','6c32bad9116030ce6976aa441e5ec80fe2316e5c40bc65e1227fea33f02bd060','2025-04-19 11:27:20.201','20250418131334_role',NULL,NULL,'2025-04-19 11:27:20.178',1),('ddcda314-a5f8-46f8-bcf3-0ff5c6450c83','8c76f588ece93e9e934305d1bb9d785d37f35d302a7a02cf1ab821249aec37ac','2025-04-19 11:27:20.549','20250419075650_adjust',NULL,NULL,'2025-04-19 11:27:20.371',1),('eb18ffc9-091c-41be-bc85-cff6b7bfa69a','ede8fcd95c06c64e220e7627817b2b5d494e204f1f43ef81cdee928a91c02f3a','2025-04-19 11:27:18.342','20250416143851_added',NULL,NULL,'2025-04-19 11:27:17.562',1),('ee63ef18-cf7d-412e-883e-b7bbed1f4095','0c7928d2e02cfb195545765792e8b32027cea2053260fc9b105a2a098967f966','2025-04-19 11:27:18.951','20250418083525_added',NULL,NULL,'2025-04-19 11:27:18.350',1),('f9c6f573-0c7b-4f74-a8c3-0300f9398ad4','8566417d71f19f213db3f710822e07ceb814d8d5546ef003939ef117c16531bb','2025-04-19 11:27:23.120','20250419110414_add',NULL,NULL,'2025-04-19 11:27:22.493',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admin_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyer` (
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Buyer_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyer`
--

LOCK TABLES `buyer` WRITE;
/*!40000 ALTER TABLE `buyer` DISABLE KEYS */;
INSERT INTO `buyer` VALUES ('Njeri','Wambui','buyer6@example.com','$2b$10$ELbJpV3XtzeOKdCmCQvWV.iAdBmuofz8Sl6rPwoiJQvn0zSicIvny','+254739542246',1,'1d69c595-2c37-407d-ae99-e56f22f8029a'),('Mwangi','Cheruiyot','buyer5@example.com','$2b$10$H.b0AJF/86AHup17zkwYUOsyNJ8pzblvZlVUMPguJa1MWTjllGUMe','+254770962464',1,'297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57'),('Kiptoo','Odhiambo','buyer9@example.com','$2b$10$cEnjqnV9MjN59P26C16/0uclb6CG9dGlkoJJTptx4VFoSAzJUzjzm','+254732688702',1,'2dc7a6dc-c8ed-426a-9df7-3a4fb51d55c0'),('Kamau','Mutua','buyer4@example.com','$2b$10$s6FNSlLAflrY4Jt.uhvIBe3eHD60hutmsr09OqdtfQWePEvoH8Pfm','+254782422423',1,'39f21486-bcae-4029-b784-15a0555c40b1'),('Mwangi','Muthoni','buyer10@example.com','$2b$10$l3GTBIxI3GzQrf4HQD.8NuR7xbA9hwXmaDCrfyYSt6vis3tdwb4gS','+254783917184',1,'48f9411d-c6d6-456e-bf9f-616571df0e37'),('minute','maid','minutemaid@example.com','$2b$10$D8j9FOI/QrO.MUy4nKEAheIHvSJSJww0doCaERganWjxGwbA8RCvW','+254112112112',1,'521afac2-e8bb-4b54-9f95-a27f34cfbcc9'),('Chebet','Kiprotich','buyer8@example.com','$2b$10$zq5VVSPtuDjtq0iOHEQji.ifFQZIToPD21lCPoX2LBzA2imsGvquK','+254763805003',1,'66c9b830-cdc8-422c-9dc3-cecdd1f2e1dc'),('Wanjiku','Cheruiyot','buyer3@example.com','$2b$10$IXPXpD70wKuFjJ4zHNriIOMFiDM7/Ji6IRx43YkM7o6.tbnkjRJLq','+254752216085',1,'7e6cac7a-0476-459a-8562-4524aff951af'),('Nyambura','Odhiambo','buyer2@example.com','$2b$10$oygK70ickVZkspzOroCyAeHoKE4WPLXD/aXNIuwRv45ttV4yI1P1a','+254712886214',1,'89144a03-7352-49c5-b4c0-a54b8076ec08'),('Otieno','Koech','buyer7@example.com','$2b$10$9Rk6jQPxk3VNdR9uoEz0kuZFJINTPyzM8tIH8hbQHgRcWrwDbWqve','+254793244530',1,'ad4ee3cd-2e79-4e3d-bf19-88c04ef51312'),('Mwangi','Were','buyer1@example.com','$2b$10$0iNt.weaoLuNKX1I0Ek4Xuq5BLkjeFQ9tol0zhhQH/.KauQttlx8O','+254728011241',1,'d0c40705-c2eb-48bf-9604-559fa8318b8e');
/*!40000 ALTER TABLE `buyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer`
--

DROP TABLE IF EXISTS `farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer` (
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Farmer_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer`
--

LOCK TABLES `farmer` WRITE;
/*!40000 ALTER TABLE `farmer` DISABLE KEYS */;
INSERT INTO `farmer` VALUES ('frank','weiss','frankweiss@example.com','$2b$10$58BRJxXDQ1WYHDUvfl8wleQw24RRCcreYigGiKU5Pps4T/kd3mJJy','+254111111111',1,'27cac61b-5c13-443f-b40b-842bfd4759ca'),('Ouma','Kiprotich','farmer2@example.com','$2b$10$gBkOEa43B/BcK69ACzzpnervTvt.DUCGhvjv99JoSlUEqcWoW9V/u','+254773089312',1,'2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0'),('Chebet','Barasa','farmer3@example.com','$2b$10$sYE2nyPxQZ3DaVvKTSQSJuNVjdbiYw8Fa7p6weU4zFOokOLy/MlDK','+254767284463',1,'84207683-8e85-44cd-8788-645d57717d42'),('Ouma','Mutua','farmer9@example.com','$2b$10$xZqIW1vrOoyqEL1a4KlyJOt/Rv7NLyiJ2LU85Y5n1qcoR9Qd15mPS','+254741415930',1,'8a5103b5-df05-4155-8cb6-522158adf034'),('Kiptoo','Mutua','farmer8@example.com','$2b$10$xyg4pDTK65QzJuwOhKlTOO6ELlYncisK7JHpz5USmE1d4mgBxH9Sa','+254760733041',1,'8b7db486-7f8c-4c6b-9192-3f1a3cf91606'),('Kamau','Koech','farmer10@example.com','$2b$10$UF04Cupio6cebWMFbo7ZgOHfNjFYTUhcSmZ8pxQBV7JMtPnqgBIg2','+254723272337',1,'9b1f0215-71e2-4383-82e8-c153080f156d'),('Mwangi','Wambui','farmer6@example.com','$2b$10$stvtyjImYX4XrvG8a0Qjre.7W5qNXnE24PVWB1GdaOnf9vFwkgJTS','+254741199462',1,'9de17d9b-906a-4992-bcf7-63186fd7ff8d'),('Mwangi','Kiprotich','farmer5@example.com','$2b$10$4fkI0CVKTSmA664HhymxUeUlsJol1VlB1G17Hdb7r3WaJxp1TxEqG','+254712132242',1,'d48f07a5-7ccd-4bfc-8ca6-4ec31e70236d'),('Wanjiku','Kiprotich','farmer1@example.com','$2b$10$xkvdtC/3GP0qlYMTgIvvC.Hm2dIj7wJVF7XL.SuX8vaSdir546Sfi','+254742525132',1,'d6b9fb1d-722e-4a4d-95a8-1b9684a5e681'),('Mwangi','Kiprotich','farmer4@example.com','$2b$10$L8GMyix8pVTL6qqV3hh13e6DGJOC9jFWdkwoNPUoh83VE/oJCmn..','+254722631670',1,'e9a7fa66-b864-4122-bf01-f6b0012305a2'),('Achieng','Cheruiyot','farmer7@example.com','$2b$10$6UFn4ywHAARJHm/VtfWkt.S4NE2u2BJ4qUQyI9.5O1AUlkmoqtEpG','+254726569429',1,'f575a004-df7a-4324-b7b1-5c64be5aa119');
/*!40000 ALTER TABLE `farmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myorder`
--

DROP TABLE IF EXISTS `myorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myorder` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customertype` enum('BUYER','SUPPLIER') COLLATE utf8mb4_unicode_ci NOT NULL,
  `productid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deliverylatitude` double DEFAULT NULL,
  `deliverylongitude` double DEFAULT NULL,
  `deliveryoption` enum('FARMER','SELF','SERVICE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'FARMER',
  `totalcost` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tracking` enum('DELIVERED','ENROUTE','PACKING','PACKED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PACKING',
  `farmerid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Order_productid_fkey` (`productid`),
  KEY `Order_farmerid_fkey` (`farmerid`),
  KEY `Order_userId_fkey` (`userId`),
  CONSTRAINT `Order_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `farmer` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Order_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myorder`
--

LOCK TABLES `myorder` WRITE;
/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` VALUES ('0246b87b-b663-4619-acd6-a336e276c920','SUPPLIER','ed836506-c49f-4a82-9877-b82e76f53159',NULL,NULL,'FARMER',905,'2025-05-11 17:36:02.516','2025-05-11 17:36:02.516','PACKING','9de17d9b-906a-4992-bcf7-63186fd7ff8d','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',5),('0a58f949-ac81-4df0-abce-81098357c7b6','SUPPLIER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',137,'2025-05-11 17:29:35.686','2025-05-11 17:29:35.686','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',1),('19a231eb-1b2f-492d-a6b0-30c930316e9e','SUPPLIER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',548,'2025-05-13 04:00:48.967','2025-05-13 04:00:48.967','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',4),('239f364a-219f-4810-bec5-320ddba556ec','BUYER','c34c294f-bf9d-4c6b-8e7f-4c887e764a8f',NULL,NULL,'FARMER',1251,'2025-05-27 12:02:36.652','2025-05-27 12:02:36.652','PACKING','f575a004-df7a-4324-b7b1-5c64be5aa119','d0c40705-c2eb-48bf-9604-559fa8318b8e',3),('25977bb9-5741-4f0e-b802-b7b16265cc2a','SUPPLIER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',411,'2025-05-11 18:53:32.557','2025-05-11 18:53:32.557','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',3),('3c88fe14-5ec0-4adf-a5c6-7e21149c3df0','SUPPLIER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',411,'2025-05-11 17:45:04.366','2025-05-11 17:45:04.366','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',3),('4b7c0432-f260-4fa0-bc5d-33eb9fb1f3c6','SUPPLIER','ed836506-c49f-4a82-9877-b82e76f53159',NULL,NULL,'FARMER',543,'2025-05-11 17:34:18.512','2025-05-11 17:34:18.512','PACKING','9de17d9b-906a-4992-bcf7-63186fd7ff8d','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',3),('7a63d670-9ed3-4c7d-a0da-e93208d95c10','SUPPLIER','765334b7-4689-4879-acfd-427d7128d2b0',NULL,NULL,'FARMER',265,'2025-05-13 04:00:48.967','2025-05-13 04:00:48.967','PACKING','84207683-8e85-44cd-8788-645d57717d42','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',5),('856647fb-9a5a-4c66-a06d-d9ba07a0fe21','BUYER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',137,'2025-05-27 12:02:36.652','2025-05-27 12:02:36.652','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','d0c40705-c2eb-48bf-9604-559fa8318b8e',1),('d1e3ec65-8973-4c5f-befb-9c992654c4f4','SUPPLIER','e9a51581-4b54-4da1-971f-126e6fd88196',NULL,NULL,'FARMER',411,'2025-05-11 18:53:53.498','2025-05-11 18:53:53.498','PACKING','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',3),('f9ba9779-62ad-42cd-8c5e-da85fcfc42fb','SUPPLIER','ed836506-c49f-4a82-9877-b82e76f53159',NULL,NULL,'FARMER',181,'2025-05-11 17:35:38.777','2025-05-11 17:35:38.777','PACKING','9de17d9b-906a-4992-bcf7-63186fd7ff8d','6f35e3f4-1f74-4f22-bf4b-0180d6054b57',1);
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('FRUIT','VEGETABLE','GRAIN','LEGUME','TUBER','DAIRY','MEAT','POULTRY','OTHER') COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit` enum('KG','LITERS','BAGS','CRATES','BUNCHES','PIECES','OTHER') COLLATE utf8mb4_unicode_ci NOT NULL,
  `priceperunit` int NOT NULL,
  `quantity` int NOT NULL,
  `variety` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perishdate` datetime(3) NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('AVAILABLE','SOLD','PENDING','EXPIRED','RESERVED') COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `farmerid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int NOT NULL DEFAULT '0',
  `locationlatitude` double NOT NULL DEFAULT '0',
  `locationlongitude` double NOT NULL DEFAULT '0',
  `supplierthreshold` int NOT NULL DEFAULT '0',
  `farmerdelivery` tinyint(1) NOT NULL DEFAULT '0',
  `servicedelivery` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `Product_farmerid_fkey` (`farmerid`),
  CONSTRAINT `Product_farmerid_fkey` FOREIGN KEY (`farmerid`) REFERENCES `farmer` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('51693a98-f721-4dda-8285-1775fdce4934','Cabbage','VEGETABLE','KG',124,3900,'Fresh','2025-04-26 11:42:43.581','Meru','PENDING','High quality cabbage from Kenyan farms.','[\"images/product_9.jpg\"]','2025-04-16 11:42:43.581','2025-05-13 18:08:48.770','2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0',0,0,0,0,0,0),('765334b7-4689-4879-acfd-427d7128d2b0','Carrots','VEGETABLE','KG',53,37,'Green','2025-04-25 11:42:43.581','Kitale','RESERVED','High quality carrots from Kenyan farms.','[\"images/product_8.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','84207683-8e85-44cd-8788-645d57717d42',0,0,0,0,0,0),('b20ff074-5d4d-481d-af26-e77047cefe25','Milk','DAIRY','LITERS',291,84,'Organic','2025-04-20 11:42:43.581','Nairobi','RESERVED','High quality milk from Kenyan farms.','[\"images/product_3.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','9b1f0215-71e2-4383-82e8-c153080f156d',0,0,0,0,0,0),('b7e83adb-9140-425e-8e5a-921ac86c4129','Beans','LEGUME','BAGS',136,16,'Red','2025-04-30 11:42:43.581','Eldoret','RESERVED','High quality beans from Kenyan farms.','[\"images/product_7.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','e9a7fa66-b864-4122-bf01-f6b0012305a2',0,0,0,0,0,0),('c34c294f-bf9d-4c6b-8e7f-4c887e764a8f','Chicken','POULTRY','PIECES',417,73,'Dairy breed','2025-04-21 11:42:43.581','Kisumu','EXPIRED','High quality chicken from Kenyan farms.','[\"images/product_4.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','f575a004-df7a-4324-b7b1-5c64be5aa119',0,0,0,0,0,0),('cbe95a8b-a3e0-4a94-b5b1-6f1a70c16f8e','Maize','GRAIN','BAGS',336,71,'Local','2025-04-25 11:42:43.581','Nyeri','AVAILABLE','High quality maize from Kenyan farms.','[\"images/product_1.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','8b7db486-7f8c-4c6b-9192-3f1a3cf91606',0,0,0,0,0,0),('e9a51581-4b54-4da1-971f-126e6fd88196','Bananas','FRUIT','BUNCHES',137,94,'Dry','2025-04-26 11:42:43.581','Nyeri','EXPIRED','High quality bananas from Kenyan farms.','[\"images/product_10.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681',0,0,0,0,0,0),('ed836506-c49f-4a82-9877-b82e76f53159','Mangoes','FRUIT','CRATES',181,43,'Broiler','2025-04-25 11:42:43.581','Kisumu','EXPIRED','High quality mangoes from Kenyan farms.','[\"images/product_5.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','9de17d9b-906a-4992-bcf7-63186fd7ff8d',0,0,0,0,0,0),('edc154d1-7c95-48f9-b94c-22999f6584ad','Potatoes','TUBER','KG',430,4,'Sweet','2025-04-23 11:42:43.581','Nairobi','PENDING','High quality potatoes from Kenyan farms.','[\"images/product_6.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','d48f07a5-7ccd-4bfc-8ca6-4ec31e70236d',0,0,0,0,0,0),('f875fb31-2e13-45c2-89ed-76817fb3321a','Tomatoes','VEGETABLE','CRATES',486,13,'Hybrid','2025-04-28 11:42:43.581','Thika','SOLD','High quality tomatoes from Kenyan farms.','[\"images/product_2.jpg\"]','2025-04-16 11:42:43.581','2025-04-16 11:42:43.581','8a5103b5-df05-4155-8cb6-522158adf034',0,0,0,0,0,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` enum('ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN') COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Review_productid_fkey` (`productid`),
  CONSTRAINT `Review_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES ('0716f869-fba0-4e16-be93-37d592b6fa0d','f1983746-3b3c-4fce-80ea-fe6be478a840','NINE','Great quality maize!','cbe95a8b-a3e0-4a94-b5b1-6f1a70c16f8e'),('080fb80b-be89-46f5-bf2b-1a357690ee71','cb3d022b-cce2-4382-bccd-02840f672478','TWO','Great quality mangoes!','ed836506-c49f-4a82-9877-b82e76f53159'),('1027e365-cd4d-4016-aa04-d433f5eb627b','297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57','SEVEN','Great quality bananas!','e9a51581-4b54-4da1-971f-126e6fd88196'),('1264f036-45dd-4a69-8d6f-bfeab62ec81b','8c87212d-24b2-405c-8c5f-9936537a16db','ONE','Great quality milk!','b20ff074-5d4d-481d-af26-e77047cefe25'),('168f922b-685a-4378-962c-e44cd7be9e55','39f21486-bcae-4029-b784-15a0555c40b1','EIGHT','Great quality cabbage!','51693a98-f721-4dda-8285-1775fdce4934'),('19b3dfc9-2302-40c4-9c95-1d6c3f74e730','89144a03-7352-49c5-b4c0-a54b8076ec08','ONE','Great quality beans!','b7e83adb-9140-425e-8e5a-921ac86c4129'),('1ba90bfc-229c-4178-95b3-cd290ea3e315','8c87212d-24b2-405c-8c5f-9936537a16db','ONE','Great quality milk!','b20ff074-5d4d-481d-af26-e77047cefe25'),('202dfae6-5f22-4869-b717-a71f875d123e','297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57','SEVEN','Great quality bananas!','e9a51581-4b54-4da1-971f-126e6fd88196'),('23eecb07-7152-4639-80b4-c1bae1ec1550','7e6cac7a-0476-459a-8562-4524aff951af','SIX','Great quality carrots!','765334b7-4689-4879-acfd-427d7128d2b0'),('336f6887-ae0b-43c0-92fc-1764c9ebb543','e2e919c3-e247-4090-a355-334cc6c5e89a','THREE','Great quality tomatoes!','f875fb31-2e13-45c2-89ed-76817fb3321a'),('346dccfb-fc25-4510-86d1-7b23a0374e2a','42616117-8096-4f74-95d3-182c197863ec','TEN','Great quality chicken!','c34c294f-bf9d-4c6b-8e7f-4c887e764a8f'),('657f06f2-a693-483f-ad00-aba679fd13f4','42616117-8096-4f74-95d3-182c197863ec','TEN','Great quality chicken!','c34c294f-bf9d-4c6b-8e7f-4c887e764a8f'),('74f44295-1b9c-4c64-b233-ddb5054898cd','d0c40705-c2eb-48bf-9604-559fa8318b8e','TWO','Great quality potatoes!','edc154d1-7c95-48f9-b94c-22999f6584ad'),('8eb741d4-3f81-4810-bcde-34739423ccf9','cb3d022b-cce2-4382-bccd-02840f672478','TWO','Great quality mangoes!','ed836506-c49f-4a82-9877-b82e76f53159'),('a0b6f630-54a5-4f82-8075-b34b765654b1','e2e919c3-e247-4090-a355-334cc6c5e89a','THREE','Great quality tomatoes!','f875fb31-2e13-45c2-89ed-76817fb3321a'),('af0eec98-3e18-475e-8ab1-5cf6a93d0f5f','89144a03-7352-49c5-b4c0-a54b8076ec08','ONE','Great quality beans!','b7e83adb-9140-425e-8e5a-921ac86c4129'),('b5ed7c57-911f-40b6-9fed-62b5a000ec88','d0c40705-c2eb-48bf-9604-559fa8318b8e','TWO','Great quality potatoes!','edc154d1-7c95-48f9-b94c-22999f6584ad'),('c9707282-de46-48cd-a501-6dd02b13c216','39f21486-bcae-4029-b784-15a0555c40b1','EIGHT','Great quality cabbage!','51693a98-f721-4dda-8285-1775fdce4934'),('ca859d73-5689-4109-badd-a9db79eb4dca','f1983746-3b3c-4fce-80ea-fe6be478a840','NINE','Great quality maize!','cbe95a8b-a3e0-4a94-b5b1-6f1a70c16f8e'),('ccdaea60-c835-4e0c-9b3e-660aee88099b','7e6cac7a-0476-459a-8562-4524aff951af','SIX','Great quality carrots!','765334b7-4689-4879-acfd-427d7128d2b0');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('-DL4nmrrIS3CmQvlZlOwmEKaR6mez2x-',1748433757,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:48:55.593Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"Strict\"},\"passport\":{\"user\":\"d0c40705-c2eb-48bf-9604-559fa8318b8e\"}}'),('0pI0GkkmmaMBu5duXPTUgimrUbODKA0v',1748431961,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:32:41.024Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('2rLwTmgmJncFK8wXBj2xkh1laZpEpirO',1748431428,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:23:48.447Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('4Nwh1niEwRgLVNRc7-6Dm9pB3YQIDq-V',1748432525,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:36:06.378Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"Strict\"},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('4tbVnkrv_gxBd8jjN3SVmzZvXg8jZ3nP',1748431226,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:20:26.130Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('BFsfsNFapU6IDWdRm1UfOftqD0W1eC4X',1748430999,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:16:39.074Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"true\"},\"passport\":{\"user\":\"2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0\"}}'),('EiOmpEys1XXZP-BXu3DyZQi26lRB2TJ9',1748431255,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:20:55.148Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('Fsf_bpKrSSqSs_ylZiEsxGNkIP-3Da-T',1748432904,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:48:14.053Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"Strict\"},\"passport\":{\"user\":\"d0c40705-c2eb-48bf-9604-559fa8318b8e\"}}'),('LhmE7QNmGXHZ9VPwwHHjNmoMhnJVQLsU',1748431300,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:21:39.933Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('ZZIo0LRjFU3lA3qzjSG_EMvnWVR7SFsJ',1748431189,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:19:49.451Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":false},\"passport\":{\"user\":\"2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0\"}}'),('eo_Hg8zGJp92dmWdEgHOcKJNnenrueQw',1748431528,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:25:27.954Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"None\"},\"passport\":{\"user\":\"27cac61b-5c13-443f-b40b-842bfd4759ca\"}}'),('phHzxptNMIjwj7FOQC7ExI7WtCAKuwBU',1748432878,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2025-05-28T11:44:43.012Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"Strict\"},\"passport\":{\"user\":\"d0c40705-c2eb-48bf-9604-559fa8318b8e\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Supplier_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES ('Mwangi','Wambui','supplier3@example.com','$2b$10$Wks7gFPLO.HIPkN4IxsWc.4FSPh0PD3fId4OLrVKE5mZLsxFSdkae','+254762790374',1,'42616117-8096-4f74-95d3-182c197863ec'),('Wanjiku','Were','supplier6@example.com','$2b$10$bqeW9G18.qM6k/spoOPF1u6baE/H/M2mmxwsML328Vpv6VD.dBO3K','+254789667298',1,'64139352-b4f4-4076-99e1-cce5c30fe50f'),('ivy','muthoni','ivyivy@example.com','$2b$10$5wxPdIf6zxfACxdQ0X9KzOuhsFDQ7d.ODmwM3ylQy3vzOIqABZmLm','+254333333333',1,'6f35e3f4-1f74-4f22-bf4b-0180d6054b57'),('Wanjiku','Omondi','supplier7@example.com','$2b$10$vATqM0x9c9QxknVR7w4RO.GYGt9as7cdQxfpp0mr9Cmb/bM4Ve8tO','+254770269661',1,'7fde64dc-a05e-4d31-b101-0815fbf92b12'),('Wanjiku','Barasa','supplier1@example.com','$2b$10$Wt5GRdB0TdNBkaS1Uw./AOtwCxuM1CUDtUasVSoPEoCZJbE5GXoDC','+254775564309',1,'8c87212d-24b2-405c-8c5f-9936537a16db'),('Achieng','Muthoni','supplier9@example.com','$2b$10$ZKgaUvGsTQTShWwHbbg1mOSg7wLmzU3YcGMICNNus5tNa7NqgVNVa','+254791391832',1,'b2ac3d48-1f57-4db3-b79c-b1fedb560238'),('Ouma','Kiprotich','supplier10@example.com','$2b$10$VNUgoZxdxQTkEOKA.JmoOO5H4YF3chGCk9BT8jzgUyEAcOWClqnG.','+254792148933',1,'bd108b7c-ba2e-4388-860f-f3c4faa8a37e'),('Nyambura','Odhiambo','supplier4@example.com','$2b$10$WO3xoScIjtlY3LuUEPDvweVuAY2SkspqQrntrT8vWbDhGq0FJZ8di','+254751776309',1,'cb3d022b-cce2-4382-bccd-02840f672478'),('Ouma','Wambui','supplier2@example.com','$2b$10$SlI2tf/bV8bwK5/PhixD1en.aXHAaDjIUiMVbZ2eKVHhRQUUPXhMm','+254735941037',1,'e2e919c3-e247-4090-a355-334cc6c5e89a'),('Mwangi','Kiprotich','supplier8@example.com','$2b$10$rAF6S6feJSCcEO779/h5e.RGsiaJyr9rMd0T/CyVTiia4R7Du1WRu','+254773138548',1,'ea484c9c-f677-473b-8fef-787525d35e06'),('Njeri','Barasa','supplier5@example.com','$2b$10$Zwdn18jMzXKAR36x5nBzbe/HQkjKWyS8axoGFH/B6E.vGihH6gbAG','+254762159218',1,'f1983746-3b3c-4fce-80ea-fe6be478a840');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usertype` enum('buyer','supplier','farmer','admin','worker') COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `User_id_key` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Mwangi',1,'buyer1@example.com','buyer','d0c40705-c2eb-48bf-9604-559fa8318b8e'),('Mwangi',1,'buyer10@example.com','buyer','48f9411d-c6d6-456e-bf9f-616571df0e37'),('Nyambura',1,'buyer2@example.com','buyer','89144a03-7352-49c5-b4c0-a54b8076ec08'),('Wanjiku',1,'buyer3@example.com','buyer','7e6cac7a-0476-459a-8562-4524aff951af'),('Kamau',1,'buyer4@example.com','buyer','39f21486-bcae-4029-b784-15a0555c40b1'),('Mwangi',1,'buyer5@example.com','buyer','297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57'),('Njeri',1,'buyer6@example.com','buyer','1d69c595-2c37-407d-ae99-e56f22f8029a'),('Otieno',1,'buyer7@example.com','buyer','ad4ee3cd-2e79-4e3d-bf19-88c04ef51312'),('Chebet',1,'buyer8@example.com','buyer','66c9b830-cdc8-422c-9dc3-cecdd1f2e1dc'),('Kiptoo',1,'buyer9@example.com','buyer','2dc7a6dc-c8ed-426a-9df7-3a4fb51d55c0'),('Wanjiku',1,'farmer1@example.com','farmer','d6b9fb1d-722e-4a4d-95a8-1b9684a5e681'),('Kamau',1,'farmer10@example.com','farmer','9b1f0215-71e2-4383-82e8-c153080f156d'),('Ouma',1,'farmer2@example.com','farmer','2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0'),('Chebet',1,'farmer3@example.com','farmer','84207683-8e85-44cd-8788-645d57717d42'),('Mwangi',1,'farmer4@example.com','farmer','e9a7fa66-b864-4122-bf01-f6b0012305a2'),('Mwangi',1,'farmer5@example.com','farmer','d48f07a5-7ccd-4bfc-8ca6-4ec31e70236d'),('Mwangi',1,'farmer6@example.com','farmer','9de17d9b-906a-4992-bcf7-63186fd7ff8d'),('Achieng',1,'farmer7@example.com','farmer','f575a004-df7a-4324-b7b1-5c64be5aa119'),('Kiptoo',1,'farmer8@example.com','farmer','8b7db486-7f8c-4c6b-9192-3f1a3cf91606'),('Ouma',1,'farmer9@example.com','farmer','8a5103b5-df05-4155-8cb6-522158adf034'),('frank',1,'frankweiss@example.com','farmer','27cac61b-5c13-443f-b40b-842bfd4759ca'),('ivy',1,'ivyivy@example.com','supplier','6f35e3f4-1f74-4f22-bf4b-0180d6054b57'),('minute',1,'minutemaid@example.com','buyer','521afac2-e8bb-4b54-9f95-a27f34cfbcc9'),('Wanjiku',1,'supplier1@example.com','supplier','8c87212d-24b2-405c-8c5f-9936537a16db'),('Ouma',1,'supplier10@example.com','supplier','bd108b7c-ba2e-4388-860f-f3c4faa8a37e'),('Ouma',1,'supplier2@example.com','supplier','e2e919c3-e247-4090-a355-334cc6c5e89a'),('Mwangi',1,'supplier3@example.com','supplier','42616117-8096-4f74-95d3-182c197863ec'),('Nyambura',1,'supplier4@example.com','supplier','cb3d022b-cce2-4382-bccd-02840f672478'),('Njeri',1,'supplier5@example.com','supplier','f1983746-3b3c-4fce-80ea-fe6be478a840'),('Wanjiku',1,'supplier6@example.com','supplier','64139352-b4f4-4076-99e1-cce5c30fe50f'),('Wanjiku',1,'supplier7@example.com','supplier','7fde64dc-a05e-4d31-b101-0815fbf92b12'),('Mwangi',1,'supplier8@example.com','supplier','ea484c9c-f677-473b-8fef-787525d35e06'),('Achieng',1,'supplier9@example.com','supplier','b2ac3d48-1f57-4db3-b79c-b1fedb560238');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worker`
--

DROP TABLE IF EXISTS `worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worker` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Worker_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
/*!40000 ALTER TABLE `worker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-27 15:06:08

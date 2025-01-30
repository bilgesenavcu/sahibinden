CREATE DATABASE  IF NOT EXISTS `signup` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `signup`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: signup
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS login;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE login (
  id int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

INSERT INTO login VALUES (8,'Bilge','leylakaya@gmail.com','$2a$10$N5vk7GS0Rs9bxKlEih2VY.o1FSaMWk25yhVoajaboStd8wkLJmo9O');
INSERT INTO login VALUES (9,'Senem','senemanar@gmail.com','$2a$10$oab84m5Et5Flv1ByDzxxsef9HBhLN2bdC6DCmBOZaoREEh.lLWCMm');
INSERT INTO login VALUES (10,'Admin','admin@gmail.com','$2a$10$fL54qtVyjiKrvAqd2h1RW.J5qgiRI9UAcCp8p1lUpTR3E91mQ4D8S');
INSERT INTO login VALUES (11,'deneme','deneme@gmail.com','$2a$10$kv86q/Mue3I1GlyXgC.NmeBY7cYkGa7I.cc0yIk5Ie9OdUc0wN2lG');
INSERT INTO login VALUES (12,'Bilge Şenavcu','bilgesenavcuuu@gmail.com','$2a$10$eFNMaYagkiYA7xdCHx9O4u050EkgrtnUtG/G358TfCWFYfYnBTCNy');
INSERT INTO login VALUES (13,'Anıl','anilakdag@gmail.com','$2a$10$U5F1HohMLFGhXIvJNLeIKuvfQ.ITXAxt68urTdSDhpgHt9WPqej3y');
INSERT INTO login VALUES (14,'Sena','sena@gmail.com','$2a$10$Jdn4Kuzka4P2aupWqjdwuuOwb2DioIGnJru/Jm85smuf2uDD.U8oS');
INSERT INTO login VALUES (15,'Yeni','yeni@gmail.com','$2a$10$2W66ddyd94u7xMEbsCX3e.733HNdowqiKfOm6.C/mHsXt6GX89T8i');
INSERT INTO login VALUES (16,'sinem','sinem@gmail.com','$2a$10$YmzQ5Zl6ld/i8siG4Cld/.ResRsr4FvVfUVS/XXkNcRBK3gdxB5Cq');
INSERT INTO login VALUES (17,'Emre ','emre@gmail.com','$2a$10$G.2/gUVw2t7WPqRgxp1FmOtpMzkvagHXxQxyVVgjbC/B3gUb/WfWC');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-30 11:14:06

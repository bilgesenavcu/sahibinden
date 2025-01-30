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
-- Table structure for table `ilan`
--

DROP TABLE IF EXISTS ilan;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE ilan (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  price decimal(10,2) NOT NULL,
  category enum('Konut','İş yeri','Otomobil','Motosiklet') NOT NULL,
  created_at datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ilan`
--

INSERT INTO ilan VALUES (1,'Satılık Daire','https://i0.shbdn.com/photos/89/27/83/x5_1213892783c6h.jpg',2900000.00,'Konut','2025-01-20 14:30:00','120M\'2 3+1 DAİRE','Kastamonu');
INSERT INTO ilan VALUES (2,'Satılık Villa','https://i0.shbdn.com/photos/76/75/14/x5_12157675149b8.jpg',5900000.00,'Konut','2025-01-20 11:30:00','Cladius Park Sitesi Satılık Eşyalı Villa','Çanakkale');
INSERT INTO ilan VALUES (3,'Kiralık Daire','https://i0.shbdn.com/photos/56/39/48/x5_1223563948ivh.jpg',26000.00,'Konut','2025-01-20 19:20:00','Kiralık daire 2+1 eşyalı daire','Elazığ');
INSERT INTO ilan VALUES (4,'Satılık Daire','https://i0.shbdn.com/photos/24/91/01/x5_12252491013ek.jpg',3250000.00,'Konut','2025-01-25 13:10:00','Devlet hastanesi yakını 2+1 daire','Rize');
INSERT INTO ilan VALUES (5,'Satılık Daire','https://i0.shbdn.com/photos/73/11/65/x5_1214731165glo.jpg',1189999.00,'Konut','2025-01-25 15:10:00','Bölgenin en uygun 2+1 lüks dairesi','İzmir');
INSERT INTO ilan VALUES (6,'Kiralık Daire','https://i0.shbdn.com/photos/78/69/50/x5_1224786950gs3.jpg',16000.00,'Konut','2025-01-23 12:25:00','Metroya yakın erkeklere özel eşyalı suit','İstanbul');
INSERT INTO ilan VALUES (7,'Kiralık Daire','https://i0.shbdn.com/photos/50/97/69/x5_1224509769bmd.jpg',45000.00,'Konut','2025-01-21 10:48:00','Modern eşyalı depozitosuz daire','Balıkesir');
INSERT INTO ilan VALUES (8,'Satılık Çiftlik','https://i0.shbdn.com/photos/35/79/60/x5_1217357960zis.jpg',13600000.00,'İş yeri','2025-01-19 15:38:00','980 resmi kapasiteli modern besi çiftliği ','Van');
INSERT INTO ilan VALUES (9,'Satılık Dükkan','https://i0.shbdn.com/photos/16/86/81/x5_1219168681zji.jpg',3250000.00,'İş yeri','2025-01-24 17:21:00','Esenler cadde üzeri giriş dükkan','Iğdır');
INSERT INTO ilan VALUES (10,'Satılık Baskı Atölyesi','https://i0.shbdn.com/photos/80/83/14/x5_121780831487o.jpg',1600000.00,'İş yeri','2025-01-21 16:02:00','Klimalı devren satılık baskı atölyesi','Ankara');
INSERT INTO ilan VALUES (11,'Satılık Dükkan','https://i0.shbdn.com/photos/71/90/83/x5_12247190838ph.jpg',6000000.00,'İş yeri','2025-01-22 18:09:00','Şehrin en işlek merkezi Topçuoğlu\'nda iki katlı satılık dükkan','Tekirdağ');
INSERT INTO ilan VALUES (12,'Kiralık Cafe','https://i0.shbdn.com/photos/97/35/54/x5_1224973554bd8.jpg',600000.00,'İş yeri','2025-01-23 08:49:00','Nevşehir\'de devren kiralık cafe','Edirne');
INSERT INTO ilan VALUES (13,'Kiralık Depo','https://i0.shbdn.com/photos/64/05/45/x5_12246405452r6.jpg',20000.00,'İş yeri','2025-01-22 20:08:00','Kaçmaz depo uygun fiyatlı kiralık','Sakarya');
INSERT INTO ilan VALUES (14,'Kiralık Mağaza','https://i0.shbdn.com/photos/64/59/37/x5_1224645937fnt.jpg',27000.00,'İş yeri','2025-01-22 21:28:00','Sahile sıfır ayrı girişli markete kuaföre uygun ','Trabzon');
INSERT INTO ilan VALUES (15,'Satılık BMW','https://i0.shbdn.com/photos/12/25/96/x5_11291225968r9.jpg',2415000.00,'Otomobil','2025-01-18 23:58:00','Hatasız tramersiz 520İ M Sport 19\" Shadow Jant','Muğla');
INSERT INTO ilan VALUES (16,'Satılık Araba','https://i0.shbdn.com/photos/36/06/40/x5_12253606401yh.jpg',325000.00,'Otomobil','2025-01-25 22:13:00','Toyota Corolla gl 16walff','Antalya');
INSERT INTO ilan VALUES (17,'Satılık BMW','https://i0.shbdn.com/photos/36/15/05/x5_1225361505ibo.jpg',3050000.00,'Otomobil','2025-01-25 13:13:00','Değişensiz boyasız tramersiz full+full komple PPF M Sport','İzmit');
INSERT INTO ilan VALUES (18,'Satılık Passat','https://i0.shbdn.com/photos/11/81/88/x5_1225118188ewk.jpg',1395161.00,'Otomobil','2025-01-24 11:31:00','2018 çıkışlı sahibinden cam tavan +Led Far','Nevşehir');
INSERT INTO ilan VALUES (19,'Satılık Linea','https://i0.shbdn.com/photos/03/46/42/x5_1224034642yi7.jpg',475000.00,'Otomobil','2025-01-19 12:01:00','Boyasız tramersiz değişensiz','Bartın');
INSERT INTO ilan VALUES (20,'Satılık Tofaş','https://i0.shbdn.com/photos/12/26/89/x5_1225122689r51.jpg',125000.00,'Otomobil','2025-01-24 23:11:00','Emsalsiz serçe','Adana');
INSERT INTO ilan VALUES (21,'Satılık Passat','https://i0.shbdn.com/photos/11/69/75/x5_1225116975dgn.jpg',970000.00,'Otomobil','2025-01-24 14:15:00','Full orjinal Hatasız boyasız muhayyer mükemmel temizlikte','Bursa');
INSERT INTO ilan VALUES (22,'Satılık Vespa','https://i0.shbdn.com/photos/86/80/51/x5_11878680514j4.jpg',190000.00,'Motosiklet','2025-01-24 16:55:00','Vespa PX200 E \'94/\'24','Çorum');
INSERT INTO ilan VALUES (23,'Satılık Kymco','https://i0.shbdn.com/photos/17/93/79/x5_11881793796pc.jpg',133000.00,'Motosiklet','2025-01-19 23:54:00','Sahibinden temiz otomatik vites','Manisa');
INSERT INTO ilan VALUES (24,'Satılık KTM','https://i0.shbdn.com/photos/64/91/68/x5_1191649168icz.jpg',168500.00,'Motosiklet','2025-01-21 17:42:00','Sahibinden KTM Duke 250','Malatya');
INSERT INTO ilan VALUES (25,'Satılık Bajaj','https://i0.shbdn.com/photos/98/18/65/x5_11729818655ca.jpg',105000.00,'Motosiklet','2025-01-19 16:11:00','Masrafsız Pulsar NS200 ABS','Mersin');
INSERT INTO ilan VALUES (26,'Satılık Italjet','https://i0.shbdn.com/photos/05/30/29/x5_12090530298bb.jpg',175500.00,'Motosiklet','2025-01-24 21:15:00','200 CC 2022 MODEL','Kırklareli');
INSERT INTO ilan VALUES (27,'Satılık Mondial','https://i0.shbdn.com/photos/47/58/98/x5_1210475898v7l.jpg',33000.00,'Motosiklet','2025-01-23 11:11:00','Mondial airtime 2023','Samsun');
INSERT INTO ilan VALUES (28,'Satılık CFmoto','https://i0.shbdn.com/photos/68/66/74/x5_1208686674esh.jpg',136000.00,'Motosiklet','2025-01-19 20:41:00','1 Haftalığına özel fiyat motor başında ufak pazarlık olur','Gaziantep');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-30 11:14:06

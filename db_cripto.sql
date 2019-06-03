-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: db_cripto
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ACL`
--

DROP TABLE IF EXISTS `ACL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACL` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ACL`
--

LOCK TABLES `ACL` WRITE;
/*!40000 ALTER TABLE `ACL` DISABLE KEYS */;
/*!40000 ALTER TABLE `ACL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AccessToken`
--

DROP TABLE IF EXISTS `AccessToken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AccessToken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AccessToken`
--

LOCK TABLES `AccessToken` WRITE;
/*!40000 ALTER TABLE `AccessToken` DISABLE KEYS */;
/*!40000 ALTER TABLE `AccessToken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
INSERT INTO `Role` VALUES (1,'admin',NULL,'2018-11-30 15:09:28','2018-11-30 15:09:28'),(2,'normal',NULL,'2018-11-30 15:09:29','2018-11-30 15:09:29'),(3,'premium',NULL,'2018-11-30 15:09:30','2018-11-30 15:09:30');
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoleMapping`
--

DROP TABLE IF EXISTS `RoleMapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `principalId` (`principalId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoleMapping`
--

LOCK TABLES `RoleMapping` WRITE;
/*!40000 ALTER TABLE `RoleMapping` DISABLE KEYS */;
INSERT INTO `RoleMapping` VALUES (1,'USER','1',1),(2,'NORMAL','3',2),(3,'NORMAL','4',2),(4,'NORMAL','2',2);
/*!40000 ALTER TABLE `RoleMapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserCredential`
--

DROP TABLE IF EXISTS `UserCredential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserCredential` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` varchar(512) DEFAULT NULL,
  `authScheme` varchar(512) DEFAULT NULL,
  `externalId` varchar(512) DEFAULT NULL,
  `profile` text,
  `credentials` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserCredential`
--

LOCK TABLES `UserCredential` WRITE;
/*!40000 ALTER TABLE `UserCredential` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserCredential` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserIdentity`
--

DROP TABLE IF EXISTS `UserIdentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserIdentity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` varchar(512) DEFAULT NULL,
  `authScheme` varchar(512) DEFAULT NULL,
  `externalId` varchar(512) DEFAULT NULL,
  `profile` text,
  `credentials` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserIdentity`
--

LOCK TABLES `UserIdentity` WRITE;
/*!40000 ALTER TABLE `UserIdentity` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserIdentity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserMeta`
--

DROP TABLE IF EXISTS `UserMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserMeta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `meta_key` varchar(512) DEFAULT NULL,
  `meta_value` text,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserMeta`
--

LOCK TABLES `UserMeta` WRITE;
/*!40000 ALTER TABLE `UserMeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advisory`
--

DROP TABLE IF EXISTS `advisory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advisory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(512) DEFAULT NULL,
  `location` varchar(512) DEFAULT NULL,
  `modality` varchar(512) DEFAULT NULL,
  `thematic` varchar(512) DEFAULT NULL,
  `coachTerms` varchar(512) DEFAULT NULL,
  `additionalAdvantages` varchar(512) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `language` varchar(512) DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `aboutCoach` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `coinId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `content` text,
  `blocked` tinyint(1) DEFAULT NULL,
  `affordable` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `coinType` varchar(512) DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `perfilLink` varchar(512) DEFAULT NULL,
  `likes` text,
  `dislikes` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisory`
--

LOCK TABLES `advisory` WRITE;
/*!40000 ALTER TABLE `advisory` DISABLE KEYS */;
/*!40000 ALTER TABLE `advisory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(512) DEFAULT NULL,
  `modelName` varchar(512) DEFAULT NULL,
  `modelId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `commentId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'yo te estoy respondiendo','signal',2,3,1,1,'2018-11-30 15:09:37','2018-11-30 15:09:37'),(2,'pero no me escuchas','signal',2,3,1,1,'2018-11-30 15:09:37','2018-11-30 15:09:37'),(3,'yo te estoy respondiendo','signal',2,4,2,1,'2018-11-30 15:09:37','2018-11-30 15:09:37'),(4,'pero no me escuchas','news',2,3,1,1,'2018-11-30 15:09:38','2018-11-30 15:09:38');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `award`
--

DROP TABLE IF EXISTS `award`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `award` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `category` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `award`
--

LOCK TABLES `award` WRITE;
/*!40000 ALTER TABLE `award` DISABLE KEYS */;
/*!40000 ALTER TABLE `award` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certification`
--

DROP TABLE IF EXISTS `certification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `certificateId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certification`
--

LOCK TABLES `certification` WRITE;
/*!40000 ALTER TABLE `certification` DISABLE KEYS */;
/*!40000 ALTER TABLE `certification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coin`
--

DROP TABLE IF EXISTS `coin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `symbol` varchar(512) DEFAULT NULL,
  `totalSupply` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `mining` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin`
--

LOCK TABLES `coin` WRITE;
/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
INSERT INTO `coin` VALUES (1,'Bitcoin','BTC','17089700',NULL,NULL,NULL),(2,'Ethereum','ETH','100035260',NULL,NULL,NULL),(3,'Ripple','XRP','99991958570',NULL,NULL,NULL),(4,'Bitcoin Cash','BCH','17180038',NULL,NULL,NULL),(5,'EOS','EOS','900000000',NULL,NULL,NULL),(6,'Litecoin','LTC','56952723',NULL,NULL,NULL),(7,'Stellar','XLM','104025824192',NULL,NULL,NULL),(8,'Cardano','ADA','31112483745',NULL,NULL,NULL),(9,'IOTA','IOTA','2779530283',NULL,NULL,NULL),(10,'TRON','TRX','100000000000',NULL,NULL,NULL);
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(512) DEFAULT NULL,
  `modelName` varchar(255) DEFAULT NULL,
  `modelId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modelName` (`modelName`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Hola, hay alguien','signal',1,1,1,'2018-11-30 15:09:28','2018-11-30 15:09:28'),(2,'hay alguien','signal',1,1,1,'2018-11-30 15:09:29','2018-11-30 15:09:29'),(3,'en serio, hay alguien!!! X(','signal',1,1,1,'2018-11-30 15:09:29','2018-11-30 15:09:29'),(4,'Hola, hay alguien','news',2,2,1,'2018-11-30 15:09:30','2018-11-30 15:09:30');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `complaint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(512) DEFAULT NULL,
  `comment` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `modelId` int(11) DEFAULT NULL,
  `modelName` varchar(255) DEFAULT NULL,
  `denouncedId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modelName` (`modelName`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
INSERT INTO `complaint` VALUES (1,'1','\n\nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la i',1,5,'news',2,1,'2018-07-23 22:37:45','2018-11-30 15:09:45'),(2,'0','ste tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:',2,4,'signal',1,1,'2018-07-26 21:16:46','2018-11-30 15:09:45');
/*!40000 ALTER TABLE `complaint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exchange`
--

DROP TABLE IF EXISTS `exchange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exchange` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exchange`
--

LOCK TABLES `exchange` WRITE;
/*!40000 ALTER TABLE `exchange` DISABLE KEYS */;
INSERT INTO `exchange` VALUES (1,'Binance','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño '),(2,'Bitfinex','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño '),(3,'Okex','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño '),(4,'Bittrex','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño '),(5,'Poloniex','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño '),(6,'Hitbtc','Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ');
/*!40000 ALTER TABLE `exchange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `followerId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,1,2,1,'2018-11-30 15:09:35','2018-11-30 15:09:35'),(2,1,3,1,'2018-11-30 15:09:35','2018-11-30 15:09:35'),(3,1,4,1,'2018-11-30 15:09:36','2018-11-30 15:09:36'),(4,2,1,1,'2018-11-30 15:09:36','2018-11-30 15:09:36'),(5,2,3,1,'2018-11-30 15:09:36','2018-11-30 15:09:36');
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idea`
--

DROP TABLE IF EXISTS `idea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  `qualidication` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `coinId` int(11) DEFAULT NULL,
  `titleId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idea`
--

LOCK TABLES `idea` WRITE;
/*!40000 ALTER TABLE `idea` DISABLE KEYS */;
INSERT INTO `idea` VALUES (1,'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',3,1,2,35,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',NULL),(2,'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',2,2,3,35,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',NULL),(3,'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',1,3,1,35,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',NULL),(4,'La idea comenzó el año 2014 con un estudio del mercado de crowdsourcing global en Rusia. A partir de ahí nació Kickico, una plataforma cuyo objetivo es facilitar y hacer más automáticas las campañas de recaudación de fondos, incluyendo Pre-ICOs, ICOs, y permitir que cualquier organización pueda crear su propia campaña de recaudación de fondos en unos cuantos pasos eliminando cualquier tipo de intermediario',3,1,5,2,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',1),(5,'La plataforma de Kickico tiene el soporte suficiente para realizar campañas de crowdfunding y crowdinvestig,  además de las campañas conocidas como ICOs. La versatilidad es uno de los componentes principales para abarcar un mercado más amplio dentro del mercado. Además de la versatilidad, se debe mencionar el factor que en el caso de compra de tokens, se recibe además el token creado por Kickico, recibiendo de esta manera dos monedas a la vez, otorgando un doble beneficio, también respaldan campañas de crowdfunding otorgándolas Kickcoins como una especie de seguro contra el fracaso. El costo o cargo para cualquier proyecto y/o startup que desee recaudar fondos dentro de la plataforma de Kickico es del 4%, este cargo es cobrado cuando se haya recaudado exitosamente los fondos necesarios para le empresa. En el caso de ICOS que crean nuevas monedas, Kickico toma un 4% adicional 	 de los tokens producidos dentro de esa campaña. Estos tokens son transferidos a un fondo de reserva perteneciente a Kicico. A comparación de otras plataformas que cobran entre el 10 o 15% de la campaña de recaudación, es una clara ventaja para atraer nuevos proyectos o startups. En el caso de los crowdfundings regulares surge un problema normal, entre los inversores, relacionado con la seguridad de sus inversiones porque en estas campañas se basan en la confianza a las empresas y lo que se comprometen a cumplir. En este caso Kickico asegura la inversión de los participantes otorgándoles Kickcoins valuados en el 20% del monto que invirtieron. Por otro lado, gracias a la versatilidad de Kickico, se puede realizar campañas de crowdinvesting, que a diferencias de campañas de crowdfunding comunes, permite al inversor poder ser partícipe de las ganancias o beneficios que genere la empresa. Pero el tema de regulación es la traba para tener distintos tipos de inversores pertenecientes a diferentes países. Kickico permite realziar campañas de recaudación no únicamente para residentes de un determinado país, sino para residentes de cualquier país del planeta. ',3,1,5,3,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',1),(6,'Los hechos más destacables y futuros proyectos se describen a continuación:Año 2015, desarrollo de arquitectura de proyectosAño 2015, creación de prototiposAño 2016 lanzamiento de la versión AlphaAño 2017; lanzamiento de la versión BetaAño 2018; lanzamiento de sistemas de recompensasAño 2018; Kit visual de contratos inteligentesAño 2018; lanzamiento de academia de crowdfundingAño 2019; desarrollo de comunidades locales de creadores y patrocinadoresAño 2019, desarrollo de herramientas de plataforma: Consultorías, marketing, etc.Año 2020; creación de API para campañas de crowdfunding independientesActualmente la plataforma se encuentra en su versión beta, se puede mencionar campañas exitosas como la de Storiqa que alcanzó su softcap de 1.209 ETH, o INS Ecosystem que recaudó 60.00 ETH. En su página muestran más de 20 campañas exitosas de recaudación, este factor demuestra que la rentabilidad del proyecto y lo atractivo que resulta tanto para startups e inversores.',3,1,5,4,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',1),(7,'Existen varias plataformas del tipo de Kickico que ofrecen facilidades para realizar campañas de recaudación, pero entre las primeras está Indiegogo, organización fundada el año 2008, cobran una comisión del 5% sobre las contribuciones, además de cargos por procesamiento de tarjetas de crédito del 3%  + $us 0.30 por transacciones realizadas. Alrededor de 15 millones de personas visitan su sitio web cada mes. Entre las campañas que resaltaron se puede mencionar la campaña realizada por el proyecto “Colmena de flujo” que recaudò alrededor de $us 12 millones el año 2015, o el proyecto “Sondors Electric Bike” que el año 2015 recaudó más de $us 5 millones con un total de 14.646 socios.',3,1,5,5,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(8,'Las campañas de recaudación  necesitan de distintos tipo de intermediarios como ser: bancos, sistemas de pago o algún otro tipo de reguladores para llevar con más confianza su propuesta. Kickico hace que el proceso sea menos moroso, con pasos sencillos, y accedas a una mayor cantidad de personas debido a que elimina los intermediarios para facilitar el proceso.',3,1,5,6,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(9,'Una de las principales barreras para realizar crowdfunding es el excesivo costo que conlleva, sin mencionar que existen barreras legales que hacen que tu proyecto sea conocido solo en algunas regiones, hecho que reduce la probabilidad de éxito de este tipo de campañas. Otro factor, dentro del mundo Blockchain, es que las ICOs o proyectos no están respaldados o, a pesar de lo atractivo pueda sonar cada proyecto, el inversor corre el riesgo de perder sus fondos debido a que se trata de una estafa. A la vez al momento de intentar a llevar a cabo una campaña ICO, la empresa está expuesta a términos o factores que le puede resultar difícil de entender, este problema lleva a la necesidad de tener una especie de guía o tener un espacio donde sea más fácil llevar a cabo las ICOs.',3,1,5,7,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(10,'Startups: Aquellas empresas o instituciones que deseen recaudar fondos para llevar a cabo mejoras o la implementación de un negocio cuyas preocupaciones se centren en costo de llevar a cabo el crowdfunding y cuyo público objetivo no se vea limitado por barreras legalesInversores: Personas que deseen ser parte de alguna startup o proyecto interesante pero que presenten un mayor grado de seguridad en comparación del riesgo asumido al momento de participar de ICOs',3,1,5,8,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(11,'La principal diferencia competitiva es el costo por llevar a cabo el crowdfunding, es bastante barato en comparación con otras plataformas centralizadas lo que permite que obtenga la atención de una mayor cantidad de proyectosPor otro lado, la “garantía” que le brinda al inversor al otorgarle sus propios tokens por su participación hace que el riesgo de participar en dichas campañas se reduzca.Por último, una de las más grandes ventajas que presenta la plataforma de Kickico es la versatilidad, debido a que no solamente acoje ICOs o Pre-ICOs, sino que abre la posibilidad de participar en distintos tipos de campañas como ser el crowdfunding o crowdinvesting.',3,1,5,9,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(12,'Tomando en cuenta que ya existen plataformas dedicadas a ayudar a startups y empresas a recaudar dinero por sus ideas o proyectos, no existen muchos que te ofrezcan la versatilidad de Kickico, que a su vez te da su respaldo a través de sus propios tokens respaldando los proyectos, y dando garantía que fueron previamente analizados y calificados por Kickico',3,1,5,10,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(13,'Cabe destacar que las principales funciones, relaciones públicas o jefe de manejo de comunidad y redes sociales, estos factores son una muestra de lo relevante dentro de Kickico el sector dedicado al marketing y asociaciones. Nicolay Syusko (Jefe de marketing): Es el jefe de transformación digital de Apla Blockhain desde 2017 los últimos 6 meses, se trata de una empresa que ayuda a gobiernos y empresas para descubrir el potencial del Blockchain. Además fue director de negocios por dos años en la empresa JAMI, donde fue responsable de negocios en Rusia, consiguió importantes socios y clientes como L`Oreal, Unilever o Google y desarrolló un programa de lealtad de marcas importantes como: Coca Cola, Skoda o SCA, logrando aumentar las ventas en más de 100 millones de RUB. Tiene un master en economía del Instituto Estatal Transcarpathian.',3,1,5,12,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(14,'Entre los medios que publicaron noticias o siguen al proyecto Kickico sobresalen Cointelegraph, NEWSBTC, BlockchainNews o Hackernoon, este aspecto revela que la idea y desarrollo de la plataforma propuesta por Kickico parece interesarle a medios conocidos dentro del mundo del Blockchain. También se tienen medios ajenos a la economía de las criptomonedas o que no son tan especializadas como: Forber, WIRED, Rusbase, Iris Tech News, Profit Gid, estas menciones demuestran que el proyecto es tan llamativo que captó la atención de medios con una audiencia o lectores mayores como lo es Forbes, o que están especializados en tecnología como Irish Tech News.',3,1,5,13,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(15,'Una de las asociaciones más sonadas dentro del proyecto Kickico se encuentra la unión de fuerza con la Fundación Metaverse de China en septiembre del 2017, creando una de las asociaciones más prominentes entre dos empresas pertenecientes a países potencias como los son Rusia y China. Entre los propósitos de dicha alianza resalta la construcción de una criptocomunidad rusa-china, consultoría de startups de Blockchain, Listados de intercambio, etc. Uno de los principales pasos fue la creación de fondos entre ambas empresas.Otra asociación importante que ayudó al desarrollo del mercado y ampliación de la misma a la región de Korea es la colaboración entre Coinhills y Kickico. Coinhills es un popular servicio de criptomonedas de Corea que proporciona todo tipo de información sobre precios e índices. Coinhills se esfuerza por popularizar Bitcoin y la red de criptomonedas. A su vez, Kickico ayudará a Coinhills a ampliar sus servicios hasta los residentes de Rusia.',3,1,5,14,1,'2018-11-30 15:09:31','2018-11-30 15:09:31',1),(16,'La página web se encuentra ordenada, resaltando tanto los futuros proyectos como las recaudaciones más recientes, resaltan el hecho que ya está disponible la versión beta. Existen enlaces directo al equipo y recaudaciones exitosas pasadas. Se trata de una página dinámica que no dista mucho de la presentación de páginas como Kickstarter, hecho que es conveniente en especial para las startups debido a que el diseño lo encuentran familiar. El único factor que no estuvo a la altura es que las particularidades y beneficios del proyecto se presentan en un pequeño enlace que es difícil de diferenciar o encontrar, este factor limita las posibilidades que nuevas startups conozcan o se informen acerca de los beneficios que presenta Kickico.',3,1,5,15,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(17,'E términos generales tienen un equipo imponente en el área de marketing y relaciones públicas, cuyo trabajo se ve reflejado en los medios sociales interesados en el proyecto y asociaciones relacionadas con el crecimiento de mercado a nuevos países.',3,1,5,16,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(18,'En el siguiente recuadro se mostrará el desempeño en redes sociales, en específico el crecimiento mensual en subscriptores de Reddit y Twitter además de likes en Facebook y número de subscriptores en TelegramRedditTwitterFacebookTelegramSeguidores72610.9 mil21.8725.842Crecimiento17,43%11,19%1,5%El crecimiento promedio mensual en redes sociales es aproximadamente del 10%. Resaltando el crecimiento en Reddit, pero cabe mencionar que el número de subscriptores en esta red social es pequeña. En cambio la cantidad de likes y subscriptores en Facebook es impresionante desde sus inicios, esa puede ser la razón que en porcentaje de crecimiento no sea tan impresionante. Por eso la cantidad de subscriptores en Telegram y el crecimiento que tuvo en Twitter pueden ser los indicadores más cercanos a su realidad para observar el impacto del marketing y promociones en redes sociales. Por otra parte, es necesario mencionar que la cantidad de seguidores “reales” según Twitter.audit.com es del 71%, que significa que gran parte de sus seguidores son cuentas reales que están a pendiente de alguna novedad acerca del proyecto.',3,1,5,18,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(19,'Por lo general el tema central de conversación son las ICOs que saldrán en su plataforma, a su vez es una fuente de interés las futuras reuniones en Argentina. Debido a la pequeña cantidad de subscriptores en Reddit, no hay tanta actividad dentro esta red, en cambio se observa bastantes hilos de conversación en Bitcointalk hablando del precio futuro y algunas características de Kickico. En cuanto a twitter sentiment y el sentimiento de mercado acerca de las novedades la gran mayoría les agrada el rumbo que está tomando Kickico, pero existen unos cuantos comentarios en contra pero son muy pocos en comparación con el interés general demostrado en Twitter.',3,1,5,19,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(20,'La relación entre comentarios y volumen es de 0,00073%, pero al ver los números reales se tiene que el 13% de usuarios que está en línea o en redes oficiales de la página comenta los hot-posts. Además, el volumen de transacciones de las últimas horas alcanza los $us 684.167, cerca del 1,63% de la capitalización total del mercado. En base a los números presentado se puede afirmar que una parte de su comunidad está realmente implicada en el proyecto o sus avances, destacando que el 13% de sus usuario comentan y dan su opinión, y que una porción de su capitalización se mueve diariamente, cerca al 1,63%, dato bastante interesante debido a su capitalización y lo reciente que es',3,1,5,20,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(21,'Un factor que se debe resaltar es que existen redes específicas como ser: Telegram, Twitter e inclusive Facebook, que muestran números interesantes tanto en cantidad como en crecimiento. Si bien los temas de conversación no son muy variados su comunidad sigue atenta a cualquier novedad de Kikcico, en especial si se habla de Bitcointalk cuyo sitio es donde más comentan. En cuanto a la implicación, se debe mencionar que un buen porcentaje de los que están en línea comentan en redes sociales, pero el número de comentarios sigue siendo una cantidad muy baja en comparación con  el volumen que movieron las últimas 24 horas.',3,1,5,21,1,'2018-11-30 15:09:32','2018-11-30 15:09:32',1),(22,'Hasta el 10% de tokens fueron entregados al equipo, esta cantidad de tokens estarán congeladas durante 1 año. Con un total de tokens de 800.000.000 KC, y estando en circulación 452.421.595 KC todavía queda tiempo para que el total de tokens sean liberados.',3,1,5,23,1,'2018-11-30 15:09:33','2018-11-30 15:09:33',1),(23,'La forma de liberación es la siguiente: cada mes se darán tokens KC mensualmente a los holders, durante los siguientes dos años: 0.5%, 1%, 2%, 3%, 5%, 6%. Tendiendo una media de liberación mensual promedio del 3% durante dos años1.',3,1,5,24,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(24,'Los contribuyentes a proyectos bajo la plataforma KICKICO recibirían un cierto porcentaje de sus contribuciones en KK token como recompensa. A continuación hay algunos casos de uso de muestra para el token de KC. Los proyectos KICKICO tienen la opción de aceptar tokens de KC como forma de pago. Pago por una revisión: los proyectos que planean recaudar fondos en KICKICO pueden gastar tokens KC para obtener servicios de revisión de la comunidad KICKICO para garantizar que el proyecto se vea profesional y esté listo para funcionar. Moderación antes del lanzamiento: antes y durante el período de recaudación de fondos, los tokens de KC se pueden usar para servicios de moderación. Visibilidad: los tokens de KC se pueden utilizar para acceder a las publicaciones de KICKICO a fin de aumentar la visibilidad de los proyectos. Pago por servicios de traducción y revisión. El indicador NVT del proyecto es un reflejo del reducido volumen de tokens que se comercian diariamente. La relación capitalizacion-volúmen supera los 70 que muestra que el volumen no refleja el precio o el valor del proyecto, el volumen es mínimo en comparación con su capitalización. La brecha confirma la suposición que el token está sobrevaluado, debido a que hay una diferencia negativa entre la media del NVT y su valor actual, lo que quiere decir que el valor del token está por encima del precio tope de los últimos tres meses, clara muestra que está sobrevaluado.',3,1,5,25,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(25,'Una de las características que más beneficia a Kickico es que no se encuadra en una sola forma de recaudación, de hecho, permite varias formas de recaudar dinero de acuerdo a las necesidades del proyecto. Pero se tiene que recalcar que el proyecto se centra en las ICOs por sobre las demás formas de recaudación de dinero. Por una parte, se puede tomar el ejemplo de Kickstarter, que tiene un crecimiento impresionante desde el momento que empezó a realizar sus funciones. A pesar que en los últimos años la cantidad de proyectos disminuyó, continua con un crecimiento impresionante del 41% anual (sin tomar el primer año cuando pasó de tener 874 proyectos a 8.500 proyectos, creciendo más de 8 veces), traduciéndose a un crecimiento mensual del 3,14% La cantidad de proyectos el año 2017 fue de 52.741 que representa un gran número para cualquier plataforma dedicada a recaudar fondos2. Por otro lado, se tiene a las ICOs, cuya popularidad aumentó a partir del año 2017 (año que sobrepasó la cantidad recaudado mediante Venture Capital). Posee una tasa de crecimiento importante, se hace más impresionante ante los intentos de prohibir o regular las ICOs, resaltando meses como octubre o diciembre que sobrepasaron las 80 ICOs por mes. El crecimiento mensual de cantidad de ICOs es cercano al 38%.',3,1,5,26,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(26,'El principal exchange es Kucoin que tiene el 24, 45% de tokens, que extrapolando al 100% se tiene que solo el 0,75% se utiliza para trading. En cuanto a google trends, se tiene una temporada baja de búsquedas estando lejos de su pico. Tomando en cuenta la media de liberación de tokens que es del 3%, y el porcentaje de crecimiento de ICOs, 41% mensual, y el de Kickstarter que es mayor al 3% hacen que sea posible creer que Kickico tenga posibilidades de crecer.',3,1,5,27,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(27,'Calculando el promedio de crecimiento en cantidad de proyectos resulta un total de crecimiento del 22%, porcentaje superior al promedio de liberación. Estos factores, en conjunto con el continuo crecimiento del mercado de crowdfunding, hace posible afirmar que el modo de enfocar el mercado repercute en el futuro del proyecto.',3,1,5,28,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(28,'Anti Danilevski (CEO): Productor de Fainfusion Games por 4 años, se trata de una empresa rusa dedicada a los video juegos cuyo producto estrella, Roya Flash Poker 3D, logró obtener alrededor de 2000.000 usuarios. Es licenciado en cinematografía y video producción de “Saint-Petersburg University of Cinema and Television” Kirill Khromov (COO): Fundador hasta la actualidad de VIVAster.com, que ofrece una plataforma para reservas en línea. Se encargó de lanzaruna empresa eCommerce de viajes en línea desde cero, llegando a obtener más de 3.000 agentes con 15.000 ofertas de 106 países. Tiene un máster en Finanzas Internacionales de “Unviersity of Buckingham” Anzor Daurov (Jefe del departamento de proyectos): Trabaja como SAP BI especialista en AmberLabs por 5 años, lugar donde pudo gestionar proyectos de desarrollo de software, gestión de proyectos de migración a gran escala. Tiene un máster en Informática de Negocios en “Higher School of Economics”',3,1,5,30,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(29,'Jonathan Millet: Es presidente, desde febrero del 2018, de NEWSBTC, anteriormente fue CEO de la misma compañía por 3 años. Jefe Editor de ForexMinute Consulting por 3 años. Estudió en “UCL” licenciatura en Política.',3,1,5,31,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(30,'Su mayor actividad se centra en agosto del 2017, a pesar de ese factor el 100% de su issues la completaron, con un total de new commits de 14. La cantidad de watchers llega a 10 y la categoría stars solamente 21. En definitiva, no es un equipo de desarrolladores que estén en constantes actualizaciones de la plataforma, esto se ve en la cantidad de commits por semana y la cantidad de seguidores del proyecto',3,1,5,32,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(31,'Este aspecto puede ser uno de los puntos más débiles que presenta el proyecto, la trayectoria del equipo en general no es muy destacable, a excepción del COO. Este aspecto se ve reflejado tanto en el tema de asesores como en el desenvolvimiento del equipo de desarrolladores',3,1,5,33,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1),(32,'Este aspecto puede ser uno de los puntos más débiles que presenta el proyecto, la trayectoria del equipo en general no es muy destacable, a excepción del COO. Este aspecto se ve reflejado tanto en el tema de asesores como en el desenvolvimiento del equipo de desarrolladores',3,1,5,35,1,'2018-11-30 15:09:34','2018-11-30 15:09:34',1);
/*!40000 ALTER TABLE `idea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market`
--

DROP TABLE IF EXISTS `market`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market`
--

LOCK TABLES `market` WRITE;
/*!40000 ALTER TABLE `market` DISABLE KEYS */;
INSERT INTO `market` VALUES (1,'Intercambio',NULL,1),(2,'Contratos Inteligentes',NULL,1),(3,'Redes Sociales',NULL,1),(4,'Monedas Anonimas',NULL,1),(5,'Juegos',NULL,1),(6,'Propiedades de Inmuebles',NULL,1),(7,'Exchange Decentralizado',NULL,1);
/*!40000 ALTER TABLE `market` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(512) DEFAULT NULL,
  `guessCoin` varchar(512) DEFAULT NULL,
  `guessPrice` varchar(512) DEFAULT NULL,
  `sources` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `content` text,
  `blocked` tinyint(1) DEFAULT NULL,
  `affordable` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `coinType` varchar(512) DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `perfilLink` varchar(512) DEFAULT NULL,
  `likes` text,
  `dislikes` text,
  `coinId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'El servicio gratuito de Google traduce instantáneamente palabras','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>',NULL,1,1,'2018-11-30 15:09:43','2018-11-30 15:09:43','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,NULL,NULL,'BTC',NULL,'Bolivia','Departamento de La Paz','1-perfil-1.png','https://drive.google.com/uc?id=14WIEs_WSFQ6xrUfLyLxzeLA-Et-oPTwm&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',1),(2,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,2,1,'2018-11-30 15:09:44','2018-11-30 15:09:44','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Peru','Arequipa','2-perfil-2.jpeg','https://drive.google.com/uc?id=1Eaw661Ip4DucD-QsP25XNPbHGPfKx0-o&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(3,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,3,1,'2018-11-30 15:09:44','2018-11-30 15:09:44','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Bolivia','Departamento de La Paz','3-perfil-3.jpeg','https://drive.google.com/uc?id=1XTw0rRWiXT4nxRSZ5J2pbHwTXFqlea1Z&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(4,'El servicio gratuito de Google traduce instantáneamente palabras','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>',NULL,1,1,'2018-11-30 15:09:45','2018-11-30 15:09:45','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,NULL,NULL,'BTC',NULL,'Bolivia','Departamento de La Paz','1-perfil-4.jpg','https://drive.google.com/uc?id=1KCTPy7IDefHYfz3o8YoBjQCELPgxjmyW&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',1),(5,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,2,1,'2018-11-30 15:09:45','2018-11-30 15:09:45','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Peru','Arequipa','2-perfil-5.jpg','https://drive.google.com/uc?id=1TtKrKzk9cBfjgncFlLuKIm72wMYBDEVa&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(6,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,3,1,'2018-11-30 15:09:45','2018-11-30 15:09:45','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Bolivia','Departamento de La Paz','3-perfil-6.jpg','https://drive.google.com/uc?id=1Q41bbmkCQVSHrau6lnzA1Bd7TzgtnkPA&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(7,'El servicio gratuito de Google traduce instantáneamente palabras','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src=\"dropbox:1-1532253786453.jpeg:\" alt=\"\" width=\"480\" height=\"494\" /></span></p>',NULL,1,1,'2018-11-30 15:09:46','2018-11-30 15:09:46','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,NULL,NULL,'BTC',NULL,'Bolivia','Departamento de La Paz','1-perfil-7.jpg','https://drive.google.com/uc?id=1Ey0xcIRbLS5MarWzIB7WqGtADEFzBJmJ&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',1),(8,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,2,1,'2018-11-30 15:09:46','2018-11-30 15:09:46','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Peru','Arequipa','2-perfil-8.jpg','https://drive.google.com/uc?id=1s94vvL1QmaYkbxvoyeKC9cmPtXERD60o&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(9,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,3,1,'2018-11-30 15:09:46','2018-11-30 15:09:46','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Bolivia','Departamento de La Paz','3-perfil-9.jpg','https://drive.google.com/uc?id=17vz0FFvkzEfPmHr0B-1WxPtYlrq7vLpR&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(10,'El servicio gratuito de Google traduce instantáneamente palabras','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,1,1,'2018-11-30 15:09:47','2018-11-30 15:09:47','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,NULL,NULL,'BTC',NULL,'Bolivia','Departamento de La Paz','1-perfil-10.jpeg','https://drive.google.com/uc?id=163Obpg7xxjv58EJn-InCcdTRZCVm9T2Q&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',1),(11,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,2,1,'2018-11-30 15:09:47','2018-11-30 15:09:47','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Peru','Arequipa','2-perfil-11.jpeg','https://drive.google.com/uc?id=1ZqaWOoUyHIj8RpDu7XkkVcqFAtX11fhJ&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(12,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,3,1,'2018-11-30 15:09:47','2018-11-30 15:09:47','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Bolivia','Departamento de La Paz','3-perfil-12.jpg','https://drive.google.com/uc?id=1c4NWOIf3bhR7jbNj3lxmOgmTFbCUE3qc&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(13,'El servicio gratuito de Google traduce instantáneamente palabras','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,1,1,'2018-11-30 15:09:47','2018-11-30 15:09:47','<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',NULL,NULL,NULL,'BTC',NULL,'Bolivia','Departamento de La Paz','1-perfil-13.jpg','https://drive.google.com/uc?id=1LGsWwryUIJqHy9ET0PRUPkEM9sP-0PND&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',1),(14,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,2,1,'2018-11-30 15:09:47','2018-11-30 15:09:47','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Peru','Arequipa','2-perfil-14.jpg','https://drive.google.com/uc?id=1zYfgNdQae9KMv1ESHTmDkvlxZJO5Sk-V&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2),(15,'¿Qué es Lorem Ipsum?','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,3,1,'2018-11-30 15:09:48','2018-11-30 15:09:48','<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',NULL,NULL,NULL,'ETH',NULL,'Bolivia','Departamento de La Paz','3-perfil-15.jpg','https://drive.google.com/uc?id=1vCyTjSbZ5xi8Kmmsruehaml2GelzoRgi&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}',2);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(512) DEFAULT NULL,
  `modelId` int(11) DEFAULT NULL,
  `modelName` varchar(512) DEFAULT NULL,
  `content` varchar(512) DEFAULT NULL,
  `ownerId` varchar(512) DEFAULT NULL,
  `read` tinyint(1) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `posts` varchar(512) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coinType` varchar(512) DEFAULT NULL,
  `tags` varchar(512) DEFAULT NULL,
  `exchange` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `mount` varchar(512) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `type` varchar(512) DEFAULT NULL,
  `details` varchar(512) DEFAULT NULL,
  `commission` varchar(512) DEFAULT NULL,
  `modality` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point`
--

DROP TABLE IF EXISTS `point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `point` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point`
--

LOCK TABLES `point` WRITE;
/*!40000 ALTER TABLE `point` DISABLE KEYS */;
INSERT INTO `point` VALUES (1,'entrada',NULL),(2,'salida',NULL),(3,'stoploss',NULL);
/*!40000 ALTER TABLE `point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(512) DEFAULT NULL,
  `capitalPercentage` int(11) DEFAULT NULL,
  `category` varchar(512) DEFAULT NULL,
  `type` varchar(512) DEFAULT NULL,
  `reached` tinyint(1) DEFAULT NULL,
  `signalId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `pointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (1,'8830.25',15,NULL,NULL,NULL,1,1,'2018-11-30 15:09:24','2018-11-30 15:09:24',1),(2,'8324.5',40,NULL,NULL,NULL,1,1,'2018-11-30 15:09:25','2018-11-30 15:09:25',2),(3,'8322.55',20,NULL,NULL,NULL,1,1,'2018-11-30 15:09:25','2018-11-30 15:09:25',3),(4,'8830.25',15,NULL,NULL,NULL,2,1,'2018-11-30 15:09:25','2018-11-30 15:09:25',1),(5,'8324.5',40,NULL,NULL,NULL,2,1,'2018-11-30 15:09:25','2018-11-30 15:09:25',2),(6,'8322.55',20,NULL,NULL,NULL,2,1,'2018-11-30 15:09:25','2018-11-30 15:09:25',3),(7,'8830.25',15,NULL,NULL,NULL,3,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',1),(8,'8324.5',40,NULL,NULL,NULL,3,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',2),(9,'8322.55',20,NULL,NULL,NULL,3,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',3),(10,'8830.25',15,NULL,NULL,NULL,4,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',1),(11,'8324.5',40,NULL,NULL,NULL,4,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',2),(12,'8322.55',20,NULL,NULL,NULL,4,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',3),(13,'8830.25',15,NULL,NULL,NULL,5,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',1),(14,'8324.5',40,NULL,NULL,NULL,5,1,'2018-11-30 15:09:26','2018-11-30 15:09:26',2),(15,'8322.55',20,NULL,NULL,NULL,5,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',3),(16,'8830.25',15,NULL,NULL,NULL,6,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',1),(17,'8324.5',40,NULL,NULL,NULL,6,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',2),(18,'8322.55',20,NULL,NULL,NULL,6,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',3),(19,'8830.25',15,NULL,NULL,NULL,7,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',1),(20,'8324.5',40,NULL,NULL,NULL,7,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',2),(21,'8322.55',20,NULL,NULL,NULL,7,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',3),(22,'8830.25',15,NULL,NULL,NULL,8,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',1),(23,'8324.5',40,NULL,NULL,NULL,8,1,'2018-11-30 15:09:27','2018-11-30 15:09:27',2),(24,'8322.55',20,NULL,NULL,NULL,8,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',3),(25,'8830.25',15,NULL,NULL,NULL,9,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',1),(26,'8324.5',40,NULL,NULL,NULL,9,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',2),(27,'8322.55',20,NULL,NULL,NULL,9,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',3),(28,'8830.25',15,NULL,NULL,NULL,10,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',1),(29,'8324.5',40,NULL,NULL,NULL,10,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',2),(30,'8322.55',20,NULL,NULL,NULL,10,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',3),(31,'8830.25',15,NULL,NULL,NULL,11,1,'2018-11-30 15:09:28','2018-11-30 15:09:28',1),(32,'8324.5',40,NULL,NULL,NULL,11,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',2),(33,'8322.55',20,NULL,NULL,NULL,11,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',3),(34,'8830.25',15,NULL,NULL,NULL,12,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',1),(35,'8324.5',40,NULL,NULL,NULL,12,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',2),(36,'8322.55',20,NULL,NULL,NULL,12,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',3),(37,'8830.25',15,NULL,NULL,NULL,13,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',1),(38,'8324.5',40,NULL,NULL,NULL,13,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',2),(39,'8322.55',20,NULL,NULL,NULL,13,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',3),(40,'8830.25',15,NULL,NULL,NULL,14,1,'2018-11-30 15:09:29','2018-11-30 15:09:29',1),(41,'8324.5',40,NULL,NULL,NULL,14,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',2),(42,'8322.55',20,NULL,NULL,NULL,14,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',3),(43,'8830.25',15,NULL,NULL,NULL,15,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',1),(44,'8324.5',40,NULL,NULL,NULL,15,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',2),(45,'8322.55',20,NULL,NULL,NULL,15,1,'2018-11-30 15:09:30','2018-11-30 15:09:30',3);
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `marketId` int(11) DEFAULT NULL,
  `coinId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `content` text,
  `blocked` tinyint(1) DEFAULT NULL,
  `affordable` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `coinType` varchar(512) DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `perfilLink` varchar(512) DEFAULT NULL,
  `likes` text,
  `dislikes` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'ICOS',1,1,5,1,'2018-11-30 15:09:35','2018-11-30 15:09:35',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) DEFAULT NULL,
  `accepted` tinyint(1) DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signal`
--

DROP TABLE IF EXISTS `signal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `signal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offer` tinyint(1) DEFAULT NULL,
  `investmentType` varchar(512) DEFAULT NULL,
  `titleSignal` text,
  `fundamentalAnalysis` text,
  `technicalAnalysis` text,
  `exitStrategy` text,
  `tags` varchar(512) DEFAULT NULL,
  `precision` varchar(512) DEFAULT NULL,
  `currencyExchange` varchar(512) DEFAULT NULL,
  `exchange` varchar(512) DEFAULT NULL,
  `entryType` varchar(512) DEFAULT NULL,
  `currentPrice` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `coinId` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `content` text,
  `blocked` tinyint(1) DEFAULT NULL,
  `affordable` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `coinType` varchar(512) DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `perfilLink` varchar(512) DEFAULT NULL,
  `likes` text,
  `dislikes` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signal`
--

LOCK TABLES `signal` WRITE;
/*!40000 ALTER TABLE `signal` DISABLE KEYS */;
INSERT INTO `signal` VALUES (1,1,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,1,1,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'BTC','2018-12-24 00:00:00','Bolivia','Departamento de La Paz','1-perfil-1.png','https://drive.google.com/uc?id=10GdSHz2D0vK-hTb_T9J9z3oU4BYg5GzZ&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(2,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,2,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','2-perfil-2.jpeg','https://drive.google.com/uc?id=1DlacPq0_h4o1RXy1AQCBe4yrHq-f1waJ&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(3,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,3,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','3-perfil-3.jpeg','https://drive.google.com/uc?id=1POAQ5j-zVuN_4c8IUpcG4R3LYbFuPqhq&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(4,1,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,1,1,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'BTC','2018-12-24 00:00:00','Bolivia','Departamento de La Paz','1-perfil-4.jpg','https://drive.google.com/uc?id=1jce3-peMZYG1jhzEUih_0YhvjqIJYVB0&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(5,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,2,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','2-perfil-5.jpg','https://drive.google.com/uc?id=1rI3VqTG5EbOOjujVe6MiBiyNrTAPHSbJ&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(6,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,3,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','3-perfil-6.jpg','https://drive.google.com/uc?id=12KBuCBeenz7HuVAaZ2M7wJqRQX_DmaG_&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(7,1,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,1,1,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'BTC','2018-12-24 00:00:00','Bolivia','Departamento de La Paz','1-perfil-7.jpg','https://drive.google.com/uc?id=1qQKJvCFapwSnFNVPqjn7OYDW3k3Sk9QG&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(8,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,2,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','2-perfil-8.jpg','https://drive.google.com/uc?id=1Tj0U1w1Hpb2-KBfu-EfGif9M8Z45vu3Y&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(9,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,3,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','3-perfil-9.jpg','https://drive.google.com/uc?id=1zQo5akaSNpxRGMZZheiB20dLrpdhU4MS&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(10,1,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,1,1,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'BTC','2018-12-24 00:00:00','Bolivia','Departamento de La Paz','1-perfil-10.jpeg','https://drive.google.com/uc?id=1BvV-EWS5DjwcTd6l02yqXncZxxRWIUTb&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(11,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,2,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','2-perfil-11.jpeg','https://drive.google.com/uc?id=19OZyL5ZX9RB-fIHCPbSBt_Kg9pW1BVZW&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(12,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,3,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','3-perfil-12.jpg','https://drive.google.com/uc?id=1na2Gcv0acVQrMk7QpCbRgAQONcP_fOCd&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(13,1,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,1,1,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'BTC','2018-12-24 00:00:00','Bolivia','Departamento de La Paz','1-perfil-13.jpg','https://drive.google.com/uc?id=1UU8gkTR0Ek9QoN7QRBesxd6JkP0vp4Hr&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(14,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,2,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','2-perfil-14.jpg','https://drive.google.com/uc?id=11WMnyrTSwNIQD2MYpsLkuvsxCMb6GUlS&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}'),(15,0,'POW','Lorem Ipsum es simplemente','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>','<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',NULL,'exito','0.034','USDT',NULL,'limit',NULL,3,2,1,'2018-09-15 00:00:00','2018-09-16 00:00:00',NULL,NULL,NULL,NULL,'ETH','2018-12-31 00:00:00','Bolivia','Departamento de La Paz','3-perfil-15.jpg','https://drive.google.com/uc?id=1oxBcQAqilmUflPHU8pzkIX0qqOXKziqx&export=download','{\"total\":0,\"users\":[]}','{\"total\":0,\"users\":[]}');
/*!40000 ALTER TABLE `signal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `title`
--

DROP TABLE IF EXISTS `title`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `title` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `correspondence` int(11) DEFAULT NULL,
  `link` varchar(512) DEFAULT NULL,
  `question` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `title`
--

LOCK TABLES `title` WRITE;
/*!40000 ALTER TABLE `title` DISABLE KEYS */;
INSERT INTO `title` VALUES (1,'Detalle del proyecto ',NULL,NULL,NULL,NULL),(2,'Introducción',1,'introduccion.html',NULL,NULL),(3,'Detalles de la tecnología',1,'detallestecnologia.html',NULL,NULL),(4,'Road-map y producto mínimo viable',1,'road-mapproductominimoviable.html',NULL,NULL),(5,'Contrapartes en la tecnología centralizada',1,'contrapartestecnologiacentralizada.html',NULL,NULL),(6,'Necesidad de ser descentralizado',1,'necesidadserdescentralizado.html',NULL,NULL),(7,'Necesidad',1,'necesidad.html',NULL,NULL),(8,'Nicho de mercado',1,'nichomercado.html',NULL,NULL),(9,'Diferencia competitiva',1,'diferenciacompetitiva.html',NULL,NULL),(10,'Consideraciones',1,'consideraciones1.html',NULL,NULL),(11,'Marketing',NULL,NULL,NULL,NULL),(12,'Calidad del equipo encargado',11,'calidadequipoencargado.html',NULL,NULL),(13,'Medios de prensa',11,'mediosprensa.html',NULL,NULL),(14,'Asociaciones',11,'asociaciones.html',NULL,NULL),(15,'Calidad de imagen',11,'calidadimagen.html',NULL,NULL),(16,'Consideraciones',11,'consideraciones11.html',NULL,NULL),(17,'Redes sociales',NULL,NULL,NULL,NULL),(18,'Crecimiento',17,'crecimiento.html',NULL,NULL),(19,'Reacción de seguidores',17,'reaccionseguidores.html',NULL,NULL),(20,'Implicación',17,'implicacion.html',NULL,NULL),(21,'Consideraciones',17,'consideraciones17.html',NULL,NULL),(22,'Oferta Vs Demanda',NULL,NULL,NULL,NULL),(23,'Minería de datos',22,'mineriadatos.html',NULL,NULL),(24,'Política inflacionaria',22,'politicainflacionaria.html',NULL,NULL),(25,'Uso de tokens e indicador NVT',22,'usotokensindicadornvt.html',NULL,NULL),(26,'Estimación del tamaño de mercado',22,'estimaciontamanomercado.html',NULL,NULL),(27,'Comparación entre oferta y demanda',22,'comparacionofertademanda.html',NULL,NULL),(28,'Consideraciones',22,'consideraciones22.html',NULL,NULL),(29,'Equipo',NULL,NULL,NULL,NULL),(30,'Directivos',29,'directivos.html',NULL,NULL),(31,'Asesores',29,'asesores.html',NULL,NULL),(32,'Frecuencia de actualizaciones en Github',29,'recuenciaactualizacionesgithub.html',NULL,NULL),(33,'Consideraciones',29,'consideraciones29.html',NULL,NULL),(34,'Conclusiones',NULL,NULL,NULL,NULL),(35,'Conclusion',34,'conclusion.html',NULL,NULL);
/*!40000 ALTER TABLE `title` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) DEFAULT NULL,
  `mount` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `reason` varchar(512) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `emails` text,
  `password` varchar(512) DEFAULT NULL,
  `lastName` varchar(512) DEFAULT NULL,
  `reliability` int(11) DEFAULT NULL,
  `didactic` int(11) DEFAULT NULL,
  `socialNetworks` text,
  `fame` text,
  `brithdate` datetime DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `accusation` int(11) DEFAULT NULL,
  `precision` text,
  `visit` int(11) DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `region` varchar(512) DEFAULT NULL,
  `folderId` varchar(512) DEFAULT NULL,
  `docVerified` tinyint(1) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `perfilLink` varchar(512) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Tony','ironman@test.com',NULL,'$2a$10$BBfJQ30Bl5jw/BThlFMeVe9fwVIbrfyp/PdiC4Q71TBUOFHX/xNBC','Stark',0,0,'[]','[{\"value\":84,\"symbol\":\"BTC\"}]',NULL,0,0,'[{\"valor\":30,\"nropost\":5}]',0,'admin','Bolivia','Departamento de La Paz',NULL,NULL,'ironman',1,NULL,'ironman.jpg','https://drive.google.com/uc?id=18lxxWQjZ34qEfGG5G_48-bGjSwRkIyQs&export=download',1,'2018-11-30 15:09:28','2018-11-30 15:09:28'),(2,'Peter','spiderman@test.com',NULL,'$2a$10$yxyNGrT3H.EmRdHx/w935eSmTNeAzGiV2dBdrW.c5p0DSSKFaemXi','Parker',0,0,'[]','[{\"value\":100,\"symbol\":\"XRP\"}]',NULL,0,0,'[{\"valor\":50,\"nropost\":4}]',0,'normal','Bolivia','Departamento de La Paz',NULL,NULL,'spiderman',1,NULL,'spiderman.jpg','https://drive.google.com/uc?id=1C0lchu6d7jsxybFk9AaYU6LWwtzbK2PH&export=download',1,'2018-11-30 15:09:29','2018-11-30 15:09:29'),(3,'Bruce','hulk@test.com',NULL,'$2a$10$ZCFYYAg9ENdZ72rSvzQjDeOdtlH47p03.Pv4z06J4jgg7bYtFRxaq','Banner',0,0,'[]','[{\"value\":2,\"symbol\":\"ETH\"}]',NULL,0,0,'[{\"valor\":50,\"nropost\":6}]',0,'normal','Peru','Lima',NULL,NULL,'hulk',1,NULL,'hulk.jpg','https://drive.google.com/uc?id=1uZ-kPW22-JvIyjMowI4Lm21vBWoq7s9q&export=download',1,'2018-11-30 15:09:30','2018-11-30 15:09:30'),(4,'Thor','thor@test.com',NULL,'$2a$10$m.hVpSLKhXjYPCqpo8wrnea/WaYn0/ZTph/8Jdi2LbGeR.bbcqcv2','Skgar',0,0,'[]','[{\"value\":100,\"symbol\":\"BCH\"}]',NULL,0,0,'[{\"valor\":25,\"nropost\":2}]',0,'normal','Argentina','Buenos Asnos',NULL,NULL,'thor',1,NULL,'thor.png','https://drive.google.com/uc?id=1zU58FDSn_-n5URiiaXVuKlQ6hMMrmTg7&export=download',1,'2018-11-30 15:09:30','2018-11-30 15:09:30');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 11:12:06

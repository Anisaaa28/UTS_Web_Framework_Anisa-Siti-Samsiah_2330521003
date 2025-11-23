-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cv_anisa
CREATE DATABASE IF NOT EXISTS `cv_anisa` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cv_anisa`;

-- Dumping structure for table cv_anisa.biodata
CREATE TABLE IF NOT EXISTS `biodata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `deskripsi` text,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_anisa.biodata: ~1 rows (approximately)
INSERT INTO `biodata` (`id`, `nama`, `email`, `no_hp`, `deskripsi`, `foto_url`) VALUES
	(1, 'Anisa Siti Samsiah', 'anisarebisani@gmail.com', '085813034987', 'Saya, Anisa, Mahasiswa S1 Teknik Informatika sejak tahun 2023. Saya penuh semangat dan siap untuk membawa energi positif ke dunia profesional. Dengan latar belakang pendidikan yang sedang saya tempuh yaitu Teknik Informatika, saya telah mendapatkan pemahaman yang kuat tentang teknik informatika yang diperlukan untuk berkembang di dunia kerja. Namun, bagi saya bekerja dibidang apapun adalah peluang dan kesempatan untuk mendapatkan pengetahuan dan pengalaman bagi saya, dan akan saya dedikasikan secara tulus dan penuh tanggung jawab.', '/foto.jpg');

-- Dumping structure for table cv_anisa.keahlian
CREATE TABLE IF NOT EXISTS `keahlian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_nama` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_anisa.keahlian: ~2 rows (approximately)
INSERT INTO `keahlian` (`id`, `skill_nama`) VALUES
	(1, 'Komunikasi'),
	(2, 'Penggunaan Perangkat Lunak');

-- Dumping structure for table cv_anisa.pendidikan
CREATE TABLE IF NOT EXISTS `pendidikan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `institusi` varchar(100) DEFAULT NULL,
  `gelar` varchar(100) DEFAULT NULL,
  `tahun` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_anisa.pendidikan: ~1 rows (approximately)
INSERT INTO `pendidikan` (`id`, `institusi`, `gelar`, `tahun`) VALUES
	(1, 'Universitas Muhammadiyah Sukabumi', 'S1 Teknik Informatika', '2023 - Sekarang');

-- Dumping structure for table cv_anisa.pengalaman
CREATE TABLE IF NOT EXISTS `pengalaman` (
  `id` int NOT NULL AUTO_INCREMENT,
  `posisi` varchar(100) DEFAULT NULL,
  `perusahaan` varchar(100) DEFAULT NULL,
  `durasi` varchar(50) DEFAULT NULL,
  `deskripsi` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_anisa.pengalaman: ~3 rows (approximately)
INSERT INTO `pengalaman` (`id`, `posisi`, `perusahaan`, `durasi`, `deskripsi`) VALUES
	(1, 'Asisten Apoteker', 'Rumah Sakit Asy-Syifa Sukabumi', '2018', 'Bertanggung jawab membantu apoteker dalam meracik obat, menyiapkan obat, alat kesehatan, membuat SO.'),
	(2, 'Team Leader', 'PT.Pratama Abadi Industri', '2021 - 2025', 'Bertanggung jawab atas pekerjaan dalam mengelola produksi'),
	(3, 'Administration & Secretaris Office', 'PT.Garda Satria Perkasa', '2025 - Sekarang', 'Bertanggung jawab sebagai sekretaris perusahaan');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

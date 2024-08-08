-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 08 août 2024 à 08:25
-- Version du serveur : 8.0.39-0ubuntu0.24.04.1
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `MenusPortage`
--

-- --------------------------------------------------------

--
-- Structure de la table `Menus`
--

CREATE TABLE `Menus` (
  `id` smallint NOT NULL,
  `entree` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plat` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dessert` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Menus`
--

INSERT INTO `Menus` (`id`, `entree`, `plat`, `dessert`, `date`) VALUES
(1, 'Salade de chèvre chaud', 'Coq au vin', 'Tarte aux pommes', '2024-07-22'),
(2, 'Soupe à l\'oignon', 'Boeuf bourguignon', 'Crème brûlée', '2024-07-23'),
(3, 'Escargots de Bourgogne', 'Ratatouille', 'Fondant au chocolat', '2024-07-24'),
(4, 'Gaspacho', 'Filet mignon sauce béarnaise', 'Mousse au chocolat', '2024-07-25'),
(5, 'Salade niçoise', 'Cassoulet', 'Tarte au citron', '2024-07-26'),
(6, 'Quiche lorraine', 'Boeuf Stroganoff', 'Crêpes Suzette', '2024-07-27'),
(7, 'Rillettes de saumon', 'Magret de canard aux cerises', 'Panna cotta', '2024-07-28'),
(8, 'Salade de lentilles', 'Poulet basquaise', 'Clafoutis aux cerises', '2024-07-29'),
(9, 'Tartare de tomates et mozzarella', 'Blanquette de veau', 'Île flottante', '2024-07-30'),
(10, 'Croustillants de chèvre', 'Sauté de porc à la moutarde', 'Tiramisu', '2024-07-31'),
(11, 'Velouté de potiron', 'Sole meunière', 'Eclair au chocolat', '2024-08-01'),
(12, 'Pâté en croûte', 'Rôti de veau aux morilles', 'Tarte aux fruits rouges', '2024-08-02'),
(13, 'Carpaccio de bœuf', 'Côtelettes d\'agneau', 'Profiteroles', '2024-08-03'),
(14, 'Assiette de charcuterie', 'Osso buco', 'Pêche Melba', '2024-08-04'),
(15, 'Salade de tomates à la provençale', 'Chateaubriand', 'Mille-feuille', '2024-08-05'),
(16, 'Foie gras poêlé', 'Confit de canard', 'Crumble aux pommes', '2024-08-06'),
(17, 'Salade de poulpe', 'Lapin à la moutarde', 'Gâteau au fromage blanc', '2024-08-07'),
(18, 'Caviar d\'aubergine', 'Bouillabaisse', 'Tarte au chocolat', '2024-08-08'),
(19, 'Salade d\'endives et noix', 'Grenadin de veau', 'Macarons', '2024-08-09'),
(20, 'Oeufs cocotte', 'Paella', 'Flan pâtissier', '2024-08-10'),
(21, 'Blinis au saumon', 'Choucroute garnie', 'Sorbet au citron', '2024-08-11'),
(22, 'Tartelette au chèvre et miel', 'Pâtes aux truffes', 'Soufflé au Grand Marnier', '2024-08-12'),
(23, 'Moules marinières', 'Coq au Riesling', 'Riz au lait', '2024-08-13'),
(24, 'Velouté de champignons', 'Curry de légumes', 'Pêches rôties au miel', '2024-08-14'),
(25, 'Salade de betteraves', 'Gratin dauphinois', 'Gâteau au chocolat', '2024-08-15'),
(26, 'Tartare de saumon', 'Boeuf Wellington', 'Crème caramel', '2024-08-16'),
(27, 'Salade de concombres', 'Côtelettes de porc', 'Charlotte aux fruits', '2024-08-17'),
(28, 'Terrine de lapin', 'Risotto aux champignons', 'Tarte tatin', '2024-08-18'),
(29, 'Salade de roquette et parmesan', 'Cabillaud en croûte', 'Mille-feuille à la vanille', '2024-08-19'),
(30, 'Pâté de campagne', 'Filet de boeuf en croûte', 'Pouding au pain', '2024-08-20'),
(31, 'Aumônières de chèvre', 'Poulet aux morilles', 'Baba au rhum', '2024-08-21'),
(32, 'Gaspacho de concombre', 'Gratin de courgettes', 'Clafoutis aux poires', '2024-08-22'),
(33, 'Bruschetta', 'Magret de canard aux figues', 'Tiramisu aux fruits rouges', '2024-08-23'),
(34, 'Salade de pâtes', 'Lamb chops with mint sauce', 'Crêpes au Nutella', '2024-08-24'),
(35, 'Céviche de dorade', 'Rôti de porc aux pommes', 'Gâteau au fromage', '2024-08-25'),
(36, 'Feuilletés au saumon', 'Chili con carne', 'Brownies', '2024-08-26'),
(37, 'Chou farci', 'Poisson grillé', 'Tarte au chocolat blanc', '2024-08-27'),
(38, 'Salade de quinoa', 'Boeuf bourguignon', 'Panna cotta aux fruits', '2024-08-28'),
(39, 'Soupe de carottes', 'Côtelettes d\'agneau aux herbes', 'Gâteau au yaourt', '2024-08-29'),
(40, 'Salade de poulet', 'Rôti de veau', 'Tarte au citron meringuée', '2024-08-30'),
(41, 'Rillettes de canard', 'Blanquette de veau', 'Mousse au chocolat blanc', '2024-08-31'),
(42, 'Salade d\'aubergines', 'Pâtes aux fruits de mer', 'Éclair au café', '2024-09-01'),
(43, 'Velouté de courgettes', 'Côtelettes de porc grillées', 'Soufflé au chocolat', '2024-09-02'),
(44, 'Salade de lentilles vertes', 'Sauté de veau', 'Tarte aux poires', '2024-09-03'),
(45, 'Gravlaks', 'Filet de sole au beurre blanc', 'Clafoutis aux pommes', '2024-09-04'),
(46, 'Salade de tomates et mozzarella', 'Boeuf au curry', 'Crêpes au caramel', '2024-09-05'),
(47, 'Tarte au chèvre et aux herbes', 'Poulet rôti', 'Tartelette au citron', '2024-09-06'),
(48, 'Moules à la crème', 'Côte de boeuf grillée', 'Pêches rôties', '2024-09-07'),
(49, 'Terrine de légumes', 'Côtelettes d\'agneau à la moutarde', 'Crème brûlée', '2024-09-08'),
(50, 'Salade de pommes de terre', 'Choucroute', 'Mousse au café', '2024-09-09'),
(51, 'Saucisson brioché', 'Filet de porc aux pruneaux', 'Tarte aux fraises', '2024-09-10'),
(52, 'Ceviche de crevettes', 'Boeuf bourguignon', 'Gâteau aux noix', '2024-09-11'),
(53, 'Salade de haricots verts', 'Rôti de bœuf', 'Éclair à la vanille', '2024-09-12'),
(54, 'Tarte à l\'oignon', 'Poisson en papillote', 'Mille-feuille aux fruits', '2024-09-13'),
(55, 'Salade de roquette et parmesan', 'Ratatouille', 'Panna cotta aux fruits rouges', '2024-09-14'),
(56, 'Salade de betteraves', 'Gratin dauphinois', 'Gâteau au chocolat', '2024-09-15'),
(57, 'Tartare de saumon', 'Boeuf Wellington', 'Crème caramel', '2024-09-16'),
(58, 'Salade de concombres', 'Côtelettes de porc', 'Charlotte aux fruits', '2024-09-17'),
(59, 'Terrine de lapin', 'Risotto aux champignons', 'Tarte tatin', '2024-09-18'),
(60, 'Salade de roquette et parmesan', 'Cabillaud en croûte', 'Mille-feuille à la vanille', '2024-09-19'),
(61, 'Pâté de campagne', 'Filet de boeuf en croûte', 'Pouding au pain', '2024-09-20'),
(62, 'Aumônières de chèvre', 'Poulet aux morilles', 'Baba au rhum', '2024-09-21'),
(63, 'Gaspacho de concombre', 'Gratin de courgettes', 'Clafoutis aux poires', '2024-09-22'),
(64, 'Bruschetta', 'Magret de canard aux figues', 'Tiramisu aux fruits rouges', '2024-09-23'),
(65, 'Salade de pâtes', 'Lamb chops with mint sauce', 'Crêpes au Nutella', '2024-09-24'),
(66, 'Céviche de dorade', 'Rôti de porc aux pommes', 'Gâteau au fromage', '2024-09-25'),
(67, 'Feuilletés au saumon', 'Chili con carne', 'Brownies', '2024-09-26'),
(68, 'Chou farci', 'Poisson grillé', 'Tarte au chocolat blanc', '2024-09-27'),
(69, 'Salade de quinoa', 'Boeuf bourguignon', 'Panna cotta aux fruits', '2024-09-28'),
(70, 'Soupe de carottes', 'Côtelettes d\'agneau aux herbes', 'Gâteau au yaourt', '2024-09-29'),
(71, 'Salade de poulet', 'Rôti de veau', 'Tarte au citron meringuée', '2024-09-30'),
(72, 'Rillettes de canard', 'Blanquette de veau', 'Mousse au chocolat blanc', '2024-10-01'),
(73, 'Salade d\'aubergines', 'Pâtes aux fruits de mer', 'Éclair au café', '2024-10-02'),
(74, 'Velouté de courgettes', 'Côtelettes de porc grillées', 'Soufflé au chocolat', '2024-10-03'),
(75, 'Salade de lentilles vertes', 'Sauté de veau', 'Tarte aux poires', '2024-10-04'),
(76, 'Gravlaks', 'Filet de sole au beurre blanc', 'Clafoutis aux pommes', '2024-10-05'),
(77, 'Salade de tomates et mozzarella', 'Boeuf au curry', 'Crêpes au caramel', '2024-10-06'),
(78, 'Tarte au chèvre et aux herbes', 'Poulet rôti', 'Tartelette au citron', '2024-10-07'),
(79, 'Moules à la crème', 'Côte de boeuf grillée', 'Pêches rôties', '2024-10-08'),
(80, 'Terrine de légumes', 'Côtelettes d\'agneau à la moutarde', 'Crème brûlée', '2024-10-09'),
(81, 'Salade de pommes de terre', 'Choucroute', 'Mousse au café', '2024-10-10'),
(82, 'Saucisson brioché', 'Filet de porc aux pruneaux', 'Tarte aux fraises', '2024-10-11'),
(83, 'Ceviche de crevettes', 'Boeuf bourguignon', 'Gâteau aux noix', '2024-10-12'),
(84, 'Salade de haricots verts', 'Rôti de bœuf', 'Éclair à la vanille', '2024-10-13'),
(85, 'Tarte à l\'oignon', 'Poisson en papillote', 'Mille-feuille aux fruits', '2024-10-14');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Menus`
--
ALTER TABLE `Menus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Menus`
--
ALTER TABLE `Menus`
  MODIFY `id` smallint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

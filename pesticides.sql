CREATE TABLE `methodes` (
  `id_methode` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_methode` varchar(255),
  `nom_famille` varchar(255),
  `sous_famille` varchar(255),
  `autre_caracteristique` varchar(255)
);

CREATE TABLE `culture` (
  `id_culture` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cultures` varchar(255),
  `filiere` varchar(255),
  `terre_abri` varchar(255)
);

CREATE TABLE `cible` (
  `id_cible` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cible_principale` varchar(255),
  `groupe_cible` varchar(255)
);

CREATE TABLE `projet` (
  `id_projet` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_projet` varchar(255),
  `periode` varchar(255),
  `code_postal` int
);

CREATE TABLE `traitement` (
  `id_traitement` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `type` varchar(255),
  `partie` varchar(255),
  `mode_action` varchar(255)
);

CREATE TABLE `application` (
  `id_application` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stade` varchar(255),
  `nombre` int,
  `dose` varchar(255),
  `rdd_oad` varchar(255)
);

CREATE TABLE `experimentation` (
  `id_experimentation` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_system` varchar(255),
  `site_experimental` varchar(255),
  `lien` varchar(255)
);

CREATE TABLE `methodes_projet` (
  `methodes_id_methode` int,
  `projet_id_projet` int,
  PRIMARY KEY (`methodes_id_methode`, `projet_id_projet`)
);

ALTER TABLE `methodes_projet` ADD FOREIGN KEY (`methodes_id_methode`) REFERENCES `methodes` (`id_methode`);

ALTER TABLE `methodes_projet` ADD FOREIGN KEY (`projet_id_projet`) REFERENCES `projet` (`id_projet`);


CREATE TABLE `application_methodes` (
  `application_id_application` int,
  `methodes_id_methode` int,
  PRIMARY KEY (`application_id_application`, `methodes_id_methode`)
);

ALTER TABLE `application_methodes` ADD FOREIGN KEY (`application_id_application`) REFERENCES `application` (`id_application`);

ALTER TABLE `application_methodes` ADD FOREIGN KEY (`methodes_id_methode`) REFERENCES `methodes` (`id_methode`);


CREATE TABLE `methodes_cible` (
  `methodes_id_methode` int,
  `cible_id_cible` int,
  PRIMARY KEY (`methodes_id_methode`, `cible_id_cible`)
);

ALTER TABLE `methodes_cible` ADD FOREIGN KEY (`methodes_id_methode`) REFERENCES `methodes` (`id_methode`);

ALTER TABLE `methodes_cible` ADD FOREIGN KEY (`cible_id_cible`) REFERENCES `cible` (`id_cible`);


CREATE TABLE `experimentation_projet` (
  `experimentation_id_experimentation` int,
  `projet_id_projet` int,
  PRIMARY KEY (`experimentation_id_experimentation`, `projet_id_projet`)
);

ALTER TABLE `experimentation_projet` ADD FOREIGN KEY (`experimentation_id_experimentation`) REFERENCES `experimentation` (`id_experimentation`);

ALTER TABLE `experimentation_projet` ADD FOREIGN KEY (`projet_id_projet`) REFERENCES `projet` (`id_projet`);


CREATE TABLE `culture_projet` (
  `culture_id_culture` int,
  `projet_id_projet` int,
  PRIMARY KEY (`culture_id_culture`, `projet_id_projet`)
);

ALTER TABLE `culture_projet` ADD FOREIGN KEY (`culture_id_culture`) REFERENCES `culture` (`id_culture`);

ALTER TABLE `culture_projet` ADD FOREIGN KEY (`projet_id_projet`) REFERENCES `projet` (`id_projet`);


CREATE TABLE `traitement_methodes` (
  `traitement_id_traitement` int,
  `methodes_id_methode` int,
  PRIMARY KEY (`traitement_id_traitement`, `methodes_id_methode`)
);

ALTER TABLE `traitement_methodes` ADD FOREIGN KEY (`traitement_id_traitement`) REFERENCES `traitement` (`id_traitement`);

ALTER TABLE `traitement_methodes` ADD FOREIGN KEY (`methodes_id_methode`) REFERENCES `methodes` (`id_methode`);


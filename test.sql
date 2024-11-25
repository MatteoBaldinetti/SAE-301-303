INSERT INTO projet(nom_projet, periode, code_postal)
VALUES ("4SYSLEG", "2013-2018", 66200); 

INSERT INTO methodes(nom_methode, nom_famille, sous_famille, autre_caracteristique)
VALUES ("Hydrogénocarbonate de potassium", "Substances naturelles", "Origine minérale", NULL); 

INSERT INTO experimentation(nom_system, site_experimental, lien)
VALUES ("DivRed", "Domaine Expérimental Alénya-Roussillon", "https://ecophytopic.fr/sites/default/files/2019-12/Fiche%20SYSTEME_4SYSLEG_Alenya_T25DivRed.pdf"); 

INSERT INTO culture(cultures, filiere, terre_abri)
VALUES ("Laitue", "Légumes", "Sous abris"); 

INSERT INTO traitement(type, partie, mode_action)
VALUES ("Fongicides", "Aérienne ", "Fongicide de contact multi-sites"); 

INSERT INTO application(stade, nombre, dose, rdd_oad)
VALUES (NULL, NULL, NULL, NULL); 

INSERT INTO cible(cible_principale, groupe_cible)
VALUES ("Oïdium", "Ascomycètes"); 

INSERT INTO application_methodes(application_id_application, methodes_id_methode)
VALUES (1, 1); 

INSERT INTO culture_projet(culture_id_culture, projet_id_projet	)
VALUES (1, 1); 

INSERT INTO experimentation_projet(experimentation_id_experimentation, projet_id_projet)
VALUES (1, 1); 

INSERT INTO methodes_cible(methodes_id_methode, cible_id_cible)
VALUES (1, 1); 

INSERT INTO methodes_projet(methodes_id_methode, projet_id_projet)
VALUES (1, 1); 

INSERT INTO traitement_methodes(traitement_id_traitement, methodes_id_methode)
VALUES (1, 1); 
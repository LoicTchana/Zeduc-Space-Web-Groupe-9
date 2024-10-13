INSERT INTO Utilisateur (id_utilisateur, nom_utilisateur, email, num_tel, points_fidelite, id_parrain, date_inscription, mot_de_passe, statut_compte)
VALUES
('U000001', 'Tchana Loic', 'tchana.loic@gmail.com', 656893265, 50, NULL, '2024-10-10 12:00:00', 'Password123!', 'Actif'),
('U000002', 'Bernard Fortune', 'bernard.fortune@gmail.com', 687654321, 100, 'U000001', '2024-10-11 14:30:00', 'SecurePass45!', 'Actif');

INSERT INTO Employe (id_employe, nom_employe, email_employe, mot_de_passe, date_embauche, role)
VALUES
('Emp000001', 'Aristide Noubaissem', 'aristide.noubaissem@zeduc.com', 'EmpPass456!', '2024-01-15 09:00:00', 'Serveur'),
('Emp000002', 'Nipa Garga', 'nipa.garga@zeduc.com', 'EmpPass789!', '2023-11-10 10:30:00', 'Cuisinier');

INSERT INTO Commande (id_commande, id_utilisateur, id_employe, montant_total, points_accumules, date_commande)
VALUES
('CMD000001', 'U000001', 'Emp000001', 30.50, 3, '2024-10-10 18:00:00'),
('CMD000002', 'U000002', 'Emp000002', 55.00, 5, '2024-10-11 19:15:00');

INSERT INTO Parrainage (id_parrain, id_filleul, date_parrainage, etat_recompense)
VALUES
('U000001', 'U000002', '2024-10-11 14:30:00', 'Non obtenu');

INSERT INTO Plat (id_plat, nom_plat, prix, point)
VALUES
('P000001', 'Poulet pané', 2000, 2),
('P000002', 'Eru', 1000, 1);

INSERT INTO Plat_vendu (id_vente, id_plat, nombre_occurence)
VALUES
('V000001', 'P000001', 3),
('V000002', 'P000002', 5);

INSERT INTO Menu (id_menu,nom_menu ,prix, nombre_dispo)
VALUES
('M000001', 'Poulet pané et Eru', 20.00, 5);

INSERT INTO Menu_plat (id_menu, id_plat, quantite_plat) VALUES
('M000001','P000001','20'),
('M000001','P000002','10');



INSERT INTO Gerant (email_gerant, num_tel_gerant, nom, date_debut_service, mot_de_passe)
VALUES
('mahel.gerant@zeduc.com', 653456789, 'Nanpane Adigono Yann-Mahel', '2020-02-01 09:00:00', 'GerantPass2020!');


INSERT INTO Administrateur (email_admin, num_tel_admin, nom, date_debut_service, mot_de_passe)
VALUES
('admin@restaurant.com', 987654321, 'Admin Super', '2019-05-15 10:00:00', 'AdminPass2019!');

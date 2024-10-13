CREATE VIEW vue_commandes_utilisateurs AS
SELECT c.id_commande, c.montant_total, c.points_accumules, c.date_commande,
       u.nom_utilisateur, u.email, u.num_tel
FROM Commande c
JOIN Utilisateur u ON c.id_utilisateur = u.id_utilisateur;

CREATE VIEW menu_jour AS
    SELECT mp.id_menu, mp.id_plat,p.nom_plat,mp.quantite_plat
    FROM Menu_plat mp
    JOIN Plat p ON mp.id_plat = p.id_plat;

CREATE VIEW historique_commandes_utilisateur AS
SELECT
    c.id_commande,
    c.date_commande,
    c.montant_total,
    c.points_accumules,
    u.id_utilisateur,
    u.nom_utilisateur,
    u.email
FROM
    Commande c
JOIN
    Utilisateur u ON c.id_utilisateur = u.id_utilisateur;

CREATE VIEW vue_parrainages_recompenses AS
SELECT u1.nom_utilisateur AS parrain, u2.nom_utilisateur AS filleul, p.date_parrainage, p.etat_recompense
FROM Parrainage p
JOIN Utilisateur u1 ON p.id_parrain = u1.id_utilisateur
JOIN Utilisateur u2 ON p.id_filleul = u2.id_utilisateur;


DELIMITER //
CREATE TRIGGER trig_id_utilisateur_avant_insert
BEFORE INSERT ON Utilisateur
FOR EACH ROW
BEGIN
    SET NEW.id_utilisateur = CONCAT('U', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_utilisateur, 2, 6) AS UNSIGNED)), 0) + 1 FROM Utilisateur), 6, '0'));
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_id_employe
BEFORE INSERT ON Employe
FOR EACH ROW
    BEGIN
        SET NEW.id_employe = CONCAT('Emp', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_employe,2,6)AS UNSIGNED )),0)+1 FROM Employe),6,'0'));
    end //
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_id_commande
BEFORE INSERT ON Commande
FOR EACH ROW
    BEGIN
        SET NEW.id_commande = CONCAT('CMD', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_commande,2,6)AS UNSIGNED )),0)+1 FROM Commande),6,'0'));
    end //
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_id_plat
BEFORE INSERT ON Plat
FOR EACH ROW
    BEGIN
        SET NEW.id_plat = CONCAT('P', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_plat,2,6)AS UNSIGNED )),0)+1 FROM Plat),6,'0'));
    end //
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_id_plat_vendu
BEFORE INSERT ON Plat_vendu
FOR EACH ROW
    BEGIN
        SET NEW.id_vente = CONCAT('V', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_vente,2,6)AS UNSIGNED )),0)+1 FROM Plat_vendu),6,'0'));
    end //
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_id_menu
BEFORE INSERT ON Menu
FOR EACH ROW
    BEGIN
        SET NEW.id_menu = CONCAT('M', LPAD((SELECT IFNULL(MAX(CAST(SUBSTRING(id_menu,2,6)AS UNSIGNED )),0)+1 FROM Menu),6,'0'));
    end //
DELIMITER ;

DELIMITER //
CREATE TRIGGER trig_update_points_fidelite_apres_commande
AFTER INSERT ON Commande
FOR EACH ROW
BEGIN
    UPDATE Utilisateur
    SET points_fidelite = points_fidelite + NEW.points_accumules
    WHERE id_utilisateur = NEW.id_utilisateur;
END;
//
DELIMITER ;

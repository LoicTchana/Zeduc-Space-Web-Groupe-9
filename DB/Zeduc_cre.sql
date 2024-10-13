CREATE TABLE Utilisateur (
    id_utilisateur VARCHAR(255) PRIMARY KEY,
    nom_utilisateur VARCHAR(255),
    email VARCHAR(255),
    num_tel NUMERIC,
    points_fidelite NUMERIC,
    id_parrain VARCHAR(255),
    date_inscription TIMESTAMP,
    mot_de_passe VARCHAR(255),
    statut_compte ENUM ('Actif','Inactif')
    CHECK ( id_utilisateur REGEXP '^U[0-9]{6}$'),
    CHECK ( email LIKE '%_@_%._%'),
    CHECK ( mot_de_passe REGEXP ''),
    CONSTRAINT fk_parrain FOREIGN KEY (id_parrain) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE
);

CREATE TABLE Employe (
    id_employe VARCHAR(255) PRIMARY KEY,
    nom_employe VARCHAR(255),
    email_employe VARCHAR(255),
    mot_de_passe VARCHAR(255),
    date_embauche TIMESTAMP,
    role VARCHAR(255),
    CHECK ( id_employe REGEXP 'Emp[0-9]{6}$'),
    CHECK ( mot_de_passe REGEXP '')
);

CREATE TABLE Commande (
    id_commande VARCHAR(255) PRIMARY KEY ,
    id_utilisateur VARCHAR(255),
    id_employe VARCHAR(255),
    montant_total  NUMERIC,
    points_accumules NUMERIC,
    date_commande TIMESTAMP,
    CHECK ( id_commande REGEXP 'CMD[0-9]{6}$'),
    CONSTRAINT fk_client FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE ,
    CONSTRAINT fk_employe FOREIGN KEY (id_employe) REFERENCES Employe(id_employe) ON DELETE CASCADE
);

CREATE TABLE Parrainage (
    id_parrain VARCHAR(255),
    id_filleul VARCHAR(255),
    date_parrainage TIMESTAMP,
    etat_recompense ENUM ('Obtenu', 'Non obtenu'),
    CONSTRAINT fk_parrain1 FOREIGN KEY (id_parrain) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE ,
    CONSTRAINT fk_filleul FOREIGN KEY (id_filleul) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE ,
    PRIMARY KEY (id_parrain,id_filleul)
);

CREATE TABLE Plat (
    id_plat VARCHAR(255) PRIMARY KEY ,
    nom_plat VARCHAR(255),
    prix NUMERIC,
    point NUMERIC,
    CHECK ( id_plat REGEXP 'P[0-9]{6}$')
);

CREATE TABLE Plat_vendu (
    id_vente VARCHAR(255) PRIMARY KEY ,
    id_plat VARCHAR(255),
    nombre_occurence NUMERIC,
    CONSTRAINT fk_plat FOREIGN KEY (id_plat) REFERENCES Plat (id_plat) ON DELETE CASCADE ,
    CHECK ( id_vente REGEXP 'V[0-9]{6}$')
);

CREATE TABLE Menu (
    id_menu VARCHAR(255) PRIMARY KEY,
    nom_menu VARCHAR(255),
    prix NUMERIC,
    nombre_dispo NUMERIC,
    CHECK (nombre_dispo >= 0)
);

CREATE TABLE Menu_Plat (
    id_menu VARCHAR(255),
    id_plat VARCHAR(255),
    quantite_plat NUMERIC,
    PRIMARY KEY (id_menu, id_plat),
    CONSTRAINT fk_plat1 FOREIGN KEY (id_plat) REFERENCES Plat(id_plat) ON DELETE CASCADE ,
    CONSTRAINT fk_menu FOREIGN KEY (id_menu) REFERENCES Menu(id_menu) ON DELETE CASCADE
);


CREATE TABLE Gerant (
    email_gerant VARCHAR(255) PRIMARY KEY ,
    num_tel_gerant NUMERIC,
    nom VARCHAR(255),
    date_debut_service TIMESTAMP,
    mot_de_passe VARCHAR(255),
    CHECK ( email_gerant LIKE '%_@_%._%')
);

CREATE TABLE Administrateur (
    email_admin VARCHAR(255) PRIMARY KEY,
    num_tel_admin NUMERIC,
    nom VARCHAR(255),
    date_debut_service TIMESTAMP,
    mot_de_passe VARCHAR(255),
    CHECK ( email_admin LIKE '%_@_%._%' )
);

CREATE TABLE Reclamation (
    id_reclamation VARCHAR(255) PRIMARY KEY ,
    id_utilisateur VARCHAR(255),
    libelle VARCHAR(1000),
    etat ENUM('Vue', 'Pas vue'),
    CONSTRAINT fk_reclamation FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
)
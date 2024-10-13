<?php
require_once 'C:\xampp\htdocs\MiamMiam\backend\config\db_config.php';
 Class Utilisateurs {

    private $id_utilisateur;
    private $nom_utilisateur;
    private $email;
    private $num_tel;
    private $points_fidelite;
    private $id_parrain;
    private $date_inscription;
    private $mot_de_passe;
    private $statut_compte;


        public function _construct($id_utilisateur,$nom_utilisateur,$email,$num_tel,$points_fidelite,$id_parrain,$date_inscription,$mot_de_passe,$statut_compte) {

            $this->id_utilisateur = $id_utilisateur;
            $this->nom_utilisateur = $nom_utilisateur;
            $this->email = $email;
            $this->num_tel = $num_tel;
            $this->points_fidelite = $points_fidelite;
            $this->id_parrain = $id_parrain;
            $this->date_inscription = $date_inscription;
            $this->mot_de_passe = $mot_de_passe;
            $this->statut_compte = $statut_compte;

        }

        public static function getAll() {
            global $conn;
            $sql = "SELECT * FROM Utilisateur";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $resultats = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Afficher les résultats
            foreach ($resultats as $utilisateur) {
                echo "ID: " . $utilisateur['id_utilisateur'] . "<br>";
                echo "Nom: " . $utilisateur['nom_utilisateur'] . "<br>";
                echo "Email: " . $utilisateur['email'] . "<br>";
                echo "Numéro de téléphone: " . $utilisateur['num_tel'] . "<br>";
                echo "Points de fidélité: " . $utilisateur['points_fidelite'] . "<br>";
                echo "Statut du compte: " . $utilisateur['statut_compte'] . "<br><br>";
            }
        }



 }

 Utilisateurs::getAll();


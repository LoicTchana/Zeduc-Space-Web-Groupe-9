import React, {useState} from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import './etudiantMain.css'; // Assure-toi d'utiliser le bon chemin pour ton fichier CSS
import imageCard from '../assets/Rectangle 59.png';
import imagelike from '../assets/Group 23.png';
import imagedrop from '../assets/Vector (2).png';



const CardComponent = ({ imageSrc, smallImage1, smallImage2, price, dishName, description, additionalDescription, onAddToCart }) => (
  <div className="card" style={{ width: '200px', height: '300px', borderRadius: '20px', border: 'none', backgroundColor: '#D9D9D9', position: 'relative', overflow: 'hidden' }}>
    
    {/* Grande image en haut à gauche */}
    <img src={imageSrc} alt="Main" className="main-image" style={{ width: '50%', height: '30%', borderRadius: '20px', position: 'absolute', top: '10px', left: '10px' }} />
    
    {/* Petite image en haut à droite */}
    <img src={smallImage1} alt="Small 1" style={{ width: '30px', height: '30px', position: 'absolute', top: '10px', right: '10px' }} />
    
    {/* Petite image en bas à droite */}
    <img src={smallImage2} alt="Small 2" style={{ width: '30px', height: '30px', position: 'absolute', top: '50px', right: '10px' }} />
    
    {/* Contenu de la carte */}
    <div className="card-body" style={{ padding: '120px 10px 10px 10px', textAlign: 'center' }}>
      <h5 className="price">{dishName} - {price} XAF</h5>
      <p className="description">{description}</p>
      <p className="additional-description" style={{ fontSize: '12px', color: '#555' }}>{additionalDescription}</p>
      <Button variant="primary" style={{backgroundColor: '#D4B35E', borderColor: '#D4B35E'}} onClick={onAddToCart}>Ajouter au panier</Button>
    </div>
  </div>
);

const PromotionsFrame = () => {
  return (
    <div style={{
      width: '630px',
      height: '70px', // Augmenté pour une meilleure visibilité
      display: 'center',
      alignItems: 'center',
      marginTop: '160px',
      border: '1px solid #ccc', // Optionnel : ajouter une bordure pour un meilleur style
      borderRadius: '5px', // Optionnel : arrondir les coins
      backgroundColor: '#D4B35E', // Optionnel : couleur de fond
      fontWeight:'bold',
      fontSize: '30px',
    }}>
      {/* Section gauche avec le texte */}
      <div style={{
        flex: '0 0 40%', // Prend 40% de la largeur
        textAlign: 'left',
        paddingRight: '5px', // Espace à droite
      }}>
        Promotions
      </div>

      {/* Section droite avec l'image */}
      <div style={{
        flex: '1', // Prend le reste de la largeur
        textAlign: 'right',
        paddingLeft: '5px', // Espace à gauche
      }}>
        <img src="https://via.placeholder.com/15" alt="Promo" style={{ height: '15px', width: '15px' }} />
      </div>
    </div>
  );
};



const ShoppingCart = ({ cartItems, onConfirm, onRemove }) => {
  const deliveryPrice = 5; // Prix de la livraison
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0) + deliveryPrice;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '350px', height:'500px', position: 'absolute', right: '60px', top: '120px', backgroundColor: '#F3F3F3' }}>
      <h5>Mon panier</h5>
      <hr />
      <div>
        {cartItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{item.dishName}</span>
            <span>{item.price} XAF</span>
            <Button variant="link" onClick={() => onRemove(index)}>Annuler</Button>
          </div>
        ))}
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <span>Total:</span>
        <span>{totalPrice} XAF</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Livraison:</span>
        <span>{deliveryPrice} XAF</span>
      </div>
      <Button variant="primary" style={{ backgroundColor: '#D4B35E', borderColor: '#D4B35E',marginTop: '10px', }} onClick={onConfirm}>Confirmer la commande</Button>
    </div>
  );
};

const Conteneur = () => {
  const [cartItems, setCartItems] = useState([]);

  const containerStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '70%',
    height: '65vh',
    margin: '20px auto 0 0',
  };

  const cardData = [
    {
      imageSrc: 'https://via.placeholder.com/70',
      smallImage1: 'https://via.placeholder.com/30',
      smallImage2: 'https://via.placeholder.com/30',
      price: '24',
      dishName: 'Plat 1',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 1.',
    },
    {
      imageSrc: 'https://via.placeholder.com/70/FF5733',
      smallImage1: 'https://via.placeholder.com/30/FF5733',
      smallImage2: 'https://via.placeholder.com/30/FF5733',
      price: '30',
      dishName: 'Plat 2',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 2.',
    },
    {
      imageSrc: 'https://via.placeholder.com/70/33FF57',
      smallImage1: 'https://via.placeholder.com/30/33FF57',
      smallImage2: 'https://via.placeholder.com/30/33FF57',
      price: '18',
      dishName: 'Plat 3',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 3.',
    },
    {
      imageSrc: 'https://via.placeholder.com/70/3357FF',
      smallImage1: 'https://via.placeholder.com/30/3357FF',
      smallImage2: 'https://via.placeholder.com/30/3357FF',
      price: '20',
      dishName: 'Plat 4',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 4.',
    },
    {
      imageSrc: 'https://via.placeholder.com/70/FFFF33',
      smallImage1: 'https://via.placeholder.com/30/FFFF33',
      smallImage2: 'https://via.placeholder.com/30/FFFF33',
      price: '27',
      dishName: 'Plat 5',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 5.',
    },
    {
      imageSrc: 'https://via.placeholder.com/70/FF33FF',
      smallImage1: 'https://via.placeholder.com/30/FF33FF',
      smallImage2: 'https://via.placeholder.com/30/FF33FF',
      price: '22',
      dishName: 'Plat 6',
      description: 'Description',
      additionalDescription: 'Détails supplémentaires sur le plat 6.',
    },
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleConfirm = () => {
    alert('Commande confirmée!');
    // Logique de confirmation ici
  };

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <div style={containerStyle}>
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                imageSrc={card.imageSrc}
                smallImage1={card.smallImage1}
                smallImage2={card.smallImage2}
                price={card.price}
                dishName={card.dishName}
                description={card.description}
                additionalDescription={card.additionalDescription}
                onAddToCart={() => addToCart(card)} // Ajout au panier
              />
            ))}
            
          </div>

          {/* Ajout du cadre des promotions */}
          <PromotionsFrame />
          <br/>
        </Col>
        <Col md={4}>
          <ShoppingCart cartItems={cartItems} onConfirm={handleConfirm} onRemove={removeFromCart} />
        </Col>
      </Row>
    </Container>
  );
};

export default Conteneur;
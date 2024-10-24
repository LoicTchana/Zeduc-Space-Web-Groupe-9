import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './recuperation.css'; 

const EmailPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [passwordFieldVisible, setPasswordFieldVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setPasswordFieldVisible(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
    } else {
      setError('');
      alert('Mot de passe validé !'); // Remplace par ta logique
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="frame">
        <Form onSubmit={handleEmailSubmit} className="mb-3">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Valider
          </Button>
        </Form>

        {showMessage && (
          <Alert variant="success">
            Un email a été envoyé à cette adresse.
          </Alert>
        )}

        {passwordFieldVisible && (
          <Form onSubmit={handlePasswordSubmit} className="mt-3">
            <Form.Group controlId="formPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez le mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmez le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            <Button variant="primary" type="submit" className="mt-3">
              Valider
            </Button>
          </Form>
        )}
      </div>
    </Container>
  );
};

export default EmailPasswordPage;

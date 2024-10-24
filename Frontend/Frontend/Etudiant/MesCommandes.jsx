import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OrderSummary.css';

const OrderSummary = ({ userId }) => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!userId) {
                setError('Utilisateur non connecté');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`/commandes/utilisateur/${userId}`);
                setOrders(response.data);
            } catch (err) {
                setError(err.response ? err.response.data.message : 'Erreur lors de la récupération des commandes');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    if (loading) {
        return <div>Chargement des commandes...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container className="tab mt-5">
            <h2>Mes commandes</h2>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: '#af0e46' }}>ID Commande</th>
                        <th style={{ backgroundColor: '#af0e46' }}>Montant Total</th>
                        <th style={{ backgroundColor: '#af0e46' }}>Date Commande</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id_commande}>
                            <td>{order.id_commande}</td>
                            <td>{order.montant_total} DA</td>
                            <td>{new Date(order.date_commande).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="secondary" onClick={() => navigate(-1)}>
                Retour
            </Button>
        </Container>
    );
};

export default OrderSummary;

import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';


export default function Profile() {
  const { user } = useAuth();


  return (
    <Container>
      <h1>Profile</h1>
      <p>Welcome, {user.email}!</p>
    </Container>
  );
}
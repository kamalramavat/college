import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Papa from 'papaparse';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Papa.parse('https://docs.google.com/spreadsheets/d/1qyzcGO4tjAqj1V7m5NegU2vKW4FUyJcgNPkxizwaPLA/gviz/tq?tqx=out:csv&sheet=user', {
      download: true,
      header: true,
      complete: (results) => {
        setUsers(results.data);
      },
    });
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const user = users.find((user) => user.userName === username && user.userPassword === password);
  
    if (user) {
      onLogin(user);
    } else {
      alert('Invalid username or password');
    }
  };
  

  return (
    <Container style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Row className="justify-content-md-center">
        <Col xs lg="15" style={{ maxWidth: '800vw' }}>
          <Form onSubmit={handleSubmit} style={{ padding: '1px', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Click here to Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

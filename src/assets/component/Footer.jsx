import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0a0a', color: 'white', padding: '20px 0' }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-block align-items-center mb-3 mb-md-0">
            <Image
              src="https://i.pinimg.com/1200x/96/b7/3b/96b73bc8a7f3f3899d796f143eb831ed.jpg" 
              alt="Vozona Gasy Logo"
              width={40}
              height={40}
              className="me-2"
              style={{marginLeft: 55, borderRadius : "100%"}}
            />
            <h2 className="mb-0" style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}>
              Vozona Gasy
            </h2>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <p className="mb-0" style={{ lineHeight: '1.4' }}>
              Vozona Gasy est une application de traduction qui permet de traduire
              toutes les langues vers le malgache. Que ce soit pour des textes, des
              mots ou des phrases, nous rendons la langue malgache accessible à
              tous. Notre objectif est de faciliter la communication et de promouvoir
              la culture malgache à travers la langue.
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: 'white', margin: '15px 0' }} />
        <Row>
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <p className="mb-0" style={{ fontSize: '0.9rem', color: '#888' }}>
              Copyright © 2024 Lantomalala Justin. Tous droits réservés.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <a 
              href="mailto:lantomalaljustin@gmail.com"
              style={{ fontSize: '0.9rem', color: '#888', textDecoration: 'none' }}
            >
              lantomalaljustin@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
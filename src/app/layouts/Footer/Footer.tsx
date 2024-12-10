import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container fluid className="py-4">
      <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="6" className="p-0 footer-copyright">
            <p className="mb-0">Copyright 2024 © CODICE</p>
          </Col>
          <Col md="6" className="p-0">
            <p className="mb-0 heart">MPS v. 1.0.0_build-1</p>
          </Col>
        </Row>
      </Container>
    </footer>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Company Name: 
        <a className="text-dark" href="https://companywebsite.com/">companywebsite.com</a>
      </div>
    </footer>
  );
};

export default Footer;

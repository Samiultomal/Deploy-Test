import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardImage1 from '../../images/6.jpg';
import cardImage2 from '../../images/3.jpg';
import cardImage3 from '../../images/2.jpg';
import '../../styles/home/HomeBanner.css';

const HomeBanner = () => {
  return (
    <Container fluid className="home-banner-container">
      <Row>
        <Col lg={3} md={12} sm={12}>
          <Card className="banner-card" style={{ backgroundImage: `url(${cardImage1})` }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title className="banner-title">Kids Science</Card.Title>
              <Card.Text className="banner-text">
                Help your child View the world of science with fun and interactive learning courses.
              </Card.Text>
              <Link to="/kids-course">
                <Button variant="success" className="banner-btn">View Courses</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} sm={12}>
          <Card className="banner-card" style={{ backgroundImage: `url(${cardImage2})` }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title className="banner-title">Professional</Card.Title>
              <Card.Text className="banner-text">
                Enhance your professional skills with advanced courses tailored for career growth.
              </Card.Text>
              <Link to="/professional-course">
                <Button variant="success" className="banner-btn">View Courses</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={12} sm={12}>
          <Card className="banner-card" style={{ backgroundImage: `url(${cardImage3})` }}>
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title className="banner-title">Communication</Card.Title>
              <Card.Text className="banner-text">
                Master the art of communication with courses designed to improve your speaking and writing skills.
              </Card.Text>
              <Link to="/communication-course">
                <Button variant="success" className="banner-btn">View Courses</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBanner;

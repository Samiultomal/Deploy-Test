import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../images/8.jfif'; 
import image2 from '../../images/10.jfif';  
import image3 from '../../images/9.jfif';  
import image4 from '../../images/13.jfif'; 
import '../../styles/kids_course/KidsCourseSection2.css'; 

function KidsCourseSection2() {
  return (
    <section className="kids-course-section2">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="kids-card" style={{ backgroundImage: `url(${image1})` }}>
                <div className="kids-card-number">1</div>
                <Card.Body>
                  <div className="kids-card-text">
                    <h4>Abcus Math</h4>
                    <p className="kids-card-description">Encourage creativity with exciting art projects designed for young minds.</p>
                    <div className="kids-card-details">
                      <span className="kids-card-price">Tk 7000</span>
                      <span className="kids-card-duration">12 Weeks</span>
                      <span className="kids-card-total">Total Class: 12</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="kids-card" style={{ backgroundImage: `url(${image2})` }}>
                <div className="kids-card-number">2</div>
                <Card.Body>
                  <div className="kids-card-text">
                    <h4>Spoken English</h4>
                    <p className="kids-card-description">Dive into a world of imagination with interactive storytelling sessions for kids.</p>
                    <div className="kids-card-details">
                      <span className="kids-card-price">Tk 9000</span>
                      <span className="kids-card-duration">12 Weeks</span>
                      <span className="kids-card-total">Total Class: 36</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="kids-card" style={{ backgroundImage: `url(${image3})` }}>
                <div className="kids-card-number">3</div>
                <Card.Body>
                  <div className="kids-card-text">
                    <h4>Kids Science</h4>
                    <p className="kids-card-description">Simple science experiments and activities that spark and learning.</p>
                    <div className="kids-card-details">
                      <span className="kids-card-price">Tk 5000</span>
                      <span className="kids-card-duration">8 Weeks</span>
                      <span className="kids-card-total">Total Class: 24</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="kids-card" style={{ backgroundImage: `url(${image4})` }}>
                <div className="kids-card-number">4</div>
                <Card.Body>
                  <div className="kids-card-text">
                    <h4>Digital Art</h4>
                    <p className="kids-card-description">Introduce young minds to the basics of coding and programming with fun and interactive lessons.</p>
                    <div className="kids-card-details">
                      <span className="kids-card-price">Tk 18000</span>
                      <span className="kids-card-duration">12 Weeks</span>
                      <span className="kids-card-total">Total Class: 36</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default KidsCourseSection2;

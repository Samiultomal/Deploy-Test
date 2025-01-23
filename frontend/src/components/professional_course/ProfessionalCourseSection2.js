import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../images/14.jpg'; 
import image2 from '../../images/15.jpg';   
import image3 from '../../images/16.jpg';   
import image4 from '../../images/17.jpg'; 
import image5 from '../../images/18.jpg';  
import '../../styles/professional_course/ProfessionalCourseSection2.css'; 

function ProfessionalCourseSection2() {
  return (
    <section className="professional-course-section2">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="professional-card" style={{ backgroundImage: `url(${image1})` }}>
                <div className="professional-card-number">1</div>
                <Card.Body>
                  <div className="professional-card-text">
                    <h4>Digital Designing</h4>
                    <p className="professional-card-description">
                      Learn how to design visually stunning digital content for web and social media platforms, leveraging modern tools and techniques to create engaging user experiences.
                    </p>
                    <div className="professional-card-details">
                      <span className="professional-card-price">Tk 6800</span>
                      <span className="professional-card-duration">12 Weeks</span>
                      <span className="professional-card-total">Total Class: 24</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="professional-card" style={{ backgroundImage: `url(${image2})` }}>
                <div className="professional-card-number">2</div>
                <Card.Body>
                  <div className="professional-card-text">
                    <h4>Web Design</h4>
                    <p className="professional-card-description">
                      Master the art of crafting responsive and aesthetically pleasing websites using industry-standard design tools, ensuring a seamless experience across all devices.
                    </p>
                    <div className="professional-card-details">
                      <span className="professional-card-price">Tk 9000</span>
                      <span className="professional-card-duration">8 Weeks</span>
                      <span className="professional-card-total">Total Class: 24</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="professional-card" style={{ backgroundImage: `url(${image3})` }}>
                <div className="professional-card-number">3</div>
                <Card.Body>
                  <div className="professional-card-text">
                    <h4>Backend Development</h4>
                    <p className="professional-card-description">
                      Dive into the world of backend programming to create dynamic, data-driven websites and applications, focusing on server-side technologies and databases.
                    </p>
                    <div className="professional-card-details">
                      <span className="professional-card-price">Tk 50000</span>
                      <span className="professional-card-duration">24 Weeks</span>
                      <span className="professional-card-total">Total Class: 52</span>
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
              <Card className="professional-card" style={{ backgroundImage: `url(${image4})` }}>
                <div className="professional-card-number">4</div>
                <Card.Body>
                  <div className="professional-card-text">
                    <h4>Digital Marketing</h4>
                    <p className="professional-card-description">
                      Gain expertise in digital marketing strategies, focusing on analyzing data to uncover insights and improve business growth through online channels.
                    </p>
                    <div className="professional-card-details">
                      <span className="professional-card-price">Tk 18000</span>
                      <span className="professional-card-duration">12 Weeks</span>
                      <span className="professional-card-total">Total Class: 36</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          {/* New Cyber Security course */}
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="professional-card" style={{ backgroundImage: `url(${image5})` }}>
                <div className="professional-card-number">5</div>
                <Card.Body>
                  <div className="professional-card-text">
                    <h4>Cyber Security</h4>
                    <p className="professional-card-description">
                      Learn the fundamentals of cyber security to protect organizations and individuals from cyber threats and data breaches, ensuring a secure online environment.
                    </p>
                    <div className="professional-card-details">
                      <span className="professional-card-price">Tk 35000</span>
                      <span className="professional-card-duration">24 Weeks</span>
                      <span className="professional-card-total">Total Class: 72</span>
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

export default ProfessionalCourseSection2;

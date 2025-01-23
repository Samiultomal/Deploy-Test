import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../images/19.jpg'; 
import image2 from '../../images/20.jpg';  
import image3 from '../../images/21.jpg';   
import '../../styles/communication_course/CommunicationCourseSection2.css'; 

function CommunicationCourseSection2() {
  return (
    <section className="communication-course-section2">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="communication-card" style={{ backgroundImage: `url(${image1})` }}>
                <div className="communication-card-number">1</div>
                <Card.Body>
                  <div className="communication-card-text">
                    <h4>IELTS</h4>
                    <p className="communication-card-description">Enhance your speaking skills with techniques for clear and confident communication.</p>
                    <div className="communication-card-details">
                      <span className="communication-card-price">Tk 25000</span>
                      <span className="communication-card-duration">24 Weeks</span>
                      <span className="communication-card-total">Total Class: 96</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="communication-card" style={{ backgroundImage: `url(${image2})` }}>
                <div className="communication-card-number">2</div>
                <Card.Body>
                  <div className="communication-card-text">
                    <h4>Business Communication</h4>
                    <p className="communication-card-description">Master professional communication skills for success in the corporate world.</p>
                    <div className="communication-card-details">
                      <span className="communication-card-price">Tk 15000</span>
                      <span className="communication-card-duration">8 Weeks</span>
                      <span className="communication-card-total">Total Class:24</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/survey">
              <Card className="communication-card" style={{ backgroundImage: `url(${image3})` }}>
                <div className="communication-card-number">3</div>
                <Card.Body>
                  <div className="communication-card-text">
                    <h4>Soft Skills Development</h4>
                    <p className="communication-card-description">Build effective communication strategies for strong personal relationships.</p>
                    <div className="communication-card-details">
                      <span className="communication-card-price">Tk 3000</span>
                      <span className="communication-card-duration">6 Weeks</span>
                      <span className="communication-card-total">Total Class: 18</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* <Row>
          <Col lg={4} md={12} sm={12} className="mb-4">
            <Link to="/communication-skills">
              <Card className="communication-card" style={{ backgroundImage: `url(${image4})` }}>
                <div className="communication-card-number">4</div>
                <Card.Body>
                  <div className="communication-card-text">
                    <h4>Communication Skills</h4>
                    <p className="communication-card-description">Develop skills to communicate effectively in any situation or environment.</p>
                    <div className="communication-card-details">
                      <span className="communication-card-price">Tk130</span>
                      <span className="communication-card-duration">12 Weeks</span>
                      <span className="communication-card-total">Total Class: 24</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}

export default CommunicationCourseSection2;

// ProfessionalCourseSection1.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/professional_course/ProfessionalCourseSection1.css';

function ProfessionalCourseSection1() {
  return (
    <section className="professional-course-section1">
      <Container>
        <Row>
          <Col>
            <div className="professional-course-section1-text-wrapper">
              <h1 className="professional-course-section1-heading">Advance Your Career</h1>
              <p className="professional-course-section1-text">
                Take the next step in your professional journey with our specialized courses 
                designed for skill enhancement and career growth. Empower yourself with 
                knowledge and tools to thrive in the modern workplace.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProfessionalCourseSection1;

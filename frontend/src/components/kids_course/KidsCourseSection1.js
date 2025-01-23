import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/kids_course/KidsCourseSection1.css';

function KidsCourseSection1() {
  return (
    <section className="kids-course-section1">
      <Container>
        <Row>
          <Col>
            <div className="kids-course-section1-text-wrapper">
              <h1 className="kids-course-section1-heading">Learning Made Fun</h1>
              <p className="kids-course-section1-text">
                Explore a world of creativity and discovery with our engaging courses 
                tailored for kids. Unlock potential, spark curiosity, and foster 
                lifelong learning in a playful and interactive way.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default KidsCourseSection1;

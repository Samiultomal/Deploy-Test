import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/communication_course/CommunicationCourseSection1.css';

function CommunicationCourseSection1() {
  return (
    <section className="communication-course-section1">
      <Container>
        <Row>
          <Col>
            <div className="communication-course-section1-text-wrapper">
              <h1 className="communication-course-section1-heading">Effective Communication for All</h1>
              <p className="communication-course-section1-text">
                Discover the power of communication with our dynamic courses designed to enhance speaking, listening, and interaction skills. 
                Perfect for learners of all ages, this course fosters clear expression and confident conversations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CommunicationCourseSection1;

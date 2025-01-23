import React from 'react';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';
import CommunicationCourseSection1 from '../../components/communication_course/CommunicationCourseSection1';
import CommunicationCourseSection2 from '../../components/communication_course/CommunicationCourseSection2';

const CommunicationCourse = () => {
  return (
    <div>
      <Header />
      <CommunicationCourseSection1 />
      <CommunicationCourseSection2 />
      <Footer />
    </div>
  );
};

export default CommunicationCourse;

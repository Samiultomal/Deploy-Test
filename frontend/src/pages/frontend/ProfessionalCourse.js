import React from 'react';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';
import ProfessionalCourseSection1 from '../../components/professional_course/ProfessionalCourseSection1';
import ProfessionalCourseSection2 from '../../components/professional_course/ProfessionalCourseSection2';

const ProfessionalCourse = () => {
  return (
    <div>
      <Header />
      <ProfessionalCourseSection1 />
      <ProfessionalCourseSection2 />
      <Footer />
    </div>
  );
};

export default ProfessionalCourse;

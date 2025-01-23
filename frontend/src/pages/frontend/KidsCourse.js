import React from 'react';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';
import KidsCourseSection1 from '../../components/kids_course/KidsCourseSection1';
import KidsCourseSection2 from '../../components/kids_course/KidsCourseSection2';

const KidsCourse = () => {
  return (
    <div>
      <Header />
      <KidsCourseSection1 />
      <KidsCourseSection2 />
      <Footer />
    </div>
  );
};

export default KidsCourse;

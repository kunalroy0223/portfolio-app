import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="Experience">
      <div className="timeline">
<h1 style={{ textAlign: 'center', fontSize: '4rem' }}>Experience</h1>
  <ul className='experience-list'>
    <li style={{ "--accent-color": "#41516C" }}>
      <div className="date">Cognifyz Technologies</div>
      <div className="title">Full Stack Development Intern</div>
      <div className="descr">
        Contributed to full-stack development projects, focusing on both front-end and back-end systems to enhance user experience and optimize functionality.
      </div>
    </li>
    <li style={{ "--accent-color": "#FBCA3E" }}>
      <div className="date">Institution's Innovation Council (IIC)</div>
      <div className="title">Innovation Ambassador</div>
      <div className="descr">
        Collaborating to promote innovation within the academic community, facilitating workshops, and fostering a culture of creative problem-solving.
      </div>
    </li>
    <li style={{ "--accent-color": "#E24A68" }}>
      <div className="date">Inhub Entrepreneurship Cell</div>
      <div className="title">General Secretary</div>
      <div className="descr">
        Leading the coordination and management of entrepreneurial events and initiatives, driving strategic goals for the development of the entrepreneurial ecosystem within the organization.
      </div>
    </li>
    <li style={{ "--accent-color": "#1B5F8C" }}>
      <div className="date">Inskills</div>
      <div className="title">Student Facilitator</div>
      <div className="descr">
        Assisting in organizing skill development sessions, guiding peers through various courses, and helping to implement training programs aimed at personal and professional growth.
      </div>
    </li>
  </ul>
</div>
    </section>
  );
};

export default Experience;

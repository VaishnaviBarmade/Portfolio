import React from "react";
import { Tilt } from 'react-tilt';

const Education = () => {

  const education = [
    {
      title: "B.Tech in Computer Science",
      institute: "MBES College of Engineering, DBATU",
      duration: "2022 – 2025",
      details: "Score: 76.7%"
    },
    {
      title: "Diploma in Information Technology",
      institute: "P. L. Government Polytechnic, MSBTE",
      duration: "2019 – 2022",
      details: "Score: 82.25%"
    }
  ];

  const certifications = [
    {
      title: "PG-DAC",
      institute: "CDAC Hyderabad",
      duration: "Aug 2025 – Feb 2026",
      details: "Post Graduate Diploma in Advanced Computing"
    }
  ];

  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1.02,
    speed: 800,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <section id="education" className="education section-padding">
      <div className="container">

        <h2>Education</h2>
        <div className="project-grid" style={{ marginBottom: "60px" }}>
          {education.map((edu, index) => (
            <Tilt options={defaultOptions} key={index}>
              <div className="project-card 3d-card">
                <h3>{edu.title}</h3>
                <p style={{ color: "var(--accent-primary)", fontWeight: "500", marginBottom: "10px", transform: "translateZ(25px)" }}>
                  {edu.institute}
                </p>
                <p style={{ transform: "translateZ(15px)" }}>{edu.duration}</p>
                <p style={{ transform: "translateZ(15px)", marginTop: "10px", color: "var(--text-primary)" }}>{edu.details}</p>
              </div>
            </Tilt>
          ))}
        </div>

        <h2>Certifications</h2>
        <div className="project-grid">
          {certifications.map((cert, index) => (
            <Tilt options={defaultOptions} key={index}>
              <div className="project-card 3d-card">
                <h3>{cert.title}</h3>
                <p style={{ color: "var(--accent-primary)", fontWeight: "500", marginBottom: "10px", transform: "translateZ(25px)" }}>
                  {cert.institute}
                </p>
                <p style={{ transform: "translateZ(15px)" }}>{cert.duration}</p>
                <p style={{ transform: "translateZ(15px)", marginTop: "10px", color: "var(--text-primary)" }}>{cert.details}</p>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );

};

export default Education;
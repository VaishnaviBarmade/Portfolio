import { Tilt } from 'react-tilt';

function Skills() {

    const skills = [
        "Java",
        "C#",
        "React",
        "Spring Boot",
        ".NET",
        "MySQL",
        "MongoDB",
        "Git"
    ]

    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (

        <section id="skills" className="skills section-padding">

            <div className="container">

                <h2>Technical Skills</h2>

                <div className="skills-grid">

                    {skills.map((skill, index) => (

                        <Tilt options={defaultOptions} key={index}>
                            <div className="skill-card 3d-card" style={{ transformStyle: "preserve-3d" }}>
                                <span style={{ transform: "translateZ(30px)", display: "inline-block" }}>{skill}</span>
                            </div>
                        </Tilt>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Skills
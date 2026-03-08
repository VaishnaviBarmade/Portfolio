import { Tilt } from 'react-tilt';

function Projects() {

    const projects = [

        {
            title: "StaySpot",
            desc: "House vacancy management system using React and Spring Boot."
        },

        {
            title: "Facial Expression Recognition",
            desc: "Emotion detection using OpenCV and CNN."
        },

        {
            title: "Tourism Management System",
            desc: "Tour booking system using PHP and MySQL."
        }

    ]

    const defaultOptions = {
        reverse: false,
        max: 25,
        perspective: 1000,
        scale: 1.05,
        speed: 800,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (

        <section id="projects" className="projects section-padding">

            <div className="container">

                <h2>Projects</h2>

                <div className="project-grid">

                    {projects.map((p, i) => (
                        <Tilt options={defaultOptions} key={i}>
                            <div className="project-card 3d-card">

                                <h3>{p.title}</h3>

                                <p>{p.desc}</p>

                            </div>
                        </Tilt>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Projects
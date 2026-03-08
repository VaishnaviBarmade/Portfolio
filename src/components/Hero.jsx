import { Tilt } from 'react-tilt';

function Hero() {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (

        <section id="home" className="hero section-padding">

            <div className="container hero-container">

                <div className="hero-content">

                    <h1>
                        Hi, I'm <span>Vaishnavi Barmade</span>
                    </h1>

                    <h2>
                        Full Stack Developer
                    </h2>

                    <p>
                        I build responsive and scalable web applications using modern front-end and back-end technologies, with a focus on Java-based development.
                    </p>

                    <div className="hero-buttons">
                        <a href="/Vaishnavi_Barmade_Resume.pdf" download="Vaishnavi_Barmade_Resume.pdf" className="btn">
                            Download Resume
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            View My Work
                        </a>
                    </div>

                </div>

                <div className="hero-image">
                    <Tilt options={defaultOptions}>
                        <div className="img-wrapper 3d-card">
                            <img src="/vb1.jpg" alt="Vaishnavi Barmade" />
                        </div>
                    </Tilt>
                </div>

            </div>

        </section>

    )

}

export default Hero
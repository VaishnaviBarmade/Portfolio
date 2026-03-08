// function Contact() {
//   return (
//     <section className="py-20 text-center">

//       <h2 className="text-4xl font-bold mb-6">
//         Contact
//       </h2>

//       <p>Email: vaishnavibarmade15@gmail.com</p>
//       <p>Location: Latur, Maharashtra</p>

//       <div className="mt-6">
//         <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
//           Contact Me
//         </button>
//       </div>

//     </section>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import { Tilt } from 'react-tilt';

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // Replace this string with your actual access key from Web3Forms
    formData.append("access_key", "3e0bbcde-7613-469b-ac2d-8fe4c6823613");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Configuration needed! Please enter a valid Web3Forms access key in Contact.jsx");
      }
    } catch (error) {
      alert("Error sending message. Please try again later.");
    }

    setIsSubmitting(false);
  };

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
    <section id="contact" className="section-padding">
      <div className="container">

        <h2>Contact Me</h2>

        <div className="contact-layout">

          <div className="contact-info">
            <p className="contact-desc">
              Feel free to contact me for job opportunities, collaborations, or project discussions. I would be happy to connect.
            </p>

            <div className="details-card">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">Vaishnavi Barmade</span>
              </div>
              <div className="detail-item">
                <span className="label">Role:</span>
                <span className="value">Full Stack Java Developer</span>
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                <a href="mailto:vaishnavibarmade15@gmail.com" className="value link">vaishnavibarmade15@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="label">Location:</span>
                <span className="value">Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="social-links">
              <Tilt options={defaultOptions}>
                <a href="https://www.linkedin.com/in/vaishnavi-barmade/" target="_blank" rel="noopener noreferrer" className="social-icon 3d-card" style={{ transformStyle: "preserve-3d" }}>
                  <svg style={{ transform: "translateZ(20px)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Tilt>

              <Tilt options={defaultOptions}>
                <a href="https://github.com/VaishnaviBarmade" target="_blank" rel="noopener noreferrer" className="social-icon 3d-card" style={{ transformStyle: "preserve-3d" }}>
                  <svg style={{ transform: "translateZ(20px)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </Tilt>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              placeholder="Subject"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={isSubmitting} className="btn w-full mt-4" style={{ cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
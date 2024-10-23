import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          At Innomatics Research Labs, we drive innovation through technology, data science, and research excellence.
        </p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We believe in the power of data, research, and technology to transform industries. Our mission is to push the boundaries of what’s possible.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="team1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Lead Data Scientist</p>
          </div>
          <div className="team-member">
            <img src="team2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>AI Researcher</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="history">
        <h2>Company History</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2010</h3>
            <p>Innomatics Research Labs was founded.</p>
          </div>
          <div className="timeline-item">
            <h3>2018</h3>
            <p>Expanded into AI research.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

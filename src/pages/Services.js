import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Consulting = () => (
  <div>
    <h3>Consulting Service Details</h3>
    <p>We offer data science consulting services to help businesses leverage their data.</p>
  </div>
);

const AI = () => (
  <div>
    <h3>AI & Machine Learning Solutions</h3>
    <p>Our AI solutions help automate processes and drive efficiency in your operations.</p>
  </div>
);

const Development = () => (
  <div>
    <h3>Custom Software Development</h3>
    <p>We provide tailored software development services to meet your unique needs.</p>
  </div>
);

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>
          <Link to="consulting">Data Science Consulting</Link>
        </li>
        <li>
          <Link to="ai">AI & Machine Learning Solutions</Link>
        </li>
        <li>
          <Link to="development">Custom Software Development</Link>
        </li>
      </ul>
      <img src=""></img>

      <Routes>
        <Route path="consulting" element={<Consulting />} />
        <Route path="ai" element={<AI />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
};

export default Services;

import React from 'react';
import './about.css'; // Ensure this CSS file is created and included

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Welcome to Urban Oasis Real Estate</h1>
          <p>Welcome to Urban Oasis Real Estate, where our mission is to transform your real estate dreams into reality. Since our founding in 2010, we have committed ourselves to providing unparalleled service, whether you're looking to buy, sell, or rent a property. Our team of seasoned professionals combines deep local market knowledge with a dedication to excellence, ensuring a seamless and stress-free experience for our clients. At Urban Oasis Real Estate, we offer a comprehensive range of services, including residential sales, commercial properties, property management, and personalized real estate consulting. Integrity, innovation, and client satisfaction are at the core of everything we do. Discover the difference with Urban Oasis Real Estate – your trusted partner in every step of your real estate journey..</p>
        </div>
        <div className="about-hero-image">
          <img src="https://wallup.net/wp-content/uploads/2017/11/17/233110-New_York_City-USA-city-cityscape-reflection-skyscraper-skyline.jpg" alt="Urban Skyline" />
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>At Urban Oasis Real Estate, our mission is to provide unparalleled service and exceptional real estate experiences. We strive to connect our clients with their dream properties, ensuring a smooth and enjoyable journey from start to finish.</p>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>We envision a world where urban living is accessible, luxurious, and sustainable. Our goal is to redefine real estate by integrating cutting-edge technology, innovative design, and a commitment to environmental stewardship.</p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://consultus.org/cus/wp-content/uploads/2015/06/Avatare-m-1.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src="https://consultus.org/cus/wp-content/uploads/2015/06/Avatare-m-1.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Sales</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values">
          <div className="value">
            <h3>Integrity</h3>
            <p>We conduct our business with the highest level of integrity and transparency.</p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>We embrace innovation to provide the best solutions for our clients.</p>
          </div>
          <div className="value">
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from client interactions to property management.</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Ready to find your urban oasis? Contact us today to start your real estate journey with Urban Oasis Real Estate.</p>
        <p>Email: info@urbanoasisrealestate.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default AboutPage;

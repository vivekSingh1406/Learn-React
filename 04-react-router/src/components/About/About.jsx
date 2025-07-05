import React from 'react';
import './About.css'; // Link to the CSS file

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="about-text">
            <h2>React development is carried out by passionate developers</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

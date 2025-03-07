import React from 'react';
import './aboutdev.css'; // Ensure this file exists in the correct path

const AboutDev = () => {
  return (
    <div className="aboutdev">
      <h1>About Me</h1>
      <div className="aboutdev-lr">
        <div className="aboutdev-r">
          <h2>A dedicated Front-end Developer based in Karachi, Pakistan. 📍</h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in{' '}
            <span className="tags">HTML5</span> , <span className="tags">CSS3</span>, JavaScript, ReactJS along with
            NextJS , Tailwind, and SCSS/SASS. I excel in designing and maintaining responsive websites that offer a
            smooth user experience. My expertise lies in craftingdynamic, engaging interfaces through writing clean and
            optimized code and utilizing cutting-edge development tools and techniques. I am also a team playerwho
            thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
        </div>
        <div className="aboutme-picture">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONvusf0zDT91WJPM7D6rR8ZV0S5gVwCb0XQ&s" />
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
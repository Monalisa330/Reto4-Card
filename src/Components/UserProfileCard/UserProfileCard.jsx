import React from 'react';
import './UserProfileCard.css';
import profile_icon from '../Assets/mee.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="Profile" /> 
        <div className="profile-title">Laura Álvarez</div>
        <h3 className="profile-occupation">Full-stack Developer</h3>

        <div className="about-me-section">
          <h4>About Me</h4>
          <p>I am a Full-stack Developer passionate about creating effective web solutions. 
            I focus on both frontend development, 
            using technologies like React, and backend development, with experience in Node.js.
          </p>
        </div>

        <div className="interests-section">
          <h4>Interests</h4>
          <p>
            My interests revolve around cutting-edge technologies,
            contributions to open-source projects, and continually honing my development skills.
          </p>
        </div>
      </div>
      <div className="profile-button"><a href="mailto:laurameliza26@gmail.com">Contact me</a></div>

      
      <div className="footer">
        <a href="https://twitter.com/MellPastel" target="_blank" rel="noopener noreferrer">
          <FaTwitter color='#ffffff' />
        </a>
        <a href="https://www.facebook.com/laurameliza.alvaresusuga/" target="_blank" rel="noopener noreferrer">
          <FaFacebook color='#ffffff' />
        </a>
        <a href="https://www.instagram.com/lau.melaru/?hl=es" target="_blank" rel="noopener noreferrer">
          <FaInstagram color='#ffffff' />
        </a>
        <a href="https://github.com/Monalisa330" target="_blank" rel="noopener noreferrer">
          <FaGithub color='#ffffff' />
        </a>
        <a href="https://www.linkedin.com/in/devlaurajavpyt/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color='#ffffff' />
        </a>
        
        <p>&copy; 2024 My Digital Card </p>
      </div>
    </div>
  );
}

export default UserProfileCard;

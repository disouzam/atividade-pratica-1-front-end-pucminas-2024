import React from 'react';
import './CustomHeader.css';

const CustomHeader = () => {
  return (
    <div className="CustomHeader">
      <ul className='HorizontalMenuItems'>
        <li>
          Blog
        </li>
        <li>
          Sobre
        </li>
        <li>
          Descrição
        </li>
      </ul>
      <div className='Container'>
        <div className='PhotoArea'>
          <img
            className='AvatarImage'
            src={window.location.origin + '/Dickson.jpg'}
            width={134.1}
            height={168.5}
          />
        </div>
        <div className='BioArea'>
          <h1>Dickson Souza</h1>
          <p className='Paragraph'>I am a metallurgical engineer! Coding and software development,
            however, is on my life
            for a long time!</p>
          <p className='Paragraph'>
            It all started as curiosity and it is gradually becoming something
            more serious along the years, including a specialization course at PUC Minas on
            Software Engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;

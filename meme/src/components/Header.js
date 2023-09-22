import React from 'react';
import HeaderImage from './../images/img.png';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
        <img className='header--image' alt='header of meme generator' src={HeaderImage} />
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>JavaScript-Project</h4>
    </header>
  )
}

import React from 'react';
import './meme.css';
import memesData from '../memesData';

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg');
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url );
    }
    return (
        <div className='main'>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className='meme--image' alt='' src={memeImage} />
        </div>
  )
}

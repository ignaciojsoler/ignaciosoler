import React from 'react';
import character from '../assets/character.png';
import darkSquare from '../assets/dark-square.png';
import orangeSquare from '../assets/orange-square.png';
import emoji from '../assets/emoji.png';

const Character = () => {
    return (
        <div className='w-full flex flex-col items-center  mb-12' data-aos='fade-up'>
            <div className=" grid grid-cols-10">
                <img src={darkSquare} className="h-6 col-start-3 col-span-4 md:h-12" id='black-square'/>
                <img src={orangeSquare} className="h-7 col-span-2 md:h-14" id='orange-square'/>
                <img src={emoji} className="h-6 md:h-12" id='emoji'/>
            </div>
            <div className="">
                <img src={character} className="h-56 md:h-96" id='character'/>
            </div>
        </div>
    );
};

export default Character;
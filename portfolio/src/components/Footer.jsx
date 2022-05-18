import React from 'react';
import {BsLinkedin, BsGithub, BsEnvelopeFill} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='w-full text-3xl text-gray-100 flex justify-center px-6 space-x-5' data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
            <a href="https://www.linkedin.com/in/ignaciojsoler/" className=' hover:text-gray-200'><BsLinkedin className=''/></a>
            <a href="https://github.com/ignaciojsoler" className=' hover:text-gray-200'><BsGithub className=''/></a>
            <a href="mailto:ignaciojsoler@gmail.com" className='hover:text-gray-200'><BsEnvelopeFill className=''/></a>
        </div>
    );
};

export default Footer;
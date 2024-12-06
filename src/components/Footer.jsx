import React from 'react';
import EmailIcon from '../assets/icons/Email.png';
import FacebookIcon from '../assets/icons/Facebook.png';
import GooglePlusIcon from '../assets/icons/GooglePlus.png';
import TwitterIcon from '../assets/icons/Twitter.png';

const Footer = () => {
  return (
    <div className="bg-[#101010] py-16 px-8 flex justify-between">
      <div className="flex flex-col w-1/2">
        <h1 className="font-bold text-4xl text-white">dsgnr.</h1>
        <p className="text-white mt-4 text-lg">
          Dsgnr. is an award winning creative and design agency based in New York, USA.
        </p>
        <button className="mt-6 py-2 px-8 border-2 border-[#FEC00A] text-white flex items-center" style={{ width: '493px', height: '80px' }}>
          <img src={EmailIcon} alt="Email Icon" className="mr-3 w-6 h-6" />
          info@dsgnr.com
        </button>
        <div className="mt-8">
          <a href="#" className="text-[#FEC00A] mr-6">Privacy Policy</a>
          <a href="#" className="text-[#FEC00A]">Terms</a>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        {/* Kolom Sosial Media di bawah */}
        <div className="flex justify-between mt-8">
          <div className="w-1/3">
            <h3 className="font-bold text-white">What We Do</h3>
            <ul className="text-white mt-4">
              <li>Intro</li>
              <li>Home</li>
              <li>Work</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-white">Who We Are</h3>
            <ul className="text-white mt-4">
              <li>About</li>
              <li>News</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-1/3 mt-8">
            <div className="flex space-x-6 justify-center">
              <img src={TwitterIcon} alt="Twitter Icon" className="w-auto h-auto" />
              <img src={FacebookIcon} alt="Facebook Icon" className="w-auto h-auto" />
              <img src={GooglePlusIcon} alt="GooglePlus Icon" className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from 'next/image';
import React from 'react';
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'


const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className="footer mt-2  mx-auto justify-items-start lg:justify-items-center  ">
        {/** logo section */}
        <div className="logo  ">
            <Image src={'/Logo.webp'} width={180} height={30} alt='logo' />
            <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='icon-container'>
            <div><GrTwitter size={20} /></div>
            <div><GrFacebookOption size={20} /></div>
            <div><GrLinkedinOption size={20} /></div>
          </div>
        </div>
        {/** links */}
        <div className='footer-links  '>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
      {/** footer end  */}
      <div className='copyright'>
        <p>Copyright © 2023 Dine Market</p>
        <p>Design by. <span>Weird Design Studio</span></p>
        <p>Code by. <span>aqeel-spec on github</span></p>
      </div>
    </footer>
  )
}

export default Footer
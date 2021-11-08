import React from 'react';
import './footer.css';
import { Button } from '../pages/button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdLightbulb } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-row'>
        <div className='footer-GA-logo'>
          <img alt='c2' src='./Images/Copy of Color logo.png'/>
        </div>
      <div className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
        THE PERFECT SOLUTION FOR YOU.
        </h1>
        <p className='footer-subscription-text'>
        Let us know what you want and we’ll do our best to help. 
        </p>
        <div className='input-areas'>
            <Button buttonStyle='btn--outline' onClick='/contact-form'>Contact Us</Button>
        </div>
      </div>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <div className='footer-link-info'>
          <h4>address</h4>
          <p>Level 1/105 Crown St, Darlinghurst NSW 2010</p>
          <h4>Email</h4>
          <p>sales@geraldandrose.com</p>
          </div>
          </div>
        </div>
      </div>
      <div className='footer-link-document'>
          <Link to='/'>Privacy</Link>
          <Link to='/'>Terms of Service</Link>
          <Link to='/'>Standard Terms of Engagement</Link>
          </div>
      </div>
      <div className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdLightbulb className='footer-icon' />
              Gerald and Rose
            </Link>
          </div>
          <small className='website-rights'>© Gerald and Rose 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdLightbulb } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#EDD067' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdLightbulb className='navbar-icon' />
              Gerald And Rose
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Business Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/web-design'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Web Development
                </Link>
              </li>
               <li className='nav-item'>
                <Link
                  to='/post'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  What's New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/contact-us' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Book a Consultation
                    </Button>
                  </Link>
                ) : (
                  <Link to='/contact-us' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Book a Consultation
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
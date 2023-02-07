import { Link } from 'react-router-dom'
import './header.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

const Header = ({ isVisible }) => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className={`header ${isVisible ? 'is_sticky' : ''}`}>
        <div className="header-logo">
          <Link to='/'>
            <img src="./images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="nvbar-wrapper">
          <ul className="nvbar">
            <li className='nvbar-item'>
              <Link to='/' className='nvbar-link'>
                ASOSIY
              </Link>
            </li>
            <li className='nvbar-item nvbar-dropdown'>
              <Link to='/' className='nvbar-link'>
                KOMPANIYA HAQIDA
              </Link>
              <ul className="dropdown-list">
                <li>
                  <Link to='/'>Mahsulotlar</Link>
                </li>
                <li>
                  <Link to='/'>Texnologiyalar</Link>
                </li>
                <li>
                  <Link to='/'>Sifat</Link>
                </li>
                <li>
                  <Link to='/'>Bizning mijozlarimiz</Link>
                </li>
                <li>
                  <Link to='/'>Ta'minot geografiyasi</Link>
                </li>
                <li>
                  <Link to='/'>Karyera</Link>
                </li>
              </ul>
            </li>
            <li className='nvbar-item'>
              <Link to='/' className='nvbar-link'>
                YANGILIKLAR
              </Link>
            </li>
            <li className='nvbar-item'>
              <Link to='/' className='nvbar-link'>
                ALOQA
              </Link>
            </li>
          </ul>
          <div className='lang-box'>
            <Link to='/' className='lang-link nvbar-dropdown'>
              <img className='per-lang' src="./images/flag-uzb.jpg" alt="lang-img" />
              uzb
              <ul className="dropdown-list dropdown-lang">
                <li>
                  <Link to='/'>
                    <img className='per-lang' src="./images/flag-rus.png" alt="lang-img" />
                    Ru
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <img className='per-lang' src="./images/flag-eng.jpg" alt="lang-img" />
                    eng
                  </Link>
                </li>
              </ul>
            </Link>

            <div className='menu-bar'>
              <button className='header-menu-btn' onClick={()=> setIsMobile(true)}>
                <span className='header-menu-btn-inner'></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='phone-menu' style={{transform: isMobile && `translateX(0)`}}>
        <ul className='phone-menu-list'>
          <li>
            <Link className='phone-menu-link' to='/'>Asosiy</Link>
          </li>
          <li>
            <a className='phone-menu-link' href='/'>Kompaniya haqida</a>
          </li>
          <li>
            <Link className='phone-menu-link' to='/'>Yangiliklar</Link>
          </li>
          <li>
            <a className='phone-menu-link' href='/'>Aloqa</a>
          </li>
        </ul>
        <button 
          className='menu-close-btn'
          onClick={()=> setIsMobile(false)}  
        >
          <AiOutlineClose style={{width: '30px', height: '30px'}} />
        </button>
      </div>
    </>
  )
}

export default Header
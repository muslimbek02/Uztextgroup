import { Link } from 'react-router-dom'
import './header.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Header = ({ isVisible }) => {

  const [isMobile, setIsMobile] = useState(false);

  let changeLanguageCode = (code) => {
    i18n.ChangeLanguageCode(code);
    window.location.reload();
  }
  document.body.style.overflow = isMobile ? 'hidden' : '';
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
                {i18n.Get('header.menu.first')}
              </Link>
            </li>
            <li className='nvbar-item nvbar-dropdown'>
              <Link to='/about' className='nvbar-link'>
                {i18n.Get("header.menu.second.company")}
              </Link>
              <ul className="dropdown-list">
                <li>
                  <Link to='/'>{i18n.Get("header.menu.second.first")}</Link>
                </li>
                <li>
                  <Link to='/'>{i18n.Get("header.menu.second.second")}</Link>
                </li>
                <li>
                  <Link to='/quality'>{i18n.Get("header.menu.second.third")}</Link>
                </li>
                <li>
                  <Link to='/'>{i18n.Get("header.menu.second.fourth")}</Link>
                </li>
                <li>
                  <Link to='/'>{i18n.Get("header.menu.second.fiveth")}</Link>
                </li>
                <li>
                  <Link to='/jobs'>{i18n.Get("header.menu.second.sixth")}</Link>
                </li>
              </ul>
            </li>
            <li className='nvbar-item'>
              <Link to='/news' className='nvbar-link'>
                {i18n.Get("header.menu.third")}
              </Link>
            </li>
            <li className='nvbar-item'>
              <Link to='/contact' className='nvbar-link'>
                {i18n.Get("header.menu.fourth")}
              </Link>
            </li>
          </ul>
          <div className='lang-box'>
            <Link to='/' className='lang-link nvbar-dropdown'>
              <img className='per-lang' src={`./images/flag-${i18n.activeLanguageCode}.jpg`} alt={`lang-${i18n.activeLanguageCode}`} />
              {i18n.activeLanguageCode}
              <ul className="dropdown-list dropdown-lang">
                {i18n.langCodes.filter(x => x !== i18n.activeLanguageCode).map((x, i) => {
                  return (<li key={i}>
                    <Link to='/' onClick={changeLanguageCode.bind(this, x)}>
                      <img className='per-lang' src={`./images/flag-${x}.jpg`} alt={`lang-${x}`} />
                      {x}
                    </Link>
                  </li>)
                })}
              </ul>
            </Link>

            <div className='menu-bar'>
              <button className='header-menu-btn' onClick={() => setIsMobile(true)}>
                <span className='header-menu-btn-inner'></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='phone-menu' style={{ transform: isMobile && `translateX(0)` }}>
        <ul className='phone-menu-list'>
          <li>
            <Link className='phone-menu-link' to='/' onClick={() => setIsMobile(false)} >Asosiy</Link>
          </li>
          <li>
            <Link className='phone-menu-link' to='/about' onClick={() => setIsMobile(false)} >Kompaniya haqida</Link>
          </li>
          <li>
            <Link className='phone-menu-link' to='/news' onClick={() => setIsMobile(false)} >Yangiliklar</Link>
          </li>
          <li>
            <Link className='phone-menu-link' to='/contact' onClick={() => setIsMobile(false)} >Aloqa</Link>
          </li>
        </ul>
        <button
          className='menu-close-btn'
          onClick={() => setIsMobile(false)}
        >
          <AiOutlineClose style={{ width: '30px', height: '30px' }} />
        </button>
        <div className="menu-panel-bottom">
          <p>© 2009-2022 <b>UZTEX GROUP</b>. All
            Rights Reserved. Design by <b>Muslimbek & Rustamjon</b>
          </p>
        </div>
      </div>
    </>
  )
}

export default Header
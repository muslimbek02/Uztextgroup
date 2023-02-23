import React from './AboutBox.css'
import {Link} from 'react-router-dom'
import CountUp from 'react-countup'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const AboutBox = () => {

  return (
    <div className='about-box' id='about'>
      <div className="container">
        <div className="about-box-inner">
          <div className="about-card">
            <div className="about-card-title">
              <p>SINCE <br />2009</p>
            </div>
            <div className="about-card-value">
              <CountUp end={13} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="about-card-description">
            {i18n.Get("company.about.since")}
            </div>
          </div>
          <div className="about-box-info">
            <p className="heading-text">{i18n.Get("header.menu.second.company")}</p>
            <div className='about-box-info-title'>«UZTEX GROUP»</div>
            <div className="about-box-info-text">
              <p></p>
            </div>
            <Link to='/about' className='about-readmore-link'>BIZ HAQIMIZDA KO'PROQ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
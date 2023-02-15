import React from './AboutBox.css'
import {Link} from 'react-router-dom'
import CountUp from 'react-countup'


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
              ЛЕТ НА РЫНКЕ
            </div>
          </div>
          <div className="about-box-info">
            <p className="heading-text">KOMPANIYA HAQIDA</p>
            <div className='about-box-info-title'>«UZTEX GROUP»</div>
            <div className="about-box-info-text">
              <p>UZTEX kompaniyalar guruhi MDH mamlakatlarida to'qimachilik mahsulotlarini vertikal integratsiyalashgan etakchi ishlab chiqaruvchisi hisoblanadi. "UZTEX GROUP" ning ishlab chiqarish quvvatlari paxtadan to'qimachilik mahsulotlarining butun assortimentini ishlab chiqarishga imkon beradi: qo'pol va bo'yalgan iplarning barcha turlari, qo'pol va bo'yalgan trikotaj mato, tayyor trikotaj, paypoq va terri mahsulotlari.</p>
              <p>"UZTEX GROUP" ning tarixi 10 yildan ko'proq vaqtga borib taqaladi, o'shanda 2009 yilda bo'yalgan tuval ishlab chiqarish bo'yicha birinchi zavod ishga tushirilgan.</p>
              <p>Bugungi kunda O'zbekiston Respublikasining turli hududlarida joylashgan "UZTEX GROUP" korxonalarining yillik ishlab chiqarish quvvati 45000 tonnadan ortiq har xil turdagi kulrang ipni tashkil qiladi.</p>
            </div>
            <Link to='/about' className='about-readmore-link'>BIZ HAQIMIZDA KO'PROQ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
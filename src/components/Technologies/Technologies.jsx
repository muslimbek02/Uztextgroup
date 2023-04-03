import { useState } from 'react';
import AccordionBox from './Accordion/Accordion';
import  './Technologies.css'
import {GrClose} from 'react-icons/gr'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Technologies = () => {
  const [isModal, setIsModal] = useState(false);

  document.body.style.overflow = isModal ? 'hidden' : '';

  return (
    <div className='technology-box' id='technologies'>
      <div className="techno-fixed-video" style={{display: isModal ? 'flex' : 'none'}}>
        <button className='fixed-video-btn' onClick={()=> setIsModal(false)}>
          <GrClose />
        </button>
        <iframe 
          title="vimeo-player" 
          src="https://player.vimeo.com/video/34741214?h=9b0c868857" 
          width="640" 
          height="360" 
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
      <div className="container">
        <div className="heading-text">{i18n.Get("technology.title")}</div>
        <div className="techno-wrapper">
          <div className="collapse-list">
            <AccordionBox />
          </div>
          <div className="techno-video-wrapper">
            <div className="techno-btn" onClick={()=> setIsModal(true)}>
              <img src="./images/technologies-img.jpg" alt="techno-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
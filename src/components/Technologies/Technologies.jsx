import { useState } from 'react';
import AccordionBox from './Accordion/Accordion';
import  './Technologies.css'

const Technologies = () => {
  const [active, setActive] = useState(null);

  return (
    <div className='technology-box'>
      <div className="container">
        <div className="heading-text">Texnologiyalar</div>
        <div className="techno-wrapper">
          <div className="collapse-list">
            <AccordionBox />
          </div>
          <div className="techno-video-wrapper">
            <div className="techno-btn">
              <img src="./images/technologies-img.jpg" alt="techno-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
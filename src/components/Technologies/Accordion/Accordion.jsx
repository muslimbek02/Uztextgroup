import { technologies } from '../../../data'
import { useState } from 'react'
import AccordionItem from './AccordionItem';
import i18n from '../../../Services/MultiLanguageComponent/i18n';

const AccordionBox = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    (active === index) ? setActive(null) : setActive(index)
  }

  return (
    [...i18n.Get("technologies")].map((item, idx) => (
      <AccordionItem key={idx} item={item} handleClick={handleClick} active={active} />
    ))
  )
}

export default AccordionBox
import { technologies } from '../../../data'
import { useState } from 'react'
import AccordionItem from './AccordionItem';

const AccordionBox = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    (active === index) ? setActive(null) : setActive(index)
  }

  return (
    technologies.map((item, idx) => (
      <AccordionItem key={idx} item={item} handleClick={handleClick} active={active} />
    ))
  )
}

export default AccordionBox
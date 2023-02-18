import {useRef} from 'react'
import {BsChevronDown} from 'react-icons/bs'
import './accordion.css'

const AccordionItem = (props) => {

  const contentEl = useRef();
  const { active, item, handleClick } = props;
  const { id, title } = item;
  const isActive = id === active;
  const innerHeight = isActive
    ?  { height: contentEl.current.scrollHeight }
    :  { height: "0px" }

  return (
    <div className='techno-accordion'>
      <div className="techno-accordion-header">
        <button
          className={`techno-accordion-btn ${isActive && 'active'}`}
          onClick={()=> handleClick(id)}
        >
          <span>{id + '. ' + title}</span>
          <BsChevronDown />
        </button>
      </div>
      <div
        ref={contentEl}
        className={`techno-accordion-body ${isActive && 'show'}`}
        style={innerHeight}
      >
        <p>{title}</p>
      </div>
    </div>
  )
}

export default AccordionItem
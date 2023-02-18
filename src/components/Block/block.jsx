import React from 'react'
import './block.css'
const Block = ({ state = false }) => {
  return state ? (
    <div className='blur'>
      <img src="./images/loader/Loading.gif" alt="" />
    </div>
  ) : null;
}

export default Block
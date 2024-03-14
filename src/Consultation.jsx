import React from 'react'
import './consultation.css'
import consultImage from './consultation.png';
function Consultation() {
  return (
    <>
        <div className='consultation-container'>Consultation Process</div>
        <img src={consultImage} className='cimage'/>
    </>
  )
}

export default Consultation
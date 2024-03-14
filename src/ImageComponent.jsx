import React from 'react';
import doctorImage from './doctor.png'; // Import the image file
import './image.css';

function ImageComponent() {
  return (
    <div className='container'>
      <div className='text'>
        <h2>Welcome to Arogyashala - Your Trusted Healthcare Companion</h2>
        <p className="subtitle">Experience the future of healthcare with Arogyashala, where quality medical care meets the convenience of online consultations.</p>
        <p>
          Say goodbye to long wait times and travel hassles – now, you can connect with experienced doctors from the comfort of your own home.
          With Arogyashala, access expert medical advice, diagnoses, and treatment plans anytime, anywhere.
        </p>
      </div>
      <div className='image'>
        <img src={doctorImage} alt='Doctor' className='dimage' />
      </div>
    </div>
  );
}
export default ImageComponent;

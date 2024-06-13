import React from 'react';
import sana from './images/sana.jpeg';
import video from './video/new_year.mp4';

import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
      <div className="ratio ratio-16x9">
        <iframe
          src={video}
          title="New Year Celebration"
          allowfullscreen
        ></iframe>
      </div>
      
        <img
          src={sana}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      
      </MDBCol>
    </MDBRow>
  );
}
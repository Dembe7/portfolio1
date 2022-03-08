import React from 'react';
import './Sectiontitle.css'



export default function SectionTitle({
    subheading = 'Need Subheading',
    heading = 'need heading',
  }) {
    return (
      <div className="section-title">
        <p>{subheading}</p>
        <h2>{heading}</h2>
      </div>
    );
  }
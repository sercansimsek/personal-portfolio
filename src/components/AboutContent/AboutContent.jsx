import './AboutContentStyles.css';

import React from 'react'

export const AboutContent = ({ heading, text }) => {
    return (
        <div className='bcg-img-2'>
            <div className="heading-2">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
      )
}

import './FormStyles.css';

import React from 'react'

export const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" />

            <label htmlFor="">Subject</label>
            <input type="text" />

            <label htmlFor="">Message</label>
            <textarea rows="6" placeholder='Type Your Message Here' />

            <button type='submit' className="btn">Submit</button>
        </form>
    </div>
  )
}

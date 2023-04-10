import './FormStyles.css';

import React, { useState } from 'react'

export const Form = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true);
    }

  return (
    <div className='form'>
        <form 
            action="a"
            onSubmit={handleSubmit}
        >
            <label htmlFor="">Your Name</label>
            <input 
                type="text" 
                name='name'
                required
                placeholder='Name'
            />

            <label htmlFor="">Email</label>
            <input 
                type="email" 
                name='email'
                placeholder='Email'
                required
            />

            <label htmlFor="">Subject</label>
            <input 
                type="text"
                name='subject' 
                required
            />

            <label htmlFor="">Message</label>
            <textarea 
                name='message'
                rows="6" 
                placeholder='Type Your Message Here' 
            />

            <button type='submit' className="btn">Submit</button>
            {isSubmit && (
            <div className="thanks">Thanks! Your message recieved to me. You will get response as soon as possible.</div>
            )}
        </form>
    </div>
  )
}

import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <>
        <div className='Form'>
            <form action='https://formspree.io/f/xjvqvqab' method='POST'>
                <label>Your Name</label>
                <input type='text' name='Name' required></input>
                <label>Email</label>
                <input type='email' name='Email' required></input>
                <label>Subject</label>
                <input type='text' name='Subject' required></input>
                <label>Message</label>
                <textarea name='message' rows='6' placeholder='Type your message here' required/>
                <div className='buttn'>
                <input className='btn' type='submit' value="Send"/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form
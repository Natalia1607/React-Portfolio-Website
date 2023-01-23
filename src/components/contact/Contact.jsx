import React from 'react';
import './contactStyles.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaTelegramPlane} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gilyazovan97@mail.ru</h5>
            <a href="mailto:gilyazovan97@mail.ru" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@natalia_ksno</h5>
            <a href="https://t.me/natalia_ksno" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="#">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea type="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

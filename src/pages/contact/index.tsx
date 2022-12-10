import React, { useRef } from 'react';
import './contact.scss';
import model_image from '../../assets/bg_one.jpg';
import model_image_compressed from '../../assets/bg_one_compressed.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Contact = () => {

  return (
    <div className="contact_page">
      <div className="top_wrapper">
        <div className="header_text first">
          <h1 className="glitch" data-text="We're here">We're here</h1>
        </div>
        <div className="header_text second">
          <h1 className="glitch" data-text="Let's have a talk">Let's have a talk</h1>
        </div>
      </div>
      <div className="mid_wrapper">
        <div className="image_wrapper">
          <LazyLoadImage src={model_image}
            width="100%" height="100%"
            placeholderSrc={model_image_compressed}
            effect="blur"
          />
        </div>
        <div className="form_container">
          <h1>We conclude contracts with organizations and individual entrepreneurs</h1>
          <form className="form_wrapper">
            <div className="input_wrapper">
              <input type="text" placeholder='Your name' />
            </div>
            <div className="input_wrapper">
              <input type="text" placeholder='Enter phone number' />
            </div>
            <div className="input_wrapper">
              <input type="text" placeholder='Email' />
            </div>
          </form>
          <div className="button_wrapper">
            SUBMIT AN APPLICATION
          </div>
        </div>
      </div>
      <div className="bottom_wrapper">
        <div className="contact_details_wrapper">
          <div className="contact_inner_wrapper">
            <h2>Address</h2>
            <div className="contact_text">
              <p>8017 S Patricia Ct</p>
              <p>Franklin, Wisconsin(WI), 53132</p>
            </div>
          </div>
          <div className="contact_inner_wrapper">
            <h2>Phones</h2>
            <div className="contact_text">
              <p>(814) 224-5499</p>
              <p>(928) 333-0498</p>
              <p>(715) 434-8449</p>
            </div>
          </div>
          <div className="contact_inner_wrapper">
            <h2>Email</h2>
            <div className="contact_text">
              <p>info@talia.des</p>
              <p>support@talia.des</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
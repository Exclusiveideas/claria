import React, { useState } from 'react';
import './footer.css';
import complaint_icon from '../../assets/complaint_icon.svg'
import delivery_icon from '../../assets/delivery_icon.svg'

const Footer = () => {
  const [focusedInput, setFocusedInput] = useState(false);
  const [inputStep, setInputStep] = useState(1);

  const incrementStep = () => {
    inputStep === 3 ? setInputStep(1) : setInputStep(inputStep + 1);
  }


  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="icon_wrapper complaint">
          <img src={complaint_icon} alt="complaint icon" />
          <p>Do you have any question?
            contact us: <span>info@claria.des</span></p>
        </div>
        <div className="icon_wrapper delivery">
          <img src={delivery_icon} alt="delivery icon" />
          <p>Free shipping for orders more than
            $5,000.00</p>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom-left">
          <h1>Become a wholesale customer</h1>
          <div className="form_wrapper">
            <div className="form_top">
              {inputStep === 1 && <input type="text" className="input" placeholder='Name' onFocus={() => setFocusedInput(true)} onBlur={() => setFocusedInput(false)} />}
              {inputStep === 2 && <input type="number" className="input" maxLength={14} placeholder='Number' onFocus={() => setFocusedInput(true)} onBlur={() => setFocusedInput(false)} />}
              {inputStep === 3 && <input type="mail" className="input" placeholder='E-mail' onFocus={() => setFocusedInput(true)} onBlur={() => setFocusedInput(false)} />}
              <p className="further" onClick={incrementStep} >FURTHER</p>
            </div>
            <hr className='form_line' />
            <hr className={`form_line absolute ${focusedInput && 'visible'}`} />
          </div>
        </div>
        <div className="footer_bottom-right">
          <h1>Connect with us</h1>
          <div className="socials">
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
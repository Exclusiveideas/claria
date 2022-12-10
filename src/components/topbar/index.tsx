import React, { useState } from 'react';
import './topbar.css';
import line from '../../assets/line.svg';
import close_nav from '../../assets/close_nav.svg';
import open_nav from '../../assets/hamburger.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Topbar = ({activateTransition}: any) => {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation();
  const activeLink = location.pathname;
  const navigate = useNavigate();

  const changeNavState = () => {
    setNavOpen(!navOpen);
  }

  const closeNavState = () => {
    setNavOpen(false);
  }

  const navigatePage = (layerDir:string, destination: string ) => {
    setTimeout(() => {
      navigate(destination)
    }, 700);

    closeNavState();

    if(destination !== activeLink) activateTransition(layerDir);  
  }
 
  return (
    <div className={`topbar ${navOpen && "nav_open"}`}>
      <div className="topbar_wrapper">
        <div className="logo_wrapper">
          <div className="home_icon_wrapper" onClick={() => navigatePage("right", "/")}>
            <h1>CLARIA</h1>
            <svg
              width="59"
              height="5"
              viewBox="0 0 59 5"
              className="svg_line"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="5" x1="30" y2="5" className="line_element" />
              <line x1="29" y1="5" x2="59" y2="5" className="line_element" />
            </svg>
          </div>
          <div className="nav_switch" onClick={changeNavState}>
            <img src={open_nav} alt="open nav icon" className={`nav_switch-icon ${navOpen && "open"}`} />
            <img src={close_nav} alt="close nav icon" className={`nav_switch-icon ${navOpen && "open"}`} />
          </div>
        </div>
        <div className={`toplink_wrapper ${navOpen && "nav_open"}`}>
          <div className="toplink_el" onClick={() => navigatePage("right", "/catalog")}>
            <p className="toplink_item">Catalog</p>
            {activeLink == "/catalog" && <img src={line} alt="line" className='line_svg' />}
          </div>
          <div className="toplink_el" onClick={() => navigatePage("right", "/about")}>
            <p className="toplink_item">About</p>
            {activeLink == "/about" && <img src={line} alt="line" className='line_svg' />}
          </div>
          <div className="toplink_el" onClick={() => navigatePage("left", "/reviews")}>
            <p className="toplink_item">Reviews</p>
            {activeLink == "/reviews" && <img src={line} alt="line" className='line_svg' />}
          </div>
          <div className="toplink_el" onClick={() => navigatePage("left", "/contact")}>
            <p className="toplink_item">Contact</p>
            {activeLink == "/contact" && <img src={line} alt="line" className='line_svg' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
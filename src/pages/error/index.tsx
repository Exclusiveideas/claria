import React from 'react';
import './errorPage.css';
import error_page from '../../assets/404.svg';

const ErrorPage = () => {
  return (
    <div className='error_page'>
      <img src={error_page} alt="404" className="error_image" />
      <div className="text_wrapper">
        <h1><span>404 </span><span>Page</span></h1>
      </div>
    </div>
  )
}

export default ErrorPage;
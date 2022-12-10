import './home.scss';
import catalog_icon from '../../assets/catalog_icon.svg';
import home_icon from '../../assets/home_icon.svg';
import person_icon from '../../assets/person_icon.svg';
import review_icon from '../../assets/review_icon.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnLoadBackgroundImages } from '../../hooks/useOnloadImages';

const Home = ({activateTransition}: any) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const imagesLoaded = useOnLoadBackgroundImages(wrapperRef);
  

  const changeIndex = () => {
    if (index > 2) {
      setIndex(0)
    }
    else setIndex(index + 1);
  }
  

  useEffect(() => {
    const changeBGInterval = setInterval(changeIndex, 4500);

    return () => clearInterval(changeBGInterval);
  }, [index]);

  const navigatePage = (layerDir:string, destination: string ) => {
    setTimeout(() => {
      navigate(destination)
    }, 700);

    activateTransition(layerDir);    
  }



  return (
    <div ref={wrapperRef} className={`homepage ${!imagesLoaded && "loading"}`}>
      <div className={`bg_image bg_four ${index == 3 && "fade_in"} `}></div>
      <div className={`bg_image bg_three ${index == 2 && "fade_in"} `}></div>
      <div className={`bg_image bg_two ${index == 1 && "fade_in"} `}></div>
      <div className={`bg_image bg_one ${index == 0 && "fade_in"} `}></div>
      <div className="overlay"></div>
      <div className="logo">
        <h1>CLARIA</h1>
        <svg
          width="59"
          height="5"
          viewBox="0 0 59 5"
          className="svg_line"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5" x1="30" y2="5" className="line_el" />
          <line x1="29" y1="5" x2="59" y2="5" className="line_el" />
        </svg>
      </div>
      <div className="nav_el catalog_icon" onClick={() => navigatePage("right", "/catalog")}>
        <img src={catalog_icon} alt="catalog icon" />
        <svg
          width="59"
          height="5"
          viewBox="0 0 59 5"
          className="svg_line"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5" x1="30" y2="5" className="line_el" />
          <line x1="29" y1="5" x2="59" y2="5" className="line_el" />
        </svg>
      </div>
      <div className="nav_el review_icon" onClick={() => navigatePage("left", "/reviews")}>
        <img src={review_icon} alt="review icon" />
        <svg
          width="59"
          height="5"
          viewBox="0 0 59 5"
          className="svg_line"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5" x1="30" y2="5" className="line_el" />
          <line x1="29" y1="5" x2="59" y2="5" className="line_el" />
        </svg>
      </div>
      <div className="nav_el person_icon" onClick={() => navigatePage("right", "/about")}>
        <img src={person_icon} alt="about icon" />
        <svg
          width="59"
          height="5"
          viewBox="0 0 59 5"
          className="svg_line"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5" x1="30" y2="5" className="line_el" />
          <line x1="29" y1="5" x2="59" y2="5" className="line_el" />
        </svg>
      </div>
      <div className="change_img-container" onClick={changeIndex}>
        <svg width="105" height="3" viewBox="0 0 105 3" xmlns="http://www.w3.org/2000/svg">
          <line y1="1.5" x2="25" y2="1.5" stroke={index === 0 ? "#C50E7C" : "white"} strokeWidth="3" />
          <line x1="27" y1="1.5" x2="52" y2="1.5" stroke={index === 1 ? "#C50E7C" : "white"} strokeWidth="3" />
          <line x1="54" y1="1.5" x2="79" y2="1.5" stroke={index === 2 ? "#C50E7C" : "white"} strokeWidth="3" />
          <line x1="80" y1="1.5" x2="105" y2="1.5" stroke={index === 3 ? "#C50E7C" : "white"} strokeWidth="3" />
        </svg>
      </div>
    </div>
  )
}

export default Home;
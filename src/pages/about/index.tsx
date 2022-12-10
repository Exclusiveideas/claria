import './about.css';
import arrow from '../../assets/arrow.svg';
import image_one from '../../assets/about_first.jpg';
import image_one_compressed from '../../assets/about_first_compressed.jpg';
import image_two from '../../assets/about_second.jpg';
import image_two_compressed from '../../assets/about_second_compressed.jpg';
import image_three from '../../assets/about_third.jpg';
import image_three_compressed from '../../assets/about_third_compressed.jpg';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
  const navigate = useNavigate();


  return (
    <div className={`about_page `}>
      <div className="header">
        <h1>CLARIA</h1>
      </div>
      <div className="image_container_one">
        <div className="image_wrapper_one">
          <LazyLoadImage src={image_one}
            width="100%" height="100%"
            placeholderSrc={image_one_compressed}
            effect="blur"
          />
        </div>
        <div className="image_wrapper_one_back"></div>
      </div>
      <div className="quote_container">
        <div className="quote_wrapper">
          <h1>Clothes mean nothing until someone lives in them.</h1>
          <p>-Marc Jacobs</p>
        </div>
      </div>
      <div className="description_container">
        <div className="description_wrapper">
          <div className="description_wrapper_left">
            <div className="image_container_two">
              <LazyLoadImage src={image_two}
                width="100%" height="100%"
                placeholderSrc={image_two_compressed}
                effect="blur"
              />
            </div>
            <div className="image_container_two_back"></div>
          </div>
          <div className="description_wrapper_right">
            <div className="description_wrapper_right-container">
              <p>CLARIA is a developing fashion brand that has been operating
                since 2014.</p>
              <p>CLARIA is a brand of women's clothing that combines style, quality and comfort.</p>
              <p>When creating models, we use modern software and the latest equipment, which allow us to achieve an excellent fit of clothes according to the figure.</p>
              <p>Constantly updated assortment, excellent quality, individual approach to each client, impeccable service - that's what they choose us for.</p>
              <p>The company "CLARIA" is not just a production of women's clothing, it is a team of professionals that brings joy to women.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page_bottom">
        <div className="page_bottom_image-container">
          <LazyLoadImage src={image_three}
            width="100%" height="100%"
            placeholderSrc={image_three_compressed}
            effect="blur"
          />
        </div>
        <div className="cta_container">
          <h1>UPGRADE YOUR FASHION IDENTITY WITH OUR BESPOKE COLLECTION</h1>
          <div className="cta_button">
            <img src={arrow} alt="arrow" />
            <p onClick={() => navigate("/catalog")}>Back to shop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
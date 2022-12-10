import { useEffect, useRef, useState } from "react";
import "./catalogProduct.css";
import Title from 'react-parallax-tilt';

const CatalogProduct = ({ index, product, multipleImages, fadeOut }: any) => {
    const [dur, setDur] = useState("1500")
    const productImage = !multipleImages ? product?.image : product?.images[0];

    const checkIndex = () => {
        let third = ((index + 1) % 3) == 0 ? true : false
        if (third) {
            setDur("4500")
            return
        }

        switch ((index + 1)) {
            case 2:
                setDur("3000")
                break;
            case 5:
                setDur("3000")
                break;
            case 8:
                setDur("3000")
                break;
            case 11:
                setDur("3000")
                break;
            default:
                setDur("1500")
                break;
        }
    };

    useEffect(() => {
        checkIndex();
    }, [])


    return (
        <div
            data-aos="fade-down"
            data-aos-duration={dur}
            data-aos-once="false"
            data-aos-offset="-5"
            className={`demo-2 product ${fadeOut && "fade-out-top"}`}
        >
            <Title
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
                className="item"
                >
                <div className="item__img glitch" data-tilt data-tilt-max="15" data-tilt-speed="3000" data-tilt-perspective="1500" data-tilt-scale="0.95" data-tilt-mouse-event-element=".content .item:nth-child(1)">
                    <div className="glitch__img" style={{ backgroundImage: `url(${productImage})` }}></div>
                    <div className="glitch__img" style={{ backgroundImage: `url(${productImage})` }}></div>
                    <div className="glitch__img" style={{ backgroundImage: `url(${productImage})` }}></div>
                    <div className="glitch__img" style={{ backgroundImage: `url(${productImage})` }}></div>
                    <div className="glitch__img" style={{ backgroundImage: `url(${productImage})` }}></div>
                </div>
                <div className="item__cover" style={{ backgroundImage: `url(${productImage})` }}></div>
                <div className="product_details_wrapper">
                    <h2>{product.title}</h2>
                    <p>$ {(product.price)?.toFixed(2)}</p>
                </div>
            </Title>
            <div className="box_underline"></div>
        </div>
    );
};

export default CatalogProduct;

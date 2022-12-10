import { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "../../components/catalogProduct";
import { fetchCatalogProducts } from '../../apiCalls';
import CatalogCollection from "../../components/catalogCollection";
import CatalogError from "../../components/catalogError";
import svg_loader from "../../assets/loading-bars.svg";


const Catalog = () => {
  const [activeCollection, setActiveCollection] = useState("women's clothing");
  const [fetchedProducts, setFetchedProducts] = useState<any>([{}]);
  const [multipleImages, setMultipleImages] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const startTimer = () => {
    setTimeout(() => {
      setTimeElapsed(true);
    }, 5000);
  };

  useEffect(() => {
    setTimeElapsed(false)
    fetchCatalogProducts({ setFetchedProducts, activeCollection, setMultipleImages, setTimeElapsed, setFetchError });
    startTimer();
    setFadeOut(false);
  }, [activeCollection]);

  const changeActiveCollection = (val: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setActiveCollection(val)
    }, 1000);
  }

  const reloadPage = () => {
    window.location.reload();
  }


  return (
    <div className="catalog_page">
      <CatalogCollection activeCollection={activeCollection} changeActiveCollection={changeActiveCollection} />
      
      { fetchedProducts[0]?.title &&
        (
        <div className="product_wrapper">
          <div className="product_container">
            {fetchedProducts?.map((fetchedProduct: any, i: number) => (
              <CatalogProduct key={i} index={i} product={fetchedProduct} multipleImages={multipleImages} fadeOut={fadeOut} />
            ))}
          </div>
        </div>
        )}
      {!timeElapsed && !fetchedProducts[0]?.title && (
        <div className="loader_wrapper">
          <img src={svg_loader} alt="loader" width="80" height="80" />
        </div>
      )}
      {timeElapsed && !fetchedProducts[0]?.title && (
        <div className="svg_error_container">
          <CatalogError />
          <div className="error_details">
            <p className="big_text">Something went wrong</p>
            {fetchError && <p className="error_message">{fetchError}</p>}
            <div className="reload_button" onClick={reloadPage}>
              Reload Page
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
import axios from "axios";


export const fetchCatalogProducts = ({
  setFetchedProducts,
  activeCollection,
  setMultipleImages,
  setTimeElapsed,
  setFetchError
}: any) => {
  setFetchedProducts([]);
  const isFakeStore =
    activeCollection == "women's clothing" || activeCollection == "men's clothing" || activeCollection == "jewelery"
      ? true : false;

  const baseURL = isFakeStore ? "fakestoreapi.com/products/category" : "api.escuelajs.co/api/v1/categories";

  if (isFakeStore) {
    axios.get(`https://${baseURL}/${activeCollection}?limit=12`)
      .then((res) => {
        setFetchedProducts([...res?.data])
        setMultipleImages(false)
        setTimeElapsed(false);
      })
      .catch(err => {
        setFetchError(err?.message);
      })
  }
  else {
    let categoryID = (activeCollection == "clothes" && 1) || (activeCollection == "shoes" && 4)
    axios.get(`https://${baseURL}/${categoryID}/products?offset=0&limit=12`)
      .then((res) => {
        setFetchedProducts([...res?.data])
        setMultipleImages(true)
        setTimeElapsed(false);
      })
      .catch(err => {
        setFetchError(err?.message);
      })
  }
};
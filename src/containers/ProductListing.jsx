import { useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts(products)
  }, [])

  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

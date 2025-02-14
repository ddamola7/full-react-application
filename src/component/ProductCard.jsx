import React from "react";
import { Link } from "react-router-dom";
import { PiEyesBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" mr-10 p-4 ms-4 rounded-lg shadow-lg  bg-white transform transition-transform hover:scale-110 focus:scale-115">
      <img className="w-full h-48 object-contain mb-4" src={product.image} alt={product.title} />
      <h2 className="text-lg font-semibold">{product.category}</h2>
      <p className="text-green-500 font"> <strong>Price</strong> ${product.price}</p>

      <div className="flex gap-2 items-center ms-4">
        <Link to={`/product/${product.id}`}>
          <button className="mt-4 bg-green-950 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <PiEyesBold />
          </button>
        </Link>
        <button onClick={() => dispatch(addToCart(product))} className="flex rounded mt-6 bg-gray-900 text-white mb-2 p-2 hover:bg-gray-400 ">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;


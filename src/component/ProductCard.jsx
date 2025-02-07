import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    return (
      <div className=" mr-10 p-4 ms-4 rounded-lg shadow-lg  bg-white transform transition-transform hover:scale-105 focus:scale-105">
        <img className="w-full h-48 object-contain mb-4" src={product.image} alt={product.title} />
        <h2 className="text-lg font-semibold">{product.category}</h2>
        <p className="gap-1"> <strong>Price</strong>${product.price}</p>
        <Link to={`/product/${product.id}`}>
        <button className="mt-4 bg-green-950 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          view more Details
        </button>
        </Link>
        
      </div>
    );
  };
  
  export default ProductCard;
  

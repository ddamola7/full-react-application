// export default Product
import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard'
import Back from '../component/Back';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        console.log(response)
        setProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Back />
      <div className='mt-6'>
        <h1 className='text-3xl font-bold text-center mb-6 mt-12'>Products</h1>
        <div className='grid shadow-2xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {product.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>
      </div>
    </>

  );
};

export default Product;
// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom"

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchSingleProduct = async () => {
//             try {
//                 const data = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const response = await data.json();
//                 console.log(response)
//                 setProduct(response)
//                 setLoading(false)
//             } catch (error) {
//                 console.log(error.message)
//             }

//         }
//         fetchSingleProduct();
//     }, [])
//     return (

//         <>
//             <div className=''>
//                 {
//                     loading ? <div>Loading...</div> : <div className='flex gap-6'>
//                         <img src={product.image} alt='product image' className='mt-20 h-40 ms-6' />

//                         <div className=' mt-20 flex items-center'>
//                             Description: {product.description}
//                             price: {product.price}
//                         </div>
//                     </div>

//                 }

//             </div>


//         </>

//     )
// }

// export default ProductDetail

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await data.json();
        console.log(response);
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <div className="text-xl font-semibold">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt="product"
              className="h-64 w-64 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600">${product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

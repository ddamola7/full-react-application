

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const FLUTTER_PUBLIC_KEY=import.meta.env.VITE_PUBLIC_KEY

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
  }, []);

  console.log(product)
  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: product ?.price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070**',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'order now!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() 
    },
    onClose: () => {},
  };

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
            <p className="text-lg font-semibold text-green-600 "> <strong className="">Price</strong>  ${product.price}</p>
            <FlutterWaveButton className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-950 transition" {...fwConfig} />
            {/* <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-950 transition">Order Now</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

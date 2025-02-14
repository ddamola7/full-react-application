import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard'; // Ensure correct path
import Back from '../component/Back';


const Product = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct]= useState ([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState ("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilterProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  const filterByPrice = (price) => {
    const result = filterProduct.filter((p)=> p.price > price); 
    setProducts(result)
  }

  const searchProducts = products.filter ((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (

    <>
      <Back />


     
      <div className='mt-6'>

        <div>
          <input type="text" placeholder='Search products...' className='relative left-[500px] bottom-2 px-4 border py-2 rounded-md' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>



        </div>
        
        <h1 className='text-3xl font-bold text-center mb-6 mt-'>Products</h1>
        <select onChange={(e) => { filterByPrice(e.target.value) }} className='relative left-[1000px] bottom-24'>
        <option value="">...Filter by Product...</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>


        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className='grid shadow-2xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {searchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
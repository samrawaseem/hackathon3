"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Card2 from './cards/Card2';

interface Product {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const sanity = createClient({
  projectId: "uz3gdsfl",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

const HomeProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [countNum, setCountNum] = useState(8);

  const handleCount = () => {
    setCountNum(prevCount => prevCount + 8);
  };

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;

      const data = await sanity.fetch<Product[]>(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const truncateDescription = (description: string) => {
    const maxLength = 100;
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  };

  return (
    <div className='flex flex-col gap-12 justify-center w-[80vw] m-auto'>
      <h2 className='text-4xl font-bold text-center'>Products</h2>
      <div className="HomeProductsGrid grid grid-cols-4 gap-7">
        {products.slice(0, countNum).map((product) => (
          <Card2
            key={product._id}
            img={product.imageUrl}
            name={product.title}
            short={truncateDescription(product.description)}
            salePrice={product.price}
            persent={product.discountPercentage}
          />
        ))}
      </div>
      {products.length > countNum && (
        <button className='btn3 m-auto' onClick={handleCount}>Show More</button>
      )}
    </div>
  );
};

export default HomeProducts;
"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const sanity = createClient({
  projectId: "uz3gdsfl",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const Wishlist: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

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

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleWishlistToggle = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    let updatedWishlist;

    if (isInWishlist) {
      // Remove from wishlist
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      // Add to wishlist
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const isInWishlist = (product: Product) => {
    return wishlist.some((item) => item._id === product._id);
  };

  return (
    <div className="p-4 my-[3em] w-[80%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-blue-950 mt-2 text-sm">${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-orange-500">
                  {product.discountPercentage}% OFF
                </p>
              )}
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="text-red-500"
                  onClick={() => handleWishlistToggle(product)}
                >
                  {isInWishlist(product) ? (
                    <FaHeart className="w-6 h-6" />
                  ) : (
                    <FaRegHeart className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Summary */}
      {wishlist.length > 0 && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Your Wishlist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlist.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
                <p className="text-blue-950 mt-2 text-sm">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import { FaSearch } from "react-icons/fa";
import Card2 from "@/components/cards/Card2";


const sanity = createClient({
    projectId: "uz3gdsfl",
    dataset: "production",
    apiVersion: "2025-01-13",
    useCdn: true,
  });
  
interface Product {
    _id: string;
    title: string;
    price: string;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    tags: string[];
}



const Search: React.FC = () => {


    const [products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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
            setFilteredProducts(data); // Initialize filtered products
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    const truncateDescription = (description: string) => {
        const maxLength = 100;
        return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
    };


    return (
        <div className='w-[80%] mx-auto'>
            <div className="searchBox w-[50%] mx-auto my-[3em]">
                <div className="searchBoxMain flex gap-3 items-center border border-gray-600">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder='Search product here'
                        className='w-full text-xl p-4 outline-none' />
                    <FaSearch className='mr-5 text-3xl cursor-pointer' />
                </div>
            </div>
            <div className="products grid grid-cols-1 md:grid-cols-4 gap-[1em]">
                {searchQuery ? (
                    filteredProducts.map((product) => (
                        <Card2
                            key={product._id}
                            img={product.imageUrl}
                            name={product.title}
                            salePrice={product.price}
                            short={truncateDescription(product.description)}
                            persent={product.discountPercentage}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">
                        No products found.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Search
'use client'
import React, { useState, useEffect } from 'react';
import { RiSoundModuleFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import Card2 from '@/components/cards/Card2';
import TrustComp from '@/components/TrustComp';
import PageBg from '@/components/PageBg';
import { createClient } from "@sanity/client";


interface Products {
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


const Shop: React.FC = () => {
    const [newNumber, setNewNumber] = useState<number>(8);

    // Handle input change for the number of products to show
    const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setNewNumber(value);
        }
    };

    const [products, setProducts] = useState<Products[]>([]);
    const countNum = 8



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

            const data = await sanity.fetch<Products[]>(query);
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

    const number = products.length

    return (
        <div>
            <PageBg name={'Shop'} />
            {/* Shop Filters */}
            <div className="ShopFilter flex flex-col md:flex-row justify-between items-center bg-[#F9F1E7] px-[5vw] py-4 gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    {/* Filter Icons */}
                    <div className="filterIcons flex gap-4 items-center text-xl border-b md:border-r border-black pb-4 md:pb-0 md:pr-5">
                        <p className="flex items-center gap-1"><RiSoundModuleFill /> Filter</p>
                        <MdSpaceDashboard />
                        <BsViewList />
                    </div>
                    {/* Showing Results */}
                    <div className="filterShow text-center md:text-left">
                        <p>Showing 1-{newNumber} of {number} results</p>
                    </div>
                </div>
                {/* Filter Options */}
                <div className="filterBoxes flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="inp1 flex gap-3 items-center">
                        <p>Show</p>
                        <input
                            className="outline-none p-2 inputFilter border rounded-md w-full md:w-auto"
                            type="number"
                            placeholder={`${newNumber}`}
                            value={newNumber}
                            onChange={handleNum}
                        />
                    </div>
                    <div className="inp1 flex gap-3 items-center">
                        <p>Sort by</p>
                        <input
                            className="outline-none p-2 inputFilter border rounded-md w-full md:w-auto"
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="HomeProductsGrid grid grid-cols-4 gap-7 w-[80%] my-[2em] mx-auto">
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
            {/* Pagination */}
            <div className="ShopPageNums flex gap-5 m-auto w-[90vw] md:w-[80vw] justify-center items-center mb-6">
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#B88E2F] w-12 h-12 rounded-md">
                    <p className="text-lg text-white">1</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">2</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">3</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">Next</p>
                </div>
            </div>

            {/* Trust Section */}
            <TrustComp />
        </div>
    );
};

export default Shop;
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus, FaPlus, FaLinkedin, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { createClient } from "@sanity/client";
import sofa from "@/images/sofa.png";
import sofa2 from "@/images/sofa2.png";
import sofa3 from "@/images/sofa3.png";
import Card2 from "@/components/cards/Card2";

const sanity = createClient({
    projectId: "pknoq409",
    dataset: "production",
    apiVersion: "2025-01-13",
    useCdn: false, // Set to false to fetch fresh data
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage?: number;
    imageUrl: string;
    tags: string[];
}
interface Products {
    _id: string;
    title: string;
    price: string;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    tags: string[];
}

interface SingleProductProps {
    params: { slug: string };
}

const SingleProduct: React.FC<SingleProductProps> = ({ params }) => {
    const [slug, setSlug] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState<number>(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        setSlug(params.slug);
    }, [params]);

    useEffect(() => {
        if (slug) {
            const tit = slug.replace(/-/g, " ");

            const fetchProduct = async () => {
                try {
                    const query = `*[_type == "product" && title == $tit][0]{
                        _id,
                        title,
                        price,
                        description,
                        discountPercentage,
                        "imageUrl": productImage.asset->url,
                        tags
                    }`;
                    const data = await sanity.fetch(query, { tit });
                    setProduct(data);
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            };

            fetchProduct();
        }
    }, [slug]);

    const handleRating = (value: number) => {
        setRating(value);
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

    return (
        <div>
            {/* Breadcrumb */}
            <div className="upperSinglePro bg-[#F9F1E7] flex p-[2em] gap-7">
                <p className="flex border-r border-black gap-3 pr-4 items-center">
                    Home <IoIosArrowForward /> Shop <IoIosArrowForward />
                </p>
                <p>{product?.title || slug.replace(/-/g, " ")}</p>
            </div>

            {/* Product Content */}
            <div className="innerSingleProduct w-[90vw] m-auto mt-[2em] flex gap-[3em]">
                {/* Left Product Section */}
                <div className="leftProductIn flex gap-[3em]">
                    {/* Thumbnail Images */}
                    <div className="flex productImagesll flex-col gap-14">
                        {[1, 2, 3, 4].map((_, index) => (
                            <Image
                                key={index}
                                src={product?.imageUrl || sofa}
                                height={100}
                                width={100}
                                alt={`Product thumbnail ${index + 1}`}
                                className="bg-[#F9F1E7] p-2 rounded-md"
                                unoptimized
                            />
                        ))}
                    </div>

                    {/* Featured Image */}
                    <Image
                        src={product?.imageUrl || sofa}
                        height={600}
                        width={600}
                        alt="Featured product image"
                        className="bg-[#F9F1E7] p-4 rounded-md"
                        unoptimized
                    />
                </div>

                {/* Right Product Section */}
                <div className="rightProductIn w-[50vw]">
                    <div className="basicProDetails">
                        <h2 className="text-2xl font-bold">{product?.title || "Loading..."}</h2>
                        <h3 className="text-xl font-semibold text-red-500">
                            RS {product?.price?.toLocaleString() || "0.00"}
                        </h3>

                        {/* Custom Star Rating */}
                        <div className="reviewsPro mt-4 flex gap-5 items-center">
                            <div className="flex gap-1 border-r border-black pr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        onClick={() => handleRating(star)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={star <= rating ? "#FFD700" : "none"}
                                        stroke="#FFD700"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 cursor-pointer"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-lg text-gray-600">5 Customer Reviews</p>
                        </div>
                        <div className="w-[60%] my-6">
                            <p>{product?.description.slice(0, 200) || "Product details coming soon."}</p>
                        </div>
                    </div>
                    <div className="sizeCol">
                        <div className="sizeProduct">
                            <p>Size</p>
                            <div className="sizeBoxes flex gap-4 my-2">
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#B88E2F] w-12 h-12 rounded-md"><p className='text-lg text-white'>L</p></div>
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md"><p className='text-lg'>XL</p></div>
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md"><p className='text-lg'>XS</p></div>
                            </div>
                        </div>
                        <div className="colorProducts my-7">
                            <p>Color</p>
                            <div className="colorsBoxes flex gap-5">
                                <div className="bg-[#816DFA] h-[50px] w-[50px] rounded-full"></div>
                                <div className="bg-[#000000] h-[50px] w-[50px] rounded-full"></div>
                                <div className="bg-[#B88E2F] h-[50px] w-[50px] rounded-full"></div>
                            </div>
                        </div>
                        <div className="boxesCartetc flex gap-5 border-b border-black pb-5">
                            <div className="flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2">
                                <button
                                    disabled={count === 1}
                                    className={`cursor-pointer ${count === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => {
                                        if (count > 0) {
                                            setCount(count - 1);
                                        }
                                    }}
                                >
                                    <FaMinus />
                                </button>

                                {count}
                                <FaPlus className="cursor-pointer" onClick={() => {
                                    setCount(count + 1)
                                }} />
                            </div>
                            <div className="cursor-pointer flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2">Add To Cart</div>
                            <div className="cursor-pointer flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2"><FaPlus className="cursor-pointer" />Compare</div>
                        </div>

                        {/* Product Information */}
                        <div className="littleMoreInfo flex flex-col gap-5 text-xl my-5">
                            <div className="flex items-center gap-4">
                                <p>Tags:</p>
                                <p>{product?.tags?.join(", ") || "N/A"}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>Share:</p>
                                <p className="flex items-center gap-4">
                                    <FaFacebook /> <FaLinkedin /> <FaTwitterSquare />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="ProductDataSingle flex flex-col w-[90vw] m-auto items-center my-8">
                <div className="flex text-2xl gap-6">
                    <p className="cursor-pointer font-bold">Description</p>
                    <p className="cursor-pointer">Additional Information</p>
                    <p className="cursor-pointer">Reviews [5]</p>
                </div>
                <div className="flex flex-col gap-5 w-[80%] my-8">
                    <p>{product?.description || "No description available."}</p>
                </div>
                <div className="imagesSingleProduct flex gap-5">
                    <Image src={sofa2} height={500} width={700} alt="Product showcase" className="bg-[#F9F1E7] h-auto" />
                    <Image src={sofa3} height={500} width={700} alt="Product showcase" className="bg-[#F9F1E7] h-auto" />
                </div>
            </div>
            <div className="relatedProductsSingle w-[80vw] m-auto my-10">
                <h2 className="text-center text-4xl my-5">Related Products</h2>
                <div className="ProductsSinglePage grid grid-cols-4">
                    {products.slice(0, 4).map((me) => (
                        <Card2
                            key={me._id}
                            img={me.imageUrl}
                            name={me.title}
                            short={truncateDescription(me.description)}
                            salePrice={me.price}
                            persent={me.discountPercentage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

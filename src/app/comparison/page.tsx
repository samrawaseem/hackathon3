'use client'
import PageBg from '@/components/PageBg'
import TrustComp from '@/components/TrustComp'
import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from 'react'

const Comparison = () => {
    const img = 'https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBSH5RmKmYnwrB4EBmnJ68X60fq3Q5R93ceS12G1FMyIo~DoYyqNZjabDMDCZWl1y0DBfuUKZMkP-PDsVEinnKFe09R8SJt9opKaxlmPX~5sFCO~RVCJ4PoQM6cLS067d70Umk22RywDR8QSC-n-hePf-gDj9AnNNYpvcFLN0Zl0iF~r4KSK1sConQIDvripMRQsYwNSLULqNJ7ypBj2kBTOYN9OuiLxBxAOUVEVRj0~z8BeF~9ePbQHT49zk5BBSCEzqPnRsVt4qrM-Su3S6JaRm5~MA6LiJMllfPb8IhEBBxSnO3m2KXhf1WNLmRXI8s~G~ezcIdE4CRPXynKyRg__'

    const [rating, setRating] = useState(4); // State for custom star rating

  return (
    <div>
        <PageBg name = {'Comparison'} />
        <div className="Comparison">
            <div className="ProductsComparision grid grid-cols-4 w-[80vw] m-auto my-[3em]">
                <div className="flex flex-col gap-7 responsiveGridCompa">
                    <h2 className='text-3xl'>Go to Product page for more Products</h2>
                    <p className='text-xl border-b border-black pb-2 max-w-max'>View More</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={img} height={200} width={200} alt='compareimg' className='bg-[#F9F1E7]' />
                    <div className="lowerCompa flex flex-col items-center">
                        <h2>Asgaard Sofa</h2>
                        <p>Rs. 250,000.00</p>
                        <div className='flex items-center'>
                            <div className="reviewsPro mt flex gap-5 items-center">
                            <div className="flex gap-1 border-r border-black pr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        onClick={() => setRating(star)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={star <= rating ? "#FFD700" : "none"}
                                        stroke="#FFD700"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4 cursor-pointer"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-sm text-gray-600">204 Review</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={img} height={200} width={200} alt='compareimg' className='bg-[#F9F1E7]' />
                    <div className="lowerCompa flex flex-col items-center">
                        <h2>Asgaard Sofa</h2>
                        <p>Rs. 250,000.00</p>
                        <div className='flex items-center'>
                            <div className="reviewsPro mt flex gap-5 items-center">
                            <div className="flex gap-1 border-r border-black pr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        onClick={() => setRating(star)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={star <= rating ? "#FFD700" : "none"}
                                        stroke="#FFD700"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4 cursor-pointer"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-sm text-gray-600">204 Review</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="SelectCompaPro responsiveGridCompa">
                    <h2 className='text-3xl'>Add A Product</h2>
                    <button className='btn flex gap-4 items-center'>Choose a Product <FaAngleDown /></button>
                </div>
            </div>
            <div className="grid gridtempaclos grid-cols-4 w-[80vw] m-auto my-[3em] gap-y-5">
                <h2 className='text-3xl'>General </h2><p></p><p></p><p className='responsiveGridCompa'></p>
                <p>Sales Package</p><p className='text-center'>1 sectional sofa</p><p className='text-center'>1 Three Seater, 2 Single Seater</p><p className='responsiveGridCompa'></p>
                <p>Model Number</p><p className='text-center'>TFCBLIGRBL6SRHS</p><p className='text-center'>DTUBLIGRBL568</p><p className='responsiveGridCompa'></p>
                <p>Secondary Material</p><p className='text-center'>Solid Wood</p><p className='text-center'>Solid Wood</p><p className='responsiveGridCompa'></p>
                <p>Configuration</p><p className='text-center'>L-shaped</p><p className='text-center'>L-shaped</p><p className='responsiveGridCompa'></p>
                <p>Upholstery Material</p><p className='text-center'>Fabric + Cotton</p><p className='text-center'>Fabric + Cotton</p><p className='responsiveGridCompa'></p>
                <p>Upholstery Color</p><p className='text-center'>Bright Grey & Lion</p><p className='text-center'>Bright Grey & Lion</p><p className='responsiveGridCompa'></p>
            </div>
            <div className="grid gridtempaclos grid-cols-4 w-[80vw] m-auto my-[3em] gap-y-5">
                <h2 className='text-3xl'>Dimensions  </h2><p></p><p></p><p className='responsiveGridCompa'></p>
                <p>Filling Material</p><p className='text-center'>Foam</p><p className='text-center'>Matte</p><p className='responsiveGridCompa'></p>
                <p>Finish Type</p><p className='text-center'>Bright Grey & Lion</p><p className='text-center'>Bright Grey & Lion</p><p className='responsiveGridCompa'></p>
                <p>Adjustable Headrest</p><p className='text-center'>No</p><p className='text-center'>yes</p><p className='responsiveGridCompa'></p>
                <p>Maximum Load Capacity</p><p className='text-center'>280 KG</p><p className='text-center'>300 KG</p><p className='responsiveGridCompa'></p>
                <p>Origin of Manufacture</p><p className='text-center'>India</p><p className='text-center'>India</p><p className='responsiveGridCompa'></p>
            </div>
            <div className="grid gridtempaclos grid-cols-4 w-[80vw] m-auto my-[3em] gap-y-5">
                <h2 className='text-3xl'>Dimensions  </h2><p></p><p></p><p></p>
                <p>Width</p><p className='text-center'>265.32 cm</p><p className='text-center'>265.32 cm</p><p className='responsiveGridCompa'></p>
                <p>Height</p><p className='text-center'>76 cm</p><p className='text-center'>76 cm</p><p className='responsiveGridCompa'></p>
                <p>Depth</p><p className='text-center'>167.76 cm</p><p className='text-center'>167.76 cm</p><p className='responsiveGridCompa'></p>
                <p>Weight</p><p className='text-center'>45 KG</p><p className='text-center'>65 KG</p><p className='responsiveGridCompa'></p>
                <p>Seat Height</p><p className='text-center'>41.52 cm</p><p className='text-center'>41.52 cm</p><p className='responsiveGridCompa'></p>
                <p>Leg Height</p><p className='text-center'>5.46 cm</p><p className='text-center'>5.46 cm</p><p className='responsiveGridCompa'></p>
            </div>
            <div className="grid gridtempaclos grid-cols-4 w-[80vw] m-auto my-[3em] gap-y-5">
                <h2 className='text-3xl'>Warranty  </h2><p></p><p></p><p></p>
                <p>Warranty Summary</p><p className='text-center'>1 Year Manufacturing Warranty</p><p className='text-center'>1.2 Year Manufacturing Warranty</p><p className='responsiveGridCompa'></p>
                <p>Warranty Service Type</p><p className='text-center'>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p><p className='text-center'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p><p className='responsiveGridCompa'></p>
                <p>Covered in Warranty</p><p className='text-center'>Warranty Against Manufacturing Defect</p><p className='text-center'>Warranty of the product is limited to manufacturing defects only.</p><p className='responsiveGridCompa'></p>
                <p>Not Covered in Warranty</p><p className='text-center'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p><p className='text-center'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p><p className='responsiveGridCompa'></p>
                <p>Domestic Warranty</p><p className='text-center'>1 Year</p><p className='text-center'>3 Months</p><p className='responsiveGridCompa'></p>
                <p></p><button className='btn m-auto'>Add To Cart</button><button className='btn m-auto'>Add To Cart</button><p className='responsiveGridCompa'></p>
            </div>
        </div>
        <TrustComp />
    </div>
  )
}

export default Comparison
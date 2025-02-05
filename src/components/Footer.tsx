import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="border-t-2">
      {/* Upper Footer */}
      <div className="upperFooter flex flex-col md:flex-row justify-between w-[90vw] md:w-[80vw] mx-auto pt-6 pb-6 border-b-2 gap-6 md:gap-0">
        {/* Brand and Address */}
        <div className="footerBox flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-3xl">CozyCorner.</h2>
          <p className="text-sm md:text-base">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>
        {/* Links */}
        <div className="footerBox flex flex-col gap-4 md:gap-6">
          <p className="text-gray-400 text-sm md:text-base">Links</p>
          <div className="innerFooterBox flex flex-col gap-3">
            <Link href={'/'}>Home</Link>
            <Link href={'/shop'}>Shop</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
          </div>
        </div>
        {/* Help */}
        <div className="footerBox flex flex-col gap-4 md:gap-6">
          <p className="text-gray-400 text-sm md:text-base">Help</p>
          <div className="innerFooterBox flex flex-col gap-3">
            <Link href={'/'}>Payment Options</Link>
            <Link href={'/shop'}>Returns</Link>
            <Link href={'/about'}>Privacy Policies</Link>
          </div>
        </div>
        {/* Newsletter */}
        <div className="footerBox flex flex-col gap-4 md:gap-6">
          <p className="text-gray-400 text-sm md:text-base">Newsletter</p>
          <div className="innerFooterBox flex flex-col sm:flex-row gap-4 sm:gap-2">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-[#5f5f5f] outline-none w-full sm:w-auto"
            />
            <button className="border-b-2 border-[#5f5f5f] px-3 py-1 sm:py-0">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      {/* Lower Footer */}
      <div className="lowerFooter p-4 w-[90vw] md:w-[80vw] mx-auto text-center">
        <p className="text-sm md:text-base">2023 CozyCorner. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

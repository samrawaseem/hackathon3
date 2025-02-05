import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

interface Product {
  id: string; // Unique identifier for each product
  img: string;
  name: string;
  short: string;
  salePrice?: string; // Optional field
  originalPrice?: string; // Optional field (corrected typo)
}

const Products: Product[] = [
  {
    id: '1',
    img: 'https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg',
    name: 'Syltherine',
    short: 'Stylish cafe chair',
  },
  {
    id: '2',
    img: 'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg',
    name: 'Leviosa',
    short: 'Stylish cafe chair',
    salePrice: 'Rp 2.500.000',
    originalPrice: 'Rp 3.500.000',
  },
  {
    id: '3',
    img: 'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg',
    name: 'Lolito',
    short: 'Luxury big sofa',
    salePrice: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
  },
  {
    id: '5',
    img: 'https://media.designcafe.com/wp-content/uploads/2023/07/05120553/glass-furniture-design.jpg',
    name: 'Grifo',
    short: 'Night lamp',
    salePrice: 'Rp 1.500.000',
  },
  {
    id: '2',
    img: 'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg',
    name: 'Leviosa',
    short: 'Stylish cafe chair',
    salePrice: 'Rp 2.500.000',
    originalPrice: 'Rp 3.500.000',
  },
  {
    id: '4',
    img: 'https://www.realsimple.com/thmb/kRRAaK6XhZIqL_GFIxfZzHTHx7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furniture-styles-GettyImages-1467984982-512fed4077b646eabbc187619554d517.jpg',
    name: 'Respira',
    short: 'Outdoor bar table and stool',
    salePrice: 'Rp 500.000',
  },
  {
    id: '5',
    img: 'https://media.designcafe.com/wp-content/uploads/2023/07/05120553/glass-furniture-design.jpg',
    name: 'Grifo',
    short: 'Night lamp',
    salePrice: 'Rp 1.500.000',
  },
  {
    id: '6',
    img: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    name: 'Muggo',
    short: 'Small mug',
    salePrice: 'Rp 150.000',
  },
];

const HomeGallery: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 px-4 py-8">
      <h3 className="text-xl text-center text-gray-600">Share your setup with</h3>
      <h2 className="text-4xl text-center font-bold text-gray-800">#FuniroFurniture</h2>
      <div className="galleryHome grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Products.map((product, index) => (
          <div
            key={index} // Use the unique id
            className="galleryItem relative overflow-hidden"
            style={{
              gridRow: `span ${Math.floor(Math.random() * 2) + 1}`, // Randomly span 1 or 2 rows
              gridColumn: `span ${Math.floor(Math.random() * 2) + 1}`, // Randomly span 1 or 2 columns
            }}
          >
            <div className="imageContainer relative w-full h-48 md:h-64 lg:h-80">
              <Image
                src={product.img}
                alt={product.name} // Add alt text for accessibility
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
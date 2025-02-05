'use client'
import React from 'react';

// Static image imports
import cate1 from './Images/Images/cateimg1.png';
import cate2 from './Images/Images/cateimg2.png';
import cate3 from './Images/Images/cateimg3.png';
import Card1 from './cards/Card1';

const Category = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
      <Card1 img={cate1} title="Dining" />
      <Card1 img={cate2} title="Living" />
      <Card1 img={cate3} title="Bedroom" />
    </div>
  );
};

export default Category;

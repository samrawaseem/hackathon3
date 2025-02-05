// schemas/cart.js
export default {
  name: 'cart',
  type: 'document',
  title: 'Cart',
  fields: [
      {
          name: 'name',
          type: 'string',
          title: 'Name',
      },
      {
          name: 'price',
          type: 'number',
          title: 'Price',
      },
      {
          name: 'image',
          type: 'string',
          title: 'Image',
      },
  ],
};
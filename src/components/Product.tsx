import React from 'react';

const Product = () => {
  const product = {
    name: "Qara Oniks Açarliq",
    price: "45 AZN",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="border p-4 rounded shadow max-w-sm">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.price}</p>
      <button className="mt-2 px-4 py-1 bg-black text-white rounded">Səbətə at</button>
    </div>
  );
};

export { Product };
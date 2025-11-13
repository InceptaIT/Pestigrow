import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="
        bg-white rounded-xl shadow-lg overflow-hidden
        transition duration-300 ease-in-out transform
        hover:scale-[1.02] hover:shadow-2xl
        cursor-pointer
        flex flex-col
        justify-center items-center
        h-full
        
      "
      onClick={handleClick}
    >
      <img src={product.imageUrl} alt={product.name} className=" h-40  " />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-[#1b5e20] mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 md:text-base line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="hidden md:block mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="
              bg-[#2e7d32] text-white px-4 py-2 rounded-full
              hover:bg-[#1b5e20] transition duration-300 ease-in-out
              text-sm md:text-base
              w-full text-center
            "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

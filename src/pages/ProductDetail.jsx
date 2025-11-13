import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
        <p className="mt-4 text-lg">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-darkGreen transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 max-h-[500px]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg  w-70 h-80  "
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {product.longDescription}
          </p>
          <div className="mb-6">
            <span className="inline-block bg-green-100 text-darkGreen text-sm font-semibold px-3 py-1 rounded-full mr-2">
              Category:{" "}
              {product.category
                .replace("-", " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          </div>
          <button className="bg-darkGreen text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary transition duration-300 transform hover:scale-105">
            Add to Cart
          </button>
          <Link
            to="/products"
            className="ml-4 text-primary hover:underline transition duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaFilter,
  FaRedo,
  FaSeedling,
  FaFlask,
  FaLeaf,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

const mockCategories = [
  { name: "All Products", category: null, icon: FaRedo },
  { name: "Insecticides", category: "insecticide", icon: FaLeaf },
  { name: "Herbicides", category: "herbicide", icon: FaSeedling },
  { name: "Fungicides", category: "fungicide", icon: FaFlask },
  {
    name: "Plant Growth Regulators",
    category: "plant-growth",
    icon: FaChartLine,
  },
];

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || null);

  const allProducts = products || [];

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    if (category) {
      navigate(`?category=${category}`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
    }
  };

  const formatTitle = (slug) => {
    if (!slug) return "All Products";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-center text-[#1b5e20] mb-4 font-sans">
        {formatTitle(selectedCategory) + " Range"}
      </h1>
      <p className="text-xl text-center text-[#4a5568] mb-12 max-w-3xl mx-auto font-light">
        Explore our full catalog or filter by our core solutions for specialized
        crop care.
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
        <FaFilter className="text-3xl text-[#1b5e20] self-center hidden sm:block" />
        {mockCategories.map((cat) => {
          const isActive = cat.category === selectedCategory;
          return (
            <motion.button
              key={cat.name}
              onClick={() => handleCategorySelect(cat.category)}
              className={`
                                flex items-center px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md text-base
                                ${
                                  isActive
                                    ? "bg-[#1b5e20] text-white shadow-lg border border-[#1b5e20]"
                                    : "bg-white text-[#1b5e20] border border-[#d4edda] hover:bg-[#e8f5e8] hover:border-[#4caf50]"
                                }
                            `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon className="mr-2 w-4 h-4" />
              {cat.name}
            </motion.button>
          );
        })}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg border border-[#d4edda]">
          <h2 className="text-3xl font-bold text-[#e85e20] mb-4">
            No Products Found
          </h2>
          <p className="text-lg text-[#4a5568]">
            Try selecting a different category or view the{" "}
            <span
              className="text-[#1b5e20] font-semibold cursor-pointer"
              onClick={() => handleCategorySelect(null)}
            >
              All Products
            </span>{" "}
            list.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProductsPage;

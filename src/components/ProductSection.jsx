import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      icon: "fa-bug",
      title: "Insecticides",
      description:
        "Effective solutions to protect your crops from harmful insects and pests.",
    },
    {
      id: 2,
      icon: "fa-seedling",
      title: "Herbicides",
      description:
        "Control unwanted weeds and maximize your crop yield with our herbicides.",
    },
    {
      id: 3,
      icon: "fa-fan",
      title: "Fungicides",
      description:
        "Prevent and treat fungal diseases to ensure healthy crop growth.",
    },
    {
      id: 4,
      icon: "fa-chart-line",
      title: "Plant Growth",
      description:
        "Enhance plant growth and improve crop quality with our growth regulators.",
    },
  ];

  const handleProductClick = (productId) => {
    // Redirect to product details page with product ID
    window.location.href = `/product-details/${productId}`;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}
              onCardClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

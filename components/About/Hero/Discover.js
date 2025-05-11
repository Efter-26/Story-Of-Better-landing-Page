"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Discover() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://better-server-blush.vercel.app/products");
        setProductCount(response.data.length);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-section_titile mb-4 font-playfair">
          Discover <span className="text-better">Better E-Mart</span>
        </h2>
        <p className="text-lg text-gray-950 font-medium italic tracking-wide leading-relaxed">
          Your one-stop destination for over{" "}
          <strong className="text-teal-700">{productCount}+</strong> imported goods, food, beverages, and more.
        </p>
      </div>
    </section>
  );
}

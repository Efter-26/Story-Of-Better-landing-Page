"use client";

import Image from "next/image";

const chooseUsData = [
  {
    icon: "/images/icons/world.png",
    title: "Wide Selection",
    description: "Over 700+ imported goods to choose from.",
  },
  {
    icon: "/images/icons/delivery-truck.png",
    title: "Reliable Delivery",
    description: "Fast and secure delivery across Bangladesh.",
  },
  {
    icon: "/images/icons/wholesale.png",
    title: "Wholesale & Retail",
    description: "Options for both individual shoppers and businesses.",
  },
  {
    icon: "/images/icons/partnership.png",
    title: "Partnerships",
    description: "Vendors for leading super shops like Khulshi Mart.",
  },
  {
    icon: "/images/icons/call.png",
    title: "Customer Support",
    description: "Dedicated support team available to assist you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Us</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {chooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 group hover:bg-lime-50 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-lime-700">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

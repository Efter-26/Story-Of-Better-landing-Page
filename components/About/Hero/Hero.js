
"use client";
//import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full py-24 bg-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-lime-100 p-16 rounded-xl shadow-md md:w-1/2 w-full"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-7xl text-lime-600">Better</span>
          </h1>
          <p className="text-lg text-gray-600 italic font-medium tracking-wide">
          Crafting innovative solutions that elevate your brand ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 md:w-2/4 w-full flex justify-center"
        >
          <video
            src="/videos/animated-icon.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-[350px] h-[350px] object-contain"
          />
          {/* <Image
            src="/images/animated-icon.gif"
            alt="Animated Icon"
            width={320}
            height={320}
            className="object-contain"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}


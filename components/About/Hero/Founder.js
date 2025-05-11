"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Founder() {
    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

                <div className="md:w-1/3 w-full flex justify-center md:justify-start">
                    <motion.div
                        className="flex flex-col justify-center h-full md:h-[300px]"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-gray-800">
                            Meet the <span className="text-green-700">Founders</span>
                        </h2>
                    </motion.div>
                </div>


                <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-7 place-items-center">

                    {[
                        {
                            name: "Zulkar Nine Quadery",
                            title: "Chairman",
                            phone: "+880 1744-243794",
                            email: "zulkarninequadery09@gmail.com",
                        },
                        {
                            name: "Asif Uddin",
                            title: "CEO",
                            phone: "+880 1750-134034",
                            email: "asifarman.aa@gmail.com",
                        },
                        {
                            name: "Faizul Absar",
                            title: "Head of Supply Chain",
                            phone: "+880 1881-896962",
                            email: "fabser19@gmail.com",
                        },
                        {
                            name: "Rashedul Islam",
                            title: "Lead Developer",
                            phone: "+880 1330-803463",
                            email: "muhammadrashedul8@gmail.com",
                        },
                    ].map((founder, index) => (
                        <div
                            key={index}
                            className="bg-purple-100 shadow-md p-6 rounded-lg w-[280px] flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                        >
                            <div className="w-24 h-24 rounded-full border-2 border-teal-600 overflow-hidden mb-4">
                                <img
                                    src="/images/logo.png"
                                    alt={founder.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{founder.name}</h3>
                            <p className="text-lg text-slate-950 mb-2">{founder.title}</p>
                            <p className="text-gray-700">
                                {founder.title === "Chairman"
                                    ? "Visionary leader guiding Better to success."
                                    : founder.title === "CEO"
                                        ? "Driving innovation and growth at Better."
                                        : founder.title === "CFO"
                                            ? "Ensuring financial stability and strategic investments."
                                            : "Building cutting-edge technology for Better."}
                            </p>
                            <p className="text-sm text-gray-700 mt-2">📞 {founder.phone}</p>
                            <a
                                href={`mailto:${founder.email}`}
                                className="text-blue-600 underline text-sm mt-1 inline-block"
                            >
                                ✉️ {founder.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

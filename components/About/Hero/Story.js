"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Story() {
    //first section
    const controls1 = useAnimation();
    const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });

    //second section
    const controls2 = useAnimation();
    const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView1) {
            controls1.start("visible");
        } else {
            controls1.start("hidden"); 
        }
    }, [inView1, controls1]);

    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
        } else {
            controls2.start("hidden");
        }
    }, [inView2, controls2]);

    return (
        <div>
            
            <section ref={ref1} className="w-full py-10 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
                    
                    <motion.div
                        initial="hidden"
                        animate={controls1}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2 w-full"
                    >
                        <Image
                            src="/images/story.jpg"
                            alt="Our Story"
                            width={600}
                            height={500}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </motion.div>

                    
                    <motion.div
                        initial="hidden"
                        animate={controls1}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="bg-indigo-100 p-6 rounded-xl shadow-md md:w-1/2 w-full"
                    >
                        <h2 className="text-4xl font-bold text-lime-700 mb-4">Our Story</h2>
                        <p className="text-lg leading-relaxed font-medium text-gray-600">
                            Better E-Mart began with one goal — to bring the world’s best imported goods right to your doorstep.
                            From a small dream to becoming a trusted name across Bangladesh, we’ve grown by staying true to quality, care, and customer trust. Today, we proudly supply both retail shoppers and top super shops like Khulshi Mart, offering everything from global snacks and beverages to household and personal care items.
                            Whether you're buying for yourself or for business, Better E-Mart has your back — with premium products, fair prices, and fast delivery. 🌍✨
                        </p>
                    </motion.div>
                </div>
            </section>

            
            <section ref={ref2} className="w-full py-10 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
                    
                    <motion.div
                        initial="hidden"
                        animate={controls2}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="bg-indigo-100 p-6 rounded-xl shadow-md md:w-1/2 w-full"
                    >
                        <h2 className="text-4xl font-bold text-lime-700 mb-4">Our Values</h2>
                        <ul className="text-lg leading-relaxed font-medium text-gray-600 space-y-2 list-none">
                            <li>✅ Quality: We ensure the best quality products.</li>
                            <li>✅ Freshness: Our items are always fresh and carefully sourced.</li>
                            <li>✅ Convenience: Easy and smooth shopping experience.</li>
                            <li>✅ Trust: Building long-term relationships with our customers.</li>
                            <li>✅ Innovation: Constantly improving our services to meet needs.</li>
                            <li>✅ Transparency: Clear communication and honest practices.</li>
                        </ul>
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        animate={controls2}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2 w-full"
                    >
                        <Image
                            src="/images/values.jpg"
                            alt="Our Values"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

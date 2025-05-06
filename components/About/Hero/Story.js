"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Story() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div>
            <section ref={ref} className="w-full py-10 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

                    {/*Image side*/}
                    <motion.div
                        initial="hidden"
                        animate={controls}
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

                    {/*Text side */}
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="bg-lime-100 p-6 rounded-xl shadow-md md:w-1/2 w-full"
                    >
                        <h2 className="text-4xl font-bold text-lime-700 mb-4">
                            Our Story
                        </h2>
                        <p className="text-lg leading-relaxed font-medium text-gray-600">
                            Better E-Mart began with one goal — to bring the world’s best imported goods right to your doorstep.
                            From a small dream to becoming a trusted name across Bangladesh, we’ve grown by staying true to quality, care, and customer trust. Today, we proudly supply both retail shoppers and top super shops like Khulshi Mart, offering everything from global snacks and beverages to household and personal care items.
                            Whether you're buying for yourself or for business, Better E-Mart has your back — with premium products, fair prices, and fast delivery. 🌍✨
                        </p>
                    </motion.div>

                </div>
            </section>

            <section ref={ref} className="w-full py-10 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

                    {/*Text side */}
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="bg-lime-100 p-6 rounded-xl shadow-md md:w-1/2 w-full"
                    >
                        <h2 className="text-4xl font-bold text-lime-700 mb-4">
                            Our Values
                        </h2>
                        <ul className="text-lg leading-relaxed font-medium text-gray-600 space-y-2 list-none">
                            <li>✅ Quality: We ensure the best quality products.</li>
                            <li>✅ Freshness: Our items are always fresh and carefully sourced.</li>
                            <li>✅ Convenience: Easy and smooth shopping experience.</li>
                            <li>✅ Trust: Building long-term relationships with our customers.</li>
                            <li>✅ Innovation: Constantly improving our services to meet your needs.</li>
                            <li>✅ Transparency: Clear communication and honest practices.</li>
                        </ul>

                    </motion.div>

                    {/*Image side*/}
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2 w-full"
                    >
                        <Image
                            src="/images/values.jpg"
                            alt="Our Story"
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

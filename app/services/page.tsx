"use client"
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";
import AVATAR from '@/public/avatar4.webp'
import { motion } from "framer-motion";
import React from "react";
import Avatar from "@/components/Avatar";

const Services = () => {
    return (
        <div className="h-full bg-primary/30 py-36 xl:pt-20 xl:pb-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            className="h2 xl:mt-8"
                        >
                            My Service<span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                        >
                            With my services, you will get stunning networking, inspiring web design, reliable web development, and SEO optimization for your digital success.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        className="w-full xl:max-w-[65%]"
                    >
                        <ServiceSlider />
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[1100px] max-h-[400px] xl:flex absolute bottom-0 left-[30rem]"
            >

            </motion.div>
            <Bulb />
        </div>
    );
};

export default Services;

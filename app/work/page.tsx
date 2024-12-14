"use client";
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import React from "react";
import Avatar from "@/components/Avatar";
import AVATAR from '@/public/avatar5.gif'

const Work = () => {
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
                            Kerjaan Guech<span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                        >
                            intinya ini kerjaan guech.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        className="w-full xl:max-w-[65%]"
                    >
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[537px] max-h-[478px] xl:flex absolute bottom-[3rem] left-[10rem]"
            >
                <Avatar image={AVATAR} width={537} height={478}/>
            </motion.div>
            <Bulb />
        </div>
    );
};

export default Work;

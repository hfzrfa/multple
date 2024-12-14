"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import YouTube from "react-youtube";
import Link from "next/link";

const Wibu = () => {
    const option = {
        width: "1000",
        height: "600",
        // 720
    };
    const option2 = {
        width: "400",
        height: "300",
        // 720
    };
    return (
        <div className="h-full bg-primary/30">
            <Circles />
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                {/* teks & form */}
                <div className="flex flex-col xl:w-full max-w-[1000px]">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="h2 text-center mb-12"
                    >
                        waifu gue <span className="text-accent">robin.</span>
                        <br />
                        <span className="font-light text-sm">
                            kalo real waifu sih chevy, candu bat suarany cok
                        </span>
                    </motion.h2>
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="hidden xl:flex"
                    >
                        <YouTube
                            videoId="QbPtrnmGlZ8"
                            onReady={(event) => event.target.pauseVideo}
                            opts={option}
                            onError={() =>
                                alert(
                                    "Video is brokeng, please try yang lain 😙"
                                )
                            }
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="flex xl:hidden"
                    >
                        <YouTube
                            videoId="QbPtrnmGlZ8"
                            onReady={(event) => event.target.pauseVideo}
                            opts={option2}
                            onError={() =>
                                alert(
                                    "Video is brokeng, please try yang lain 😙"
                                )
                            }
                        />
                    </motion.div>
                </div>
                <Bulb />
            </div>
        </div>
    );
};

export default Wibu;

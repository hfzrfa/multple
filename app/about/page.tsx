"use client";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import AVATAR1 from '@/public/avatar2.webp'
import AVATAR2 from '@/public/avatar3.webp'
import { motion } from "framer-motion";
import React, { useState } from "react";
import CountUp from "react-countup";
import ParticlesContainer from "@/components/ParticlesContainer";
// icons
import {
    FaAndroid,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNetworkWired,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiLaravel,
    SiXampp,
    SiPhp,
    SiTypescript,
    SiMysql,
    SiMongodb,
    SiSupabase,
    SiFirebase,
    SiDart,
    SiFlutter,
} from "react-icons/si";
import Avatar from "@/components/Avatar";

//  data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Frontend Development",
                icons: [
                    <FaAndroid />,
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaJs />,
                    <SiTypescript />,
                    <SiDart />,
                    <FaReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <SiFlutter />,
                ],
                stage: null,
            },
            {
                title: "UI/UX Design",
                icons: [<FaFigma />],
            },
            {
                title: "Backend Development",
                icons: [
                    <SiPhp />,
                    <SiTypescript />,
                    // <SiLaravel />,
                    // <SiNextdotjs />,
                    // <SiMysql />,
                    // <SiMongodb />,
                    // <SiSupabase />,
                    // <SiFirebase />,
                    <SiXampp />,
                ],
            },
            {
                title: "Networking",
                icons: [
                    <FaNetworkWired />,
                ],
            },
        ],
    },
    {
        title: "Education",
        info: [
            {
                title: "Telkom University",
                stage: "2024",
                icons: [],
            },
        ],
    },
    // {
    //     title: "experience",
    //     info: [
    //         {
    //             title: "CO FOUNDER - RanchDeveloperx Agency",
    //             stage: "2022 - until now",
    //             icons: [],
    //         },
    //     ],
    // },
    {
        title: "credentials",
        info: [
            {
                title: "Network Engineer",
                stage: "2023 - 2024",
                icons: [],
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary/30 py-32 xl:pt-[7rem] xl:pb-[8rem] text-center xl:text-left">
            <Circles />
            {/* avatar */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[737px] max-h-[678px] xl:flex absolute bottom-0 -left-[250px]"
            >

            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[650px] max-h-[550px] xl:flex absolute bottom-0 left-[53rem]"
            >

            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

            <div className="">
                <ParticlesContainer/>
            </div>
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="h2"
                    >
                        About <span className="text-accent">Me</span>,

                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                    >
                        In 2021, I became interested in the IT world. I started learning programming and design. I learned many things, from frontend, backend, to UI/UX design. I also learned about computer networks and information security. I hope to become an expert in this field.
                    </motion.p>
                    {/* count */}
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx:auto xl:mx-0 mb-8"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            {/* experien */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={1} duration={10} />+
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of Experience
                                </div>
                            </div>
                            {/* client */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={10} duration={7} />+
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Satisfied Clients
                                </div>
                            </div>
                            {/* project */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={100} duration={7} />
                                    +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Finished Project
                                </div>
                            </div>
                            <div className="relative flex-1">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={1} duration={10} />+
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Winning Awards
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* info */}
                <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full xl:max-w-[50%] h-[480px]"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${
                                        index === itemIndex &&
                                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start z-0">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                >
                                    {/* title */}
                                    <div className="font-light mb-2 md:mb-0">
                                        {item.title}
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>
                                    <div className="flex gap-x-4">
                                        {/* icons */}
                                        {item.icons?.map((icon, itemIndex) => {
                                            return (
                                                <div
                                                    key={itemIndex}
                                                    className="text-2xl text-white"
                                                >
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

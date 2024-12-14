"use client";
import Image from "next/image";
import ProjectsBtn from "@/components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ParticlesContainer from "@/components/ParticlesContainer";
import PP from "@/public/1.png";

export default function Home() {
    return (
        <div className="bg-primary/60 h-full">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="h1"
                    >
                        Hafiz Rafie <br />
                        <span className="text-accent">Aditya</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
                    >
                        I am a student at Telkom University, majoring in Computer Technology. In the course of my studies, I have mastered several programming languages, such as HTML, CSS, JavaScript, and PHP. These skills help me in developing responsive and dynamic web applications. I always strive to improve my technical skills to achieve deeper expertise in this field.
                    </motion.p>
                    <div className="flex justify-center xl:hidden relative">
                        <ProjectsBtn />
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="hidden xl:flex"
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
                {/* Particle Effects */}
                <ParticlesContainer />
                {/* Avatar */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[10%]"
                >
                    <Image src={PP} alt="Avatar" width={550} height={600} priority draggable="false"/>
                </motion.div>
            </div>
        </div>
    );
}

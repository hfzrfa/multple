"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import AVATAR1 from '@/public/avatar6.webp'
import AVATAR2 from '@/public/avatar7.webp'
import Avatar from "./Avatar";

const KataMereka = ({ kata }: any) => {
    return (
        <div className="container mx-auto h-full flex flex-col justify-center">
            <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[487px] max-h-[428px] xl:flex absolute bottom-0 left-[64rem]"
            >
                <Avatar image={AVATAR1} width={487} height={428} />
            </motion.div>
            <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="hidden w-full h-full max-w-[486px] max-h-[428px] xl:flex absolute bottom-0 left-[15rem]"
            >
                <Avatar image={AVATAR2} width={487} height={428} />
            </motion.div>
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="h2 mb-8 xl:mb-0"
            >
                Apa Kata <span className="text-accent">Mereka.</span>
            </motion.h2>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
            >
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="h-[400px]"
                >
                    {kata.map((person: any, index: any) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                                    <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="mb-2 mx-auto">
                                                <Image
                                                    src={
                                                        person.avatar as string
                                                    }
                                                    alt=""
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="text-lg">
                                                {person.username ||
                                                    person.email}
                                            </div>
                                            <div className="text-[12px] uppercase font-extralight tracking-widest">
                                                Orang
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                                        <div className="mb-4">
                                            <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                                        </div>
                                        <div className="xl:text-lg text-center md:text-left">
                                            {person.content}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </motion.div>
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="h2 mt-10 xl:mt-14 flex justify-center items-center"
            >
                <Link
                    href="/katamereka/create"
                    className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-lg">
                        Mari Berkata
                    </span>
                    <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </Link>
            </motion.h2>
        </div>
    );
};

export default KataMereka;

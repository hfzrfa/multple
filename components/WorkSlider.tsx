"use client";
// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    url: "https://ruangwibu.vercel.app/#",
                    path: "/thumb1.webp",
                },
                {
                    url: "https://diary-diary-cuy-aqmj.vercel.app/",
                    path: "/thumb2.webp",
                },
                {
                    url: "https://warkopbaruga.blue",
                    path: "/thumb3.webp",
                },
                {
                    url: "https://cvyusuf.com",
                    path: "/thumb4.webp",
                },
            ],
        },
        {
            images: [
                {
                    url: "https://poscuy.fund",
                    path: "/thumb5.webp",
                },
                {
                    url: "https://altarmiz.blue",
                    path: "/thumb6.webp",
                },
                {
                    url: "https://ranchdeveloperx.com",
                    path: "/thumb7.webp",
                },
                {
                    url: "https://akmbi.netlify.app/view/",
                    path: "/thumb8.webp",
                },
            ],
        },
    ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            {slide.images.map((image, index) => {
                                return (
                                    <div
                                        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                                        key={index}
                                    >
                                        <div className="flex items-center justify-center relative overflow-hidden group">
                                            <Image
                                                src={image.path}
                                                width={500}
                                                height={300}
                                                alt=""
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-[6.1rem] transition-all duration-300">
                                                <Link href={`${image.url}`} className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                    <div className="delay-100">
                                                        LIVE
                                                    </div>
                                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                        PROJECT
                                                    </div>
                                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                        <BsArrowRight />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default WorkSlider;

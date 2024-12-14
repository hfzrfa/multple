"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/variants";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import { createTestimonialAction } from "@/actions/createTestimonialAction";

const page = () => {
    return (
        <div className="h-full bg-primary/30">
            <Circles />
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                {/* teks & form */}
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="h2 text-center mb-12"
                    >
                        Mari {" "}
                        <span className="text-accent">Berkata.</span>
                    </motion.h2>
					<motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
						className="flex-1 flex flex-col gap-6 w-full mx-auto"
						action={createTestimonialAction}
                    >
                        <textarea
                            placeholder="message"
							className="textarea"
							name="content"
                        ></textarea>
                        <div className="flex justify-center">
                            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group" type="submit">
                                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Send It
                                </span>
                                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                            </button>
                        </div>
                    </motion.form>
                </div>
                <Bulb />
            </div>
        </div>
    );
};

export default page;
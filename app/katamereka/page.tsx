// "use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import KataMereka from "@/components/KataMereka";
import { supabase } from "@/utils/supabase";
import React from "react";

export const revalidate = 0;

const Testimonials = async() => {
	 const { data, error } = await supabase
         .from("testimonial")
         .select()
		 .order("id", { ascending: false });
	if (error) return <p>please reload the page...</p>;
    return (
        <div className="h-full bg-primary/30 py-32 text-center ">
			<Circles />
			<KataMereka kata={data}/>
            <Bulb />
        </div>
    );
};

export default Testimonials;

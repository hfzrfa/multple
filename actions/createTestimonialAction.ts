"use server";

import { getUserData } from "@/utils/clerk";
import { redirect } from "next/navigation";
import { supabase, IDiary } from "@/utils/supabase";
import { Redirect } from "next";

/** 
! REQUIREMENTS of testimonial tables:
	USER: email, username, avatar
	testimonial: content

*/

export const createTestimonialAction = async (
    formData: FormData
): Promise<Redirect> => {
    "use server";
    const content = formData.get("content") as string;
    const { avatar, email, username } = await getUserData();

    const data: IDiary = {
        content,
        email,
        username,
        avatar,
    };

    await supabase.from("testimonial").insert(data);

    redirect("/katamereka");
};

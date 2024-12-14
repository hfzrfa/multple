import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
);
// const supabaseUrl = "https://hwtumasbphsrekthkzix.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseUrl, supabaseKey as string);

export interface IDiary {
    testimonial_id?: number;
    content: string;
    email: string | undefined;
    username?: string | null;
    avatar: string | undefined;
    created_at?: string;
}

"use client";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Transition from "@/components/Transition";
import { ClerkProvider } from "@clerk/nextjs";

// export const metadata: Metadata = {
//     title: "Shaq Portofolio",
//     description: "Just For Fun",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	const pathName = usePathname();
    return (
        <html lang="en">
            <ClerkProvider>
                <body>
                    <Layout>
                        <AnimatePresence mode="wait">
                            <motion.div key={pathName} className="h-full">
                                <Transition />
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </Layout>
                </body>
            </ClerkProvider>
        </html>
    );
}

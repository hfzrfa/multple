"use client";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Transition from "@/components/Transition";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server'

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
                        <AnimatePresence >
                            <motion.div key={pathName} className="h-full">
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </Layout>
                </body>
            </ClerkProvider>
        </html>
    );
}

{/* <Transition /> */}
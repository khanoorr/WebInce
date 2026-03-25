"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/80 dark:bg-background/40 backdrop-blur-xl border border-black/10 dark:border-white/10 p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl shadow-primary/5 mx-2 sm:mx-0"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
                        Ready to <br className="block sm:hidden" /> <span className="text-gradient">Grow Your Business?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                        Let's discuss how we can create a powerful digital presence that transforms visitors into loyal customers.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-bold text-lg transition-transform hover:scale-105"
                    >
                        Start Your Project Today
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

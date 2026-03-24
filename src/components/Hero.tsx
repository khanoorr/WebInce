"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Image & Gradients */}
            <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
                alt="Team working"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.03] dark:opacity-10 pointer-events-none"
            />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-neutral-600 dark:text-neutral-300 backdrop-blur-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Digital Agency for Modern Brands
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
                        We Take Your Business <br className="hidden md:block" />
                        <span className="text-gradient">Online & Scale It</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Elevate your online presence with professional website development, data-driven SEO strategy, and powerful social media marketing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                        >
                            Get Started
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="https://wa.me/910000000000?text=Hi%20I%20want%20to%20grow%20my%20business%20online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground rounded-full font-medium transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
                        >
                            <MessageCircle size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-black/20 dark:border-white/20 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-3 bg-black/50 dark:bg-white/50 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}

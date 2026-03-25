"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const points = [
        "Data-Driven Strategies",
        "Modern Web Technologies",
        "Conversion Focused Design",
        "Transparent Reporting"
    ];

    return (
        <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image / Graphic Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-black/10 dark:border-white/10 shadow-2xl shadow-primary/10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Our team collaborating"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 mix-blend-overlay z-10" />
                        </div>
                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-10 bg-background border border-black/10 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20 w-[90%] sm:w-auto justify-center sm:justify-start">
                            <div className="text-3xl sm:text-4xl font-bold text-gradient">50+</div>
                            <div className="text-xs sm:text-sm text-neutral-400 leading-tight">Projects <br /> Completed</div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <div>
                                <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-2">About WebInce</h2>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                                    Your Growth Partner in the Digital Age.
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    At WebInce, we are on a mission to help local businesses grow online and scale effectively. We don't just build websites; we create digital ecosystems designed to attract, engage, and convert your ideal customers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        <span className="text-foreground">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-black/10 dark:border-white/10">
                                <p className="text-neutral-500 italic">
                                    "Our success is measured entirely by the success and growth of the clients we serve."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

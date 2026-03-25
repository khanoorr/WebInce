"use client";

import { motion } from "framer-motion";
import { Code, Globe, Infinity, Search, LayoutTemplate, TrendingUp } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Website Development",
            description: "Custom, fast, and scalable websites built with modern technologies like Next.js and React.",
            icon: <Code className="w-6 h-6 text-primary" />,
        },
        {
            title: "SEO Optimization",
            description: "Rank higher on search engines and drive organic traffic to your business.",
            icon: <Search className="w-6 h-6 text-blue-400" />,
        },
        {
            title: "Landing Page Design",
            description: "High-converting landing pages tailored to turn your visitors into customers.",
            icon: <LayoutTemplate className="w-6 h-6 text-pink-400" />,
        },
        {
            title: "Social Media Marketing",
            description: "Engaging content and strategic campaigns to grow your brand's presence online.",
            icon: <Globe className="w-6 h-6 text-green-400" />,
        },
        {
            title: "Business Growth",
            description: "Comprehensive digital strategies to scale your revenue and hit your targets.",
            icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
        },
        {
            title: "Online Presence",
            description: "End-to-end management of how your brand appears across the entire internet.",
            icon: <Infinity className="w-6 h-6 text-purple-400" />,
        },
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Our Core <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        We offer a full suite of digital marketing and development services designed to help local businesses thrive in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 md:p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-primary/50 transition-colors group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-xl bg-background border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

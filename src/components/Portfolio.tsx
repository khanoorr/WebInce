"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
    const projects = [
        {
            title: "Luxe Estates Landing Page",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Fintech Dashboard UI",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Organic Store E-commerce",
            category: "Full Stack Development",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Tech Startup SEO Campaign",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <section id="work" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                            Featured <span className="text-primary">Work</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                            Explore some of our recent projects where we've helped businesses transform their digital presence.
                        </p>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden md:block text-foreground">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <div className="aspect-video w-full relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div>
                                    <p className="text-primary font-medium tracking-wide text-sm mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-300 shadow-xl">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

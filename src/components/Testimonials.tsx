"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, StartUp Solutions",
            content: "WebInce completely transformed our online presence. Our lead generation increased by 300% within the first three months of launching the new site.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Founder, FreshBites",
            content: "The team's attention to detail and understanding of modern digital marketing strategies gave us the edge we needed. Highly recommended!",
            rating: 5,
        },
        {
            name: "Emma Williams",
            role: "Director, Luxe Real Estate",
            content: "Professional, responsive, and incredibly talented. They didn't just build a website; they built a powerful engine for our business growth.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Client <span className="text-primary">Testimonials</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        Don't just take our word for it. Here's what our partners have to say about working with WebInce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm relative mx-2 sm:mx-0"
                        >
                            <div className="flex gap-1 mb-5 md:mb-6 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-6 md:mb-8 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

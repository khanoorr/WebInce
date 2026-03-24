"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
            } else {
                setError("Failed to send message. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-3xl h-full flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                                    We're open for any suggestion or just to have a chat about your next big idea.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium mb-1">Address</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400">Sanjay Nagar,Malad East<br />Mumbai, 400097</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium mb-1">Phone</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400">+91 7208809892</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium mb-1">Email</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400">khanoorr3@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-neutral-50 dark:bg-background border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-neutral-50 dark:bg-background border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full bg-neutral-50 dark:bg-background border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full bg-neutral-50 dark:bg-background border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                                        >
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Website Development">Website Development</option>
                                            <option value="SEO Optimization">SEO Optimization</option>
                                            <option value="Social Media Marketing">Social Media Marketing</option>
                                            <option value="Landing Page Design">Landing Page Design</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-neutral-50 dark:bg-background border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {error && <p className="text-red-400 text-sm">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={isSubmitting || success}
                                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : success ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            Message Sent
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {success && (
                                    <p className="text-green-400 text-sm mt-4">
                                        Thank you for reaching out! We'll get back to you shortly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

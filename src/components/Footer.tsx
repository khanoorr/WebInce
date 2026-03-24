import Link from "next/link";
import { Globe, MessageSquare, Camera, Briefcase, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-black/10 dark:border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter block mb-4">
                            Web<span className="text-primary">Ince</span>
                        </Link>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            Empowering local businesses to thrive in the digital age with modern web solutions and proven marketing strategies.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <Camera className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <Briefcase className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Website Development</Link></li>
                            <li><Link href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Landing Page Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#work" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link href="#testimonials" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                khanoorr3@gmail.com
                            </li>
                            <li>Sanjay Nagar,Malad East</li>
                            <li>Mumbai, MH 400097</li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-black/10 dark:border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()} WebInce Agency. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

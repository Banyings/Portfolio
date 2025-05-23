'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white  text-black font-sans">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col items-center space-y-6">
                    <nav className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href="https://github.com/Banyings?tab=repositories&utm_campaign=cta&utm_medium=topnav&utm_source=blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-black dark:hover:text-gray transition-colors duration-200 flex items-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            <span className="hover:underline">GitHub</span>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/hyppolite-banyingela-11369724a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-black dark:hover:text-gray transition-colors duration-200 flex items-center gap-2"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="hover:underline">LinkedIn</span>
                        </Link>

                        <Link
                            href="https://x.com/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-black dark:hover:text-gray transition-colors duration-200 flex items-center gap-2"
                        >
                            <Twitter className="w-5 h-5" />
                            <span className="hover:underline">Twitter</span>
                        </Link>

                        <Link
                            href="https://instagram.com/hpBannyings"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-black dark:hover:text-gray transition-colors duration-200 flex items-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="hover:underline">Instagram</span>
                        </Link>

                        <Link
                            href="/components/Contact"
                            className="text-black dark:text-black dark:hover:text-gray transition-colors duration-200 flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="hover:underline">Contact Me</span>
                        </Link>
                    </nav>

                    <p className="text-black dark:text-black text-sm font-normal">
                        &copy; Hyppolite Banyingela. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col items-center space-y-6">
                    <nav className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            <span className="hover:underline">GitHub</span>
                        </Link>

                        <Link
                            href="https://linkedin.com/in/yourusernam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="hover:underline">LinkedIn</span>
                        </Link>

                        <Link
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Twitter className="w-5 h-5" />
                            <span className="hover:underline">Twitter</span>
                        </Link>

                        <Link
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="hover:underline">Instagram</span>
                        </Link>

                        <Link
                            href="/Contact"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="hover:underline">Contact</span>
                        </Link>
                    </nav>

                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                        &copy; {currentYear} Hyppolite Banyingela. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
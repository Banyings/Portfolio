'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => pathname === path; // Helper to check if path is active

    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
            {/* Desktop Menu Container */}
            <div className="h-16 max-w-4xl mx-auto px-4 flex items-center justify-between">
                {/* Brand Name */}
                <Link href="/">
                    <div className="text-xl font-bold text-blue-600 cursor-pointer">
                        HpBanyingela
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center h-full gap-6 px-0">
                    <Link href="/" className="relative group">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/') ? 'text-blue-500' : ''
                            }`}
                        >
                            Home
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/About" className="relative group">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/About') ? 'text-blue-500' : ''
                            }`}
                        >
                            About
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/About') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/Projects" className="relative group">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/Projects') ? 'text-blue-500' : ''
                            }`}
                        >
                            Projects
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/Projects') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/Uses" className="relative group">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/Uses') ? 'text-blue-500' : ''
                            }`}
                        >
                            Uses
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/Uses') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out rounded-b-xl ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <ul className="px-4 py-2">
                    <Link href="/" className="block relative group py-2">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/') ? 'text-blue-500' : ''
                            }`}
                        >
                            Home
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/About" className="block relative group py-2">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/About') ? 'text-blue-500' : ''
                            }`}
                        >
                            About
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/About') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/Projects" className="block relative group py-2">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/Projects') ? 'text-blue-500' : ''
                            }`}
                        >
                            Projects
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/Projects') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                    <Link href="/Uses" className="block relative group py-2">
                        <li
                            className={`text-gray-700 font-medium cursor-pointer transition-colors ${
                                isActive('/Uses') ? 'text-blue-500' : ''
                            }`}
                        >
                            Uses
                            <span
                                className={`absolute bottom-0 left-0 ${
                                    isActive('/Uses') ? 'w-full' : 'w-0'
                                } h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

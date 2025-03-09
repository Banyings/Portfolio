'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    // Add an effect that runs when pathname changes
    useEffect(() => {
        // Close the menu whenever the path changes
        setIsOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => pathname === path; // Helper to check if path is active

    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
            {/* Desktop Menu Container */}
            <div className="h-16 max-w-4xl mx-auto px-4 flex items-center justify-between">
                {/* Brand Name */}
                <div className="text-xl font-bold text-blue-600 cursor-pointer">
                    HpBanyingela
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center h-full gap-6 px-0">
                    <Link href="/" className="relative">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href="/About" className="relative">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/About') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            About
                        </li>
                    </Link>
                    <Link href="/Projects" className="relative">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/Projects') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Projects
                        </li>
                    </Link>
                    <Link href="/Uses" className="relative">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/Uses') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Uses
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
                    <Link href="/" className="block relative py-2">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href="/About" className="block relative py-2">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/About') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            About
                        </li>
                    </Link>
                    <Link href="/Projects" className="block relative py-2">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/Projects') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Projects
                        </li>
                    </Link>
                    <Link href="/Uses" className="block relative py-2">
                        <li
                            className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isActive('/Uses') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            Uses
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}//
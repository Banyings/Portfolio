'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); 
    
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-gray-200 shadow-sm border-b">
            {/* Desktop Navbar */}
            <div className="h-20 px-6 md:px-20 flex items-center justify-between">
                {/* Brand Name */}
                <div className="text-xl font-bold text-blue-600 cursor-pointer">
                    HpBanyingela
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8">
                    {["/", "/components/About", "/components/Projects", "/components/Uses"].map((path, index) => (
                        <Link key={index} href={path}>
                            <li className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                isActive(path) ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
                            }`}>
                                {path === "/" ? "Home" : path.split("/").pop()}
                            </li>
                        </Link>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2">
                    {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out rounded-b-xl ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <ul className="px-4 py-2 space-y-2">
                    {["/", "/components/About", "/components/Projects", "/components/Uses"].map((path, index) => (
                        <Link key={index} href={path} className="block">
                            <li className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                isActive(path) ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
                            }`}>
                                {path === "/" ? "Home" : path.split("/").pop()}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

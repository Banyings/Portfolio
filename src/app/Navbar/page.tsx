
'use client';

import { useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
            {/* Desktop Menu Container */}
            <div className="h-16 max-w-7xl mx-auto px-4">
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center justify-center h-full gap-4">
                    <Link href="/">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            Home
                        </li>
                    </Link>

                    <Link href="/About" className="mx-4">
                    <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                        About
                    </li>
                    </Link>

                    <Link href="/Projects" className="mx-4">
                    <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                        Projects
                    </li>
                   </Link>

                    <Link href="/Uses">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            Uses
                        </li>
                    </Link>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center justify-end h-full">
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
                    <Link href="/" className="block py-2">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            Home
                        </li>
                    </Link>

                    <Link href="/About" className="block py-2">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            About
                        </li>
                    </Link>

                    <Link href="/Projects" className="block py-2">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            Projects
                        </li>
                    </Link>

                    <Link href="/Uses" className="block py-2">
                        <li className="text-gray-700 hover:underline font-medium cursor-pointer transition-colors">
                            Uses
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
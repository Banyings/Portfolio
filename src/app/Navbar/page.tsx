import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
            <ul className="flex items-center justify-center h-16 max-w-7xl mx-auto px-4">
                <Link href="/" className="mx-4"> 
                    <li className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                        Home
                    </li>
                </Link>

                <Link href="/About" className="mx-4">
                    <li className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                        About
                    </li>
                </Link>

                <Link href="/Projects" className="mx-4">
                    <li className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                        Projects
                    </li>
                </Link>

                <Link href="/Uses" className="mx-4"> 
                    <li className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                        Uses
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
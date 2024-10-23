import Link from "next/link"

export default function Navbar(){
    return(
        <nav>

            <ul>
                <Link href="/"> 
                  <li className="home"> Home </li>
                </Link>

                <Link href="/About">
                   <li className="about"> About </li>
                 </Link>

                <Link href="/Projects">
                   <li className="projects"> Projests</li>
                </Link>

                <Link href="/Uses"> 
                <li className="uses"> Uses</li>
                </Link>
            </ul>
        </nav>
    )
}
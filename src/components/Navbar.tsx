"use client"
import Link from "next/link";
import { useState } from "react"; 
import { HiOutlineMenuAlt3 } from "react-icons/hi";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className=" grid grid-cols-12 py-3 px-[20px] sm:px-[60px] bg-slate-100 dark:text-white shadow-lg">
      
        {/* Logo */}
        <Link href="/" className="text-xl md:pt-2 whitespace-nowrap font-bold font-Playwrite">
        Anus Blog
        </Link>

        {/* Mobile Menu Icon (Hamburger) */}
        
        <div className="md:hidden col-start-12" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HiOutlineMenuAlt3 className="dark:text-white  text-3xl" />
        </div>

        <div className="md:hidden flex col-span-full justify-center items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
             <div>
            
             <div  className="flex w-full flex-col mt-6 items-center h-full space-y-6 dark:text-white text-2xl">
              <Link href="/" className="">Home</Link>
              <Link href="/Blog" className="whitespace-nowrap">Recent Blog</Link>
              <Link href="/explore" className="whitespace-nowrap">Explore More</Link>
              
            </div>
            </div>
          ) : (
            <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>            
        </div>
          ) }
        </div>
        

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex md:col-start-10 space-x-8 justify-center items-center flex-grow">
          <li>
            <Link href="/" className="whitespace-nowrap dark:text-white hover:text-slate-300 text-lg relative group py-2">
              Home</Link>
          </li>
          <li>
            <Link href="/blog" className="whitespace-nowrap dark:text-white hover:text-slate-300 text-lg relative group py-2">
              Recent Blog</Link>
          </li>
          <li>
            <Link href="/explore" className="whitespace-nowrap dark:text-white hover:text-slate-300 text-lg relative group py-2">
              Explore More</Link>
          </li>
          <li className="flex gap-5">
            <Link href="/" className="whitespace-nowrap border-2 border-black px-2 rounded-sm dark:text-white hover:text-slate-300 text-lg relative group py-2">
              joinUs</Link>
              <Link href="/" className="whitespace-nowrap border-2 border-black bg-black px-2 rounded-sm text-white hover:text-slate-300 text-lg relative group py-2">
              Sign up</Link>
          </li>
         

          
        </ul>

        
    </nav>
  );
}

'use client'
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FiChevronRight,FiChevronDown } from "react-icons/fi";
import { useState,useEffect } from "react";


    const Header1 = () => {
        const [openMenu,setOpenMenu] = useState<string | null>(null)
        const[isScroll,setIscroll] = useState(false)
        const handleScroll = () =>{
        const scrolled = window.scrollY;
        setIscroll(scrolled > 1);
    };
     useEffect(() => {
        handleScroll();
        window.addEventListener('scroll',handleScroll);
        return() => window.removeEventListener("scroll",handleScroll);
    },[]);


    return(
      <header className="w-full min-h-[15vh] bg-[#F3EEE7]">
        <div className="max-w-[1580px] mx-auto flex flex-col">
            <div className="h-[10vh] flex items-center border-black justify-between">
                <div className="flex items-center justify-center gap-x-12">
                    <FaBars width={800} height={80}/>
                    <p className=" hidden md:block">Menu</p>
                    <BiSearch width={400} height={40} className="hidden lg:block"/>
                </div>
                <div className="">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.8 207.1" width="150" height="40">
                        <title>Aman resorts</title>
                        <path d="M355.7 44.7h-1.5c-57.4 119.2-58.4 126.7-63.8 139h-.4c-5.5-12.3-6.5-19.8-63.8-139h-1.6S210.2 204 204.6 204v.8h17.2v-.8c-4.2 0 8.4-112.5 9-125.5h.4a776 776 0 0 0 25.7 57.6c7.7 16 18.2 40.8 31.5 68.7h3.6c13.3-27.9 23.8-52.7 31.5-68.7a730.6 730.6 0 0 0 25.6-57.6h.4c.7 13 13.3 125.5 9.1 125.5v.8h17.1v-.8c-5.6 0-20-159.4-20-159.4M67.8 71.2h-.2c-2.6 7.6-31.9 80.6-31.9 80.6-17.4 43-20.5 51.2-18.4 52.3v.8H0v-.8c4.3 0 67.1-159.4 67.1-159.4h2s60 159.4 64.3 159.4v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.8-73-30.3-80.7m446.9.1h-.2c-2.6 7.6-32 80.6-32 80.6-17.3 43-20.5 51.2-18.3 52.3v.8h-17.3v-.8c4.3 0 67-159.4 67-159.4h2.1S576 204 580.3 204v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.9-73-30.3-80.7m251.9-23.7h-8v.8c1.5 0 2.7 9.5 2.7 67.7V178h-.4c-8.9-12.7-61.4-80-104-133.3h-1.6v91.7c0 58.2-2.5 67.7-3.9 67.7v.8h17.2v-.8c-1.3 0-2.6-9.5-2.6-67.7V73.7h.4c8.8 12.8 61.4 80 104 133.4h1.5v-91.3c0-58.2 2.6-67.7 4-67.7v-.8ZM43.1 0h48.3v10.5H43.1z"></path>
                     </svg>
                    </a>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-5">
                    <div className={`w-[7vw] h-[5vh] px-3 md:flex flex-row justify-center items-center relative hidden md:block ${ openMenu ? "bg-[white]":"bg-[#F3EEE7] w-"}`}>
                    <ul
                    onClick={() => setOpenMenu(openMenu === 'Language' ? null : "Language" )}
                   >
                        <li className="flex flex-row justify-center items-center gap-x-5 cursor-pointer">English <FiChevronDown className={` transition-transform duration-300 ${openMenu === "Language" ? "rotate-180" : "" }`}/></li>
                        <hr className="hidden xl:block"/>
                    </ul>

                   {openMenu === "Language" && (
                    <ul className="absolute w-[7vw] top-full flex flex-col gap-y-4 justify-center items-center mt-2 px-5 py-3 max-w-4xl bg-white  rounded">              
                            <li className=" cursor-pointer hover:">English</li>
                            <li className=" cursor-pointer">English</li>
                            <li className=" cursor-pointer">English</li>
                            <li className=" cursor-pointer">English</li>
                    </ul>
                   )}
                </div>
                <button className=" h-[5vh] px-5 bg-[#313131] text-[#F3EEE7]  hidden lg:block"> Reserve </button>
                <BiSearch size={24} className="block lg:hidden cursor-pointer" />
                </div>
            </div>
            <hr className="w-full hidden xl:block "/>

                <ul
                className={`w-full h-[5vh] hidden xl:flex justify-center items-center gap-x-5
                ${isScroll ? "fixed top-0 left-0 z-50 shadow-md" : "static"} bg-[#F3EEE7]`}>
                <li className="flex flex-row ">
                    <Link href="" className="flex flex-row justify-center items-center text-[25px] font-georgia opacity-50">Amankila <FiChevronRight size={25}/></Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Gallery</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Accomodation</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Experiences</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Dining</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Wellnes</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Celebrations</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Exclusive Offers</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Residences</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Getting Here</Link>
                </li>
                <li className="flex flex-row">
                    <Link href="" className="flex flex-row justify-center items-center font-light text-[15px] font-anaheim opacity-75">Contact Us</Link>
                </li>
            </ul>
            <hr className="hidden xl:block"/>
            </div>
      </header>
    );
}
export default Header1;
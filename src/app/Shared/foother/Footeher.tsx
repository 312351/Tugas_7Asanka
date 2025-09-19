
import Link from "next/link";
import React from 'react';
import {FaInstagram, FaYoutube, FaPinterest, FaWeibo, FaLine, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { SiWechat, SiXiaohongshu } from "react-icons/si";

import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
return(
    <footer className=" min-h-[25vh] bg-white py-12">
            <div className="max-w-[1580px] min-h-[5vh] mx-auto flex flex-col">
                <div className="w-full flex flex-col">
                  <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-[1fr,1fr,2fr] py-5 px-5">

                    <div className="col-span-full md:col-span-1 flex px-5">
                        <p className="uppercase font-georgia text-[20px] tracking-[5px] gap-5">Amankila</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-5">
                        <span>
                            <p className="font-anaheim opacity-50">Manggis <br /> Bali <br />Indonesia</p>
                        </span>
                        <div className="opacity-75">
                            <span className="flex flex-row whitespace-nowrap"><p>Tel :</p><p>+62 363 41333</p></span>
                            <span className="flex flex-row whitespace-nowrap"><p>For reservations :</p><p>+62 363 84 68585</p></span>
                            <span className="flex flex-row whitespace-nowrap"><p>Email :</p><p>amankila@gmail.com</p></span>
                        </div>
                    </div>
                    
                    <div className="">
                        <a href="" className="w-[5px]"><p className="font-anaheim text-[15px] tracking-wide opacity-75 underline">Get directions</p></a>
                    </div>
                    <div className="">
                        <p className="uppercase font-georgia text-[15px] tracking-[5px]"></p>
                    </div>
                    
                </div>
                <hr className="w-full h-[1px] bg-black"/>
                </div>
            </div>



            <div className="max-w-[1580px] min-h-[5vh] mx-auto flex flex-col">
                <div className="w-full flex flex-col">

                  <div className=" grid grid-cols-[1fr,1.5fr] md:grid-cols-[1fr,2fr,1fr] py-5 px-5">
                    <div className="">
                        <p className="font-georgia text-[30px] gap-5">Get inspired</p>
                    </div>

                    <div className="flex flex-row gap-x-5">
                            <p className="font-georgia opacity-50">To receive updates about exclusive experiences, events, new destinations and more, please register your interest.</p>
                    </div>
                    
                  <div className="col-span-full md:col-span-1 flex justify-center md:justify-end px-5">
                    <button className="w-full md:w-[15vw] py-2 bg-[#313131] text-white">
                    Sign Up
                    </button>
                  </div>
                </div>
                <hr className="w-full h-[1px] bg-black"/>
                </div>
            </div>
            <div className="max-w-[1580px] min-h-[5vh] mx-auto flex flex-col">
                <div className="w-full flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-[0.7fr,3fr] py-5 px-5">
                            <div className="w-full flex flex-col gap-y-5">
                                <h3 className="text-[25px] font-georgia tracking-wider">More Information</h3>
                                <ul className="font-anaheim flex flex-col text-[15px] opacity-75 gap-y-[1px]">
                                    <li className="hover:underline">
                                        <Link href="/"><p>Aman Group</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>- Aman</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>- Aman Essential</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>- Aman Interiors</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>- Aman at Sea</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>- Janu</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Gift Card</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Forthcoming Developments</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Careers</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Leadership</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Sustainability</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Privacy Notice</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Cookie Policy</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Legal Notice</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Digital Accessibility</p></Link>
                                    </li>
                                    <li className="hover:underline">
                                        <Link href="/"><p>Cookies Settings</p></Link>
                                    </li >
                                </ul>
                                <button className="w-[100px] h-[45px] border-black border-[1px] text-[15px]">Contact Us</button>
                            </div>



                            <div className="w-full flex flex-col gap-y-5">
                                <h3 className="text-[25px] font-georgia tracking-wider">Destinations</h3>
                                <div className="font-anaheim flex flex-col text-[15px] gap-y-[1px]">
                                    <div className="grid grid-cols-3  relative gap-y-[15px] gap-x-[15px]">
                                        <div className="order-1 flex flex-col">
                                                <p>Americas & Caribbean</p>
                                            <ul className="flex flex-col">
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanera, Dominican Republic</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amangani, United States, Reopening 2026</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amangiri, United States</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman New York, United States</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanvari, Opening 2026</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Miami Beach, Opening 2027</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Beverly Hills, Opening 2027</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amancaya, The Bahamas, Coming Soon</p></Link>
                                            </li>
                                            </ul>
                                        </div>
                                            <div className=" order-2 gap-x-5 h-[25vh]">
                                                 <Link href="/"><p className="hover:underline">Asia</p></Link>
                                            <ul>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanbagh, India</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amandari, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amandayan, China</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amandira, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanfayun, China</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amankila, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amankora, Bhutan</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Kyoto, Japan</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman-i-Khas, India</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanjiwo, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amansara, Cambodia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Maldives, Republic of Maldives, Coming Soon</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Summer Palace, China</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Villas at Nusa Dua, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanwana, Indonesia</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanyangyun, China</p></Link>
                                            </li>

                                        </ul>
                                       </div>
                                        <div className=" order-4 gap-x-5">
                                                 <Link href="/"><p className="hover:underline">Europe, Middle East & North Africa</p></Link>
                                            <ul>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Dubai, United Arab Emirates, Coming Soon</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanjena, Morocco</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Le Mélézin, France</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanruya, Turkey</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amansamar, Kingdom of Saudi Arabia, Coming Soon</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Sveti Stefan, Montenegro</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Venice, Italy</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanzoe, Greece</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Rosa Alpina, Italy</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Spa at The Connaught, United Kingdom</p></Link>
                                            </li>
                                        </ul>
                                       </div>


                                        
                                        <div className="order-3 flex flex-col h-[25vh]">
                                            <div className="hover:underline">
                                                  <Link href="/"><p>Asia (Continued)</p></Link>
                                             </div>
                                            <ul className="flex flex-col">
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amangalla, Sri Lanka</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanemu, Japan</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Residences, Tokyo, Japan</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amantaka, Laos</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Tokyo, Japan</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanoi, Vietnam</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanpulo, Philippines</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanpuri, Thailand</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Amanwella, Sri Lanka</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Nai Lert Bangkok, Thailand</p></Link>
                                            </li>
                                            <li className="hover:underline opacity-75">
                                                 <Link href="/"><p>Aman Niseko, Opening 2030</p></Link>
                                            </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    </div>
                            </div>
                        </div>
                </div>
                <hr className="w-full h-[1px] bg-black"/>
            </div>
            <div className="max-w-[1580px] min-h-[25vh] mx-auto flex flex-col">
                <div className="w-full h-[10vh] grid grid-cols-2 md:grid-cols-[1fr,2fr,1fr] items-center">
                    <a href="" className="w-full  order-2 md:order-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.8 207.1" width="100" height="40">
                        <title>Aman resorts</title>
                        <path d="M355.7 44.7h-1.5c-57.4 119.2-58.4 126.7-63.8 139h-.4c-5.5-12.3-6.5-19.8-63.8-139h-1.6S210.2 204 204.6 204v.8h17.2v-.8c-4.2 0 8.4-112.5 9-125.5h.4a776 776 0 0 0 25.7 57.6c7.7 16 18.2 40.8 31.5 68.7h3.6c13.3-27.9 23.8-52.7 31.5-68.7a730.6 730.6 0 0 0 25.6-57.6h.4c.7 13 13.3 125.5 9.1 125.5v.8h17.1v-.8c-5.6 0-20-159.4-20-159.4M67.8 71.2h-.2c-2.6 7.6-31.9 80.6-31.9 80.6-17.4 43-20.5 51.2-18.4 52.3v.8H0v-.8c4.3 0 67.1-159.4 67.1-159.4h2s60 159.4 64.3 159.4v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.8-73-30.3-80.7m446.9.1h-.2c-2.6 7.6-32 80.6-32 80.6-17.3 43-20.5 51.2-18.3 52.3v.8h-17.3v-.8c4.3 0 67-159.4 67-159.4h2.1S576 204 580.3 204v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.9-73-30.3-80.7m251.9-23.7h-8v.8c1.5 0 2.7 9.5 2.7 67.7V178h-.4c-8.9-12.7-61.4-80-104-133.3h-1.6v91.7c0 58.2-2.5 67.7-3.9 67.7v.8h17.2v-.8c-1.3 0-2.6-9.5-2.6-67.7V73.7h.4c8.8 12.8 61.4 80 104 133.4h1.5v-91.3c0-58.2 2.6-67.7 4-67.7v-.8ZM43.1 0h48.3v10.5H43.1z"></path>
                     </svg>
                    </a>

                    <div className="w-full order-1 md:order-2 col-span-full md:col-span-1 ">
                        <p className="font-georgia">Follow Us on:</p>
                        <div className="flex flex-wrap gap-x-5">
                            <a href="https://facebook.com" target="_blank"><FaFacebookF  size={35}/></a>
                            <a href="https://x.com" target="_blank"><FaXTwitter  size={35}/></a>
                            <a href="https://instagram.com" target="_blank"><FaInstagram  size={35}/></a>
                            <a href="https://youtube.com" target="_blank"><FaYoutube  size={35}/></a>
                            <a href="https://pinterest.com" target="_blank"><FaPinterest  size={35}/></a>
                            <a href="https://weibo.com" target="_blank"><FaWeibo  size={35}/></a>
                            <a href="https://line.me" target="_blank"><FaLine  size={35}/></a>
                            <a href="https://wechat.com" target="_blank"><SiWechat  size={35}/></a>
                            <a href="https://xiaohongshu.com" target="_blank"><SiXiaohongshu  size={35}/></a>
                            <a href="https://wa.me/123456789" target="_blank"><FaWhatsapp  size={35}/></a>
                        </div>
                    </div>
                    <div className="w-[70%] order-3"><p className="font-georgia">Copyright 2025, Aman Group S.a.r.l.</p></div>
                </div>
            </div>
    </footer>
)
}
export default Footer;
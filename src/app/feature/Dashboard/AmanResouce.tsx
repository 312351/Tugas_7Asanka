'use client'
import Image from "next/image"
import React from "react"
import { useState,useRef,useEffect } from "react"
import { FiChevronLeft } from "react-icons/fi"

export default function AmanResouce() {
    const [activeIndex,setActiveIndex] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const scrollToImage = (index:number) => {
        if (scrollRef.current) {
            const scrollAmount = index * (400 + 20) // 400 = image width, 20 = gap
            scrollRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            })
            setActiveIndex(index)
        }
    }

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1)
        }
    }

    useEffect(() => {
        const ref = scrollRef.current
        if (!ref) return
        const onScroll = () => handleScroll()
        ref.addEventListener("scroll", onScroll)
        return () => ref.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <section className="w-full min-h-[5vh] bg-[#F3EEE7] flex flex-col justify-center items-center  gap-y-10 py-10 px-5">
            <div className="max-w-[1580px]  h-[5vh] flex flex-col text-center py-20 justify-center items-center">
                <h3 className="uppercase text-[25px] font-georgia">Nearby resorts</h3>
            </div>

            <div className="w-full min-h-[5vh flex justify-center items-center">
                <div className="w-full xl:max-w-[1580px] min-h-[5vh] relative">

                    <div className={`w-full h-full absolute z-10 inset-0 pointer-events-none
                        ${isEnd ? 'bg-gradient-to-l from-[#fff0] via-[#fff0] to-[#f3eee767]' 
                                : 'bg-gradient-to-r from-[#fff0] via-[#fff0] to-[#f3eee767]'}`}>
                    </div>

                    <div 
                        ref={scrollRef}
                        className="w-full flex flex-row overflow-x-hidden  snap-x snap-mandatory gap-5 scrollbar-hidden z-0 px-5"
                    >
                        <div className="min-w-[80vw] md:min-w-[400px] lg:min-w-[600px] flex snap-start flex-col justify-center items-center">
                            <Image src="/Amandari_Indonesia _Resort_Swimming_Pool.jpg" alt="" width={1300} height={500} className="w-full h-auto object-cover"/>
                            <div className="flex flex-col justify-center items-center text-center py-2 h-full">
                                <p className="text-[8px] tracking-[1.5px] opacity-75">UBUD, BALI</p>
                                <p className="font-georgia text-[20px] opacity-75">Amandari</p>
                            </div>
                        </div>

                        <div className="min-w-[80vw] md:min-w-[400px] lg:min-w-[600px] flex snap-start flex-col justify-center items-center">
                            <Image src="/Five-Bedroom Villa, Aman Villas at Nusa Dua, Bali.jpg" alt="" width={1300} height={500} className="w-full h-auto object-cover"/>
                            <div className="flex flex-col justify-center items-center text-center py-2 h-full">
                                <p className="text-[8px] tracking-[1.5px] opacity-75 uppercase">NUSA DUA, BALI</p>
                                <p className="font-georgia text-[20px] opacity-75">Aman Villas Nusa Dua</p>
                            </div>
                        </div>

                        <div className="min-w-[80vw] md:min-w-[400px] lg:min-w-[600px] flex snap-start flex-col justify-center items-center">
                            <Image src="/210204_AmanHero_Square9.jpg" alt="" width={1300} height={500} className="w-full h-auto object-cover"/>
                            <div className="flex flex-col justify-center items-center text-center py-2 h-full">
                                <p className="text-[8px] tracking-[1.5px] opacity-75 uppercase">JAVA, INDONESIA</p>
                                <p className="font-georgia text-[20px] opacity-75">Amanjiwo</p>
                            </div>
                        </div>

                        <div className="min-w-[80vw] md:min-w-[400px] lg:min-w-[600px] flex snap-start flex-col justify-center items-center">
                            <Image src="/Amanwana_Moyo Island_Square.jpg" alt="" width={1300} height={500} className="w-full h-auto object-cover"/>
                            <div className="flex flex-col justify-center items-center text-center py-2 h-full">
                                <p className="text-[8px] tracking-[1.5px] opacity-75 uppercase">MOYO ISLAND, INDONESIA</p>
                                <p className="font-georgia text-[20px] opacity-75">Amanwana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[3vh] flex justify-center gap-2 mt-4">
            <div className=" h-[2px] flex justify-center mt-4 bg-[#a18a58]">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            onClick={() => scrollToImage(idx)}
            className={`hover:bg-[#5a4414] w-[5vw] h-[2px] cursor-pointer transition-all ${
              activeIndex === idx ? "bg-[#5a4414]" : "bg-[#a18a58]"
            }`}
          ></div>
        ))}
        </div>
      </div>


        <div className="min-w-[10px] flex flex-row gap-x-1 justify-center items-center  border-black cursor-pointer">
          <FiChevronLeft/>
        <div className="min-w-[10px] flex flex-col gap-x-5  border-black">
            <p className="font-anaheim text-[15px] whitespace-nowrap flex flex-row"> Back to all Aman Destinations</p>
          <hr className="h-[2px] w-full border-t border-black" />
        </div>
        </div>
        </section>
    )
}

'use client'
import Image from "next/image"
import React, { useState, useRef } from "react"

export default function Manggis() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = index * (400 + 20)
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
      setActiveIndex(index)
    }
  }

  return (
    <section className="w-full min-h-[35vh] bg-[#F3EEE7] flex flex-col items-center px-5">
      <div className="max-w-[1580px] flex flex-col items-center text-center">
        <p className="font-anaheim uppercase text-[13px] tracking-widest opacity-75">Manggis, Bali</p>
        <h3 className="uppercase text-[25px] font-georgia">AMANKILA</h3>
        <p className="max-w-[980px]">
          Claiming a breathtaking stretch of coastline on the Lombok Strait, Amankila rests on a lush hillside beneath
          sacred Mount Agung. Connected by frangipani-lined walkways through the treetops, stilted suites offer
          spectacular views high on the hillside, while a three-tier infinity pool cascades at the property’s heart and
          the Beach Club leads to a private black-sand beach.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="w-full flex flex-row justify-center items-center overflow-x-auto gap-x-5 snap-x snap-mandatory py-12 scrollbar-hidden"
      >
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <Image
              key={`1-${i}`}
              src="/Amankila_Resort.jpg"
              alt="a"
              width={400}
              height={250}
              className="shrink-0 h-auto snap-start"
            />
            <Image key={`2-${i}`} src="/Aman_Amankila_Gallery_5.jpg" alt="a" width={400} height={250} className="shrink-0 h-auto snap-start" />
            <Image key={`3-${i}`} src="/Aman_Amankila_Gallery_6.jpg" alt="a" width={400} height={250} className="shrink-0 h-auto snap-start" />
            <Image key={`4-${i}`} src="/Amankila, Indonesia - Accomodation, Pool Suite 1.jpg" alt="a" width={400} height={250} className="shrink-0 h-auto snap-start" />
            <Image key={`5-${i}`} src="/Aman_Amankila_Gallery_9.jpg" alt="a" width={400} height={250} className="shrink-0 h-auto snap-start" />
            <Image key={`6-${i}`} src="/Aman_Amankila_Gallery_13.jpg" alt="a" width={400} height={250} className="shrink-0 h-auto snap-start" />
          </React.Fragment>
        ))}
      </div>

      <div className=" h-[3vh] flex justify-center gap-2 mt-4">
        <div className=" h-[3px] flex justify-center gap-2 mt-4 bg-[#a18a58]">
          {[...Array(9)].map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToImage(idx)}
              className={`hover:bg-[#5a4414] w-[25px] h-[3px] cursor-pointer transition-all ${
                activeIndex === idx ? " bg-[#5a4414]" : "bg-[#a18a58]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

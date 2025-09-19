import Image from "next/image";

const Accomodation = () => {
    return(
        <section className="w-full min-h-[25vh] py-8 flex justify-center items-center bg-[#F3EEE7]">
            <a href="">
                <div className="max-w-[1580px] min-h-[25vh] cursor-pointer">
                    <div className="w-full flex flex-col justify-center items-center px-5">
                        <Image src="/Aman_Amankila_Homepage_1.jpg" alt="" width={1000} height={40}/>
                    </div>
                    <div className="w-full min-h-[5vh] px-4 flex flex-col gap-y-3">
                        <p className="font-anaheim tracking-wider opacity-50 text-[15px]">Accomodation</p>
                        <p className="font-georgia text-[25px]">Suites</p>
                        <p className="font-georgia">Set atop stilts amid the treetops, the free-standing Suites have been fashioned as Balinese beach houses with private outdoor terraces</p>
                        <div className="w-full flex flex-row gap-x-5">
                        <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 opacity-50 border-black">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">View All Accomodation</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                        </div>
                        <div className="min-w-[10px] flex flex-col gap-x-5 border-b- opacity-50 border-black">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Book now</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                        </div>
                        </div>
                    </div>
                </div>
                </a>
        </section>
    )
}
export default Accomodation;
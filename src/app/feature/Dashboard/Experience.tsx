import Image from "next/image";
const Experience = () => {
    return(
        <section className="w-full min-h-[35vh] bg-white pt-16 flex flex-col items-center">
            <div className="max-w-[1580px] flex flex-col ">
                <div className="min-w-full min-h-[5vh] grid grid-cols-1 md:grid-cols-3 gap-x-5 px-5">
                    <div className="min-w-[2vw] min-h-[5vh] flex flex-col gap-x-5">
                        <Image src="/Amankila_Main_Pool.jpg" alt="" width={700} height={40}/>
                    <span className=" px-5 flex flex-col gap-y-5 py-5">
                            <p className="text-[15px] font-anaheim opacity-50">Accomodation</p>
                            <p className="text-[25px] font-georgia ">Suites</p>
                            <p className="text-[15px] font-georgia ">Experience Bali's cultural heartland from Amankila's private stretch of coastline on the Lombok Strait, where several exclusive offers invite guests to enjoy an unforgettable Aman experience.</p>
                        <div className="w-full flex flex-row gap-x-5">
                          <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 border-black opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discovere More I</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
                    </span>
                    </div>
                    
                    <div className="min-w-[2vw] min-h-[5vh] flex flex-col ">
                        <Image src="/Amankila_Wellness_Portrait.jpg" alt="" width={700} height={40}/>
                    <span className=" px-5 flex flex-col gap-y-5 py-5">
                            <p className="text-[15px] font-anaheim opacity-50">WELLNES & FITNESS</p>
                            <p className="text-[25px] font-georgia">Yoga & movement classes</p>
                            <p className="text-[15px] font-georgia">A range of styles taught by resident and visiting practitioners are available, including hatha, pranayama, vinyasa flow, and entertaining Laughing Yoga classes.</p>
                        <div className="w-full flex flex-row gap-x-5">
                          <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 border-black opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discovere More</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
                    </span>
                    </div>


                    <div className="min-w-[2vw] min-h-[5vh] flex flex-col gap-x-5">
                        <Image src="/amankila_indonesia_-_dining_kitchen_garden.jpg" alt="" width={700} height={40}/>
                    <span className=" px-5 flex flex-col gap-y-5 py-5">
                            <p className="text-[15px] font-anaheim opacity-50">Dining</p>
                            <p className="text-[25px] font-georgia">Sustainable ingredients</p>
                            <p className="text-[15px] font-georgia">Celebrating the warmth of traditional family dining with a seasonal focus, Amankila’s menus reflect the rich bounty of Bali’s volcanic soil, the wealth of its waters and the creativity of the resort’s expert chefs.</p>
                        <div className="w-full flex flex-row gap-x-5">
                          <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 border-black opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discovere More</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
                        </span>
                    </div>
                </div>



<div className="w-full px-5 grid grid-cols-1 md:grid-cols-[2.1fr_1fr] gap-5">
  <div className="flex flex-col">
    <div className="relative w-full min-h-[300px] md:min-h-[px]">
      <Image
        src="/Amankila_Sunrise_Cruise-0350 copy.jpg"
        alt="Sunrise Cruise"
        width={1200} height={40}
      />
    </div>
    <span className="px-5 flex flex-col gap-y-5 py-5">
      <p className="text-[15px] font-anaheim opacity-50">Experiences</p>
      <p className="text-[25px] font-georgia">Adventures on water</p>
      <p className="text-[15px] font-georgia">
       Amankila’s two traditional outriggers are available for guests to explore the wonders of the Lombok Strait, with some of the best snorkelling and diving sites in East Bali, including Manta Point and Crystal Bay.
      </p>
      <div className="w-full flex flex-row gap-x-5">
                          <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 border-black opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discovere More</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
    </span>
  </div>

  <div className="flex flex-col">
    <div className="relative w-full min-h-[250px] md:min-h-[25px]">
      <Image
        src="/Amankila_Resort (1).jpg"
        alt="Wellness"
       width={700} height={40}
      />
    </div>
    <span className="px-5 flex flex-col gap-y-5 py-5">
      <p className="text-[15px] font-anaheim opacity-50">Celebrations</p>
      <p className="text-[25px] font-georgia">Host the perfect event</p>
      <p className="text-[15px] font-georgia">
        Set in East Bali, where water palaces speak of the region’s royal past and temples honour the island’s gods, Amankila’s dramatic setting makes it one of the most captivating destinations for events in Asia.
      </p>
      <div className="w-full flex flex-row gap-x-5">
                          <div className="min-w-[10px] flex flex-col gap-x-5 border-b-1 border-black opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discovere More</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
    </span>
  </div>
</div>

            </div>
        </section>
    )
}
export default Experience;
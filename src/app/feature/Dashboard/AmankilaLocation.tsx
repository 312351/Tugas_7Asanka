import MapAmanKila from "./Maps";
import { SlLocationPin } from "react-icons/sl";
<SlLocationPin/>
const Maps = () =>{
    return(
        <section className="w-full min-h-[5vh] pt-16 flex flex-col items-center bg-[#F3EEE7]">
            <div className="w-full xl:max-w-[1580px] flex flex-col gap-y-10 py-5">
                    <div className="w-full flex flex-col justify-center items-center text-center gap-y-5">
                        <p className="text-[25px] font-georgia">Getting here</p>
                        <p className="text-[15px] font-georgia">Amankila is 1.5-hour car drive from Bali’s Denpasar International Airport. </p>
                        <p className="text-[15px] font-georgia">Our multilingual reservations team is always available to help with travel planning, from booking a single <br /> night to multi-resort itineraries.</p>
                        <a href=""><p className=" underline font-georgia">Discover nearby resorts</p></a>
                    </div>
                    <div className="w-full min-h-[5] bg-white flex flex-col">
                           <MapAmanKila/>
                      <div className="w-full min-h-[50px] grid md:grid-cols-2 xl:grid-cols-3 bg-[#F3EEE7] px-[75px] py-3 gap-10 opacity-75 items-start xl:items-center">   
                        <span className="flex flex-row gap-x-1 justify-start xl:justify-center">
                          <SlLocationPin size={15}/> 
                          <p>
                            Manggis <br />
                            Bali <br />
                            Indonesia
                          </p>
                        </span>
                      
                        {/* Kolom 2 */}
                        <div className="flex flex-col items-start xl:items-start">
                          <span className="flex flex-row">
                                    <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 text-black"
                                  fill="currentColor"
                                  >
                                  <path d="m5.3 11.1c-.1 0-.2-.1-.4-.2-.6-.4-1.5-1.1-1.7-1.3-.4-.3-.9-.3-1.3-.2-.2.1-.4.2-.6.5s-.2.6 0 .8c.3.7 1.2 2.7 1.6 3.5.1.4.5.7 1 .8s1.1.1 1.7 0c1.4-.2 3.2-.8 5.6-1.8.2-.1.4-.2.6-.3l-1 5.4c-.1.3-.1.6 0 .9.1.1.2.3.4.3.2.1.3 0 .4 0l.7-.3c.3-.1.5-.3.7-.6s.4-.6.6-.9l3.3-7.1c1.6-.8 3.2-1.5 4.3-2.2.6-.3 1.1-.6 1.4-.9.2-.1.3-.3.4-.4.1-.2.2-.4.1-.7-.3-.6-1-1.1-1.9-1.3-.3-.1-.7-.1-1.1-.1-.1 0-.3 0-.4 0-.6.1-1.2.2-1.8.5 0 0-2.5 1.1-4.5 2l-5-1.5c-.3 0-.7-.1-1-.1s-.6 0-.9.2l-.8.3c-.1 0-.2.1-.3.3-.1.1-.1.3 0 .5.1.3.3.4.6.6l3 1.7c-1.5.7-3.5 1.5-3.6 1.6s-.1 0-.1 0zm1.2-4.1.3-.1c.1 0 .3-.1.6-.1s.6 0 .8.1l4 1.2c-1.1.5-1.2.5-2.2 1zm3.5 3c.1 0 .1 0 .2-.1 1.5-.7 1.7-.8 3.2-1.4.1 0 .2 0 .2-.1 2-.9 4.5-2 4.5-2 .6-.2 1.1-.4 1.6-.4h.3c.3 0 .6 0 .9.1.6.2 1 .5 1.2.7 0 0-.1.1-.2.2-.3.2-.7.5-1.3.8-1.1.6-2.7 1.4-4.4 2.2l-.1.2-3.3 7.2c-.1.2-.3.5-.4.7-.2.2-.4.3-.4.4l-.3.1 1.2-6.2.2-.8-.8.3c-.5.2-.9.4-1.3.6-2.3 1-4.1 1.6-5.3 1.8-.6.1-1.1.1-1.4 0s-.4-.2-.5-.3c-.5-1-1.4-3-1.7-3.7h.1.5c.3.2 1.1.9 1.7 1.3.1.1.3.3.6.4.2.1.6.1.8 0 .1-.1 2.3-1.1 4.2-2z">
                                 </path>
                              </svg>
                              <p>Denpasar’s Ngurah Rai International Airport</p>
                              </span>
                          <span className="flex flex-row">
                          <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-black"
                          fill="currentColor"
                          >
                              <path d="m2.2 20.1h5.2v.8c0 .7.5 1.2 1.2 1.2h1.6c.7 0 1.2-.5 1.2-1.2v-6.8c0-.3 0-.6-.1-.8l-2-6.2c-.3-.8-1-1.4-1.9-1.4h-5.2v.8h5.2c.5 0 1 .3 1.1.8l1 3.2c.1.3.1.7 0 1s-.4.5-1.3.5h-6v.8h6.1c.9 0 1.5-.3 1.8-.7l.4 1.3c.1.2.1.4.1.6v6.8c0 .2-.2.4-.4.4h-1.6c-.2 0-.4-.2-.4-.4v-1.6h-6z"></path><path d="m17.2 22.1c.4 0 .7-.2 1-.4.3.3.6.4 1 .4.8 0 1.4-.6 1.4-1.4v-4.7c.1 0 .3.1.4.1.6 0 1.1-.5 1.2-1.1 0 0 0 0 0-.1 0 0 0 0 0-.1v-5.3c0-1.2-1-2.2-2.2-2.2h-.4c-.2 0-.3.1-.4.3l-1.1 3-1.1-3c-.1-.2-.2-.3-.4-.3h-.4c-1.2 0-2.2 1-2.2 2.2v5.3.1.1c.1.6.6 1.1 1.2 1.1.1 0 .3 0 .4-.1v4.7c.2.7.8 1.4 1.6 1.4zm-1.8-6.8c-.2 0-.4-.2-.4-.4s0 0 0-.1v-5.3c0-.8.6-1.4 1.4-1.4h.1l1.3 3.7c.1.2.2.3.4.3s.3-.1.4-.3l1.3-3.7h.1c.8 0 1.4.6 1.4 1.4v5.3c0 .2-.2.4-.4.4s-.4-.2-.4-.4v-3.5c0-.1-.1-.2-.1-.3-.1-.1-.2-.1-.3-.1-.2 0-.3.2-.3.4v3.5 5.8c0 .3-.3.6-.6.6s-.6-.2-.6-.5v-.1-4.9c0-.1 0-.2-.1-.3s-.2-.1-.3-.1c-.2 0-.3.2-.3.4v4.9.1.1c0 .3-.3.5-.6.5s-.6-.3-.6-.6v-9.4c0-.1-.1-.2-.1-.3-.1-.1-.2-.1-.3-.1-.2 0-.3.2-.3.4v3.5c-.3.3-.5.5-.7.5z"></path><path d="m16.2 2.1c-.1 0-.1 0 0 0-.2 0-.4.2-.4.4v1.6.1.3c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-.1 0-.2 0-.3v-.1-1.6c0-.2-.2-.4-.4-.4zm.4.8h3.2v.8h-3.2zm3.2 1.6c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6z"></path><path d="m8.2 17.7c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6c-.4 0-.7.1-.9.2-.3.1-.5.3-.8.5-.2.1-.5.3-.7.5s-.3.5-.3.9c0 .7.5 1.2 1.2 1.2h1.5zm-2-1.2c0-.2 0-.2.1-.3s.3-.2.5-.3c.4-.2.6-.3.7-.4.2-.1.3-.1.6-.1.4 0 .8.4.8.8s-.4.8-.8.8h-1.5c-.2-.1-.4-.3-.4-.5z">
                              </path>
                          </svg>
                            <p>A 1.5-hour drive</p>
                          </span>
                        </div>
                      
                        <div className="col-span-full xl:col-span-1 flex justify-center items-center">
                          <div className="flex flex-col items-center opacity-75">
                            <p className="font-anaheim text-[15px] whitespace-nowrap">Discover More</p>
                            <hr className="h-[1px] w-full border-t border-black" />
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-[3px] bg-black"/>
        </section>
    )
}
export default Maps;
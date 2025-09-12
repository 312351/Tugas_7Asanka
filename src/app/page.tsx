import Image from "next/image";
import Header1 from "./Shared/Header/Header1";
import DashboardImg from "./feature/Dashboard/DashboardImg";
import Manggis from "./feature/Dashboard/Manggis";
import Accomodation from "./feature/Dashboard/Accomodation";
import Experience from "./feature/Dashboard/Experience";
import Maps from "./feature/Dashboard/AmankilaLocation";
import AmanResouce from "./feature/Dashboard/AmanResouce";
import Footer from "./Shared/foother/Footeher";
import ReserveButtonFixed from "./Shared/foother/Fixed";

export default function Home() {
  return (
   <div className="w-full min-h-screen">
      <Header1/>
      <DashboardImg/>
      <Manggis/>
      <Accomodation/>
      <Experience/>
      <Maps/>
      <AmanResouce/>
      <Footer/>
      <ReserveButtonFixed/>
   </div>
  )
}

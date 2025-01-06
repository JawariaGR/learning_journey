import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/product";
import Topfooter from "@/components/TopFooter";
import {
  ChevronRight,
  LayoutGridIcon,
  AlignVerticalJustifyCenterIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function navShop() {
  return (
    <div>
      <Navbar />
      {/*shopBanner1*/}
      <div className="relative">
        <Image
          src={"/Rectangle 1.png"}
          alt="shopbg"
          height={316}
          width={14440}
        />
        <div className="absolute lg:top-[150px] top-9 left-44 lg:left-[650px]">
          <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">Shop</h1>
          <div className="flex lg:mt-5 lg:text-xl">
            <Link href={"/"} className="font-bold">
              Home
            </Link>
            <ChevronRight />
            <p className="font-thin">Shop</p>
          </div>
        </div>
      </div>
      {/*shopBanner2*/}
      <div className="bg-[#f9f1e7] flex flex-col lg:flex-row justify-between ">
        <div className="flex m-7">
          <div className="flex gap-5 ml-0 lg:ml-14 ">
            {" "}
            <p className="font-medium lg:font-bold text-xl flex">
              {" "}
              <SlidersHorizontalIcon />
              Filter
            </p>
            <LayoutGridIcon />
            <AlignVerticalJustifyCenterIcon />{" "}
          </div>
          <div className="ml-10 border-l-2 border-[#9F9F9F] items-center">
            <p className="font-medium text-lg pl-8">
              Showing 1-16 of 32 result
            </p>
          </div>
        </div>
        <div className="flex  mt-7 mr-24 ml-7 lg:ml-0">
          <label className="font-medium text-xl pr-5 pt-2 ">Show</label>
          <input
            type="number"
            placeholder="16"
            className="bg-[white] h-12 lg:w-12 w-16 mr-20 mt-1 lg:pl-3 pl-5 text-[#9F9F9F]"
          ></input>
          <label className="font-medium text-xl mr-4 pt-2"> Short by </label>

          <select className="h-12 w-40 pl-3 bg-white text-[#9F9F9F] mb-4 items-center">
            <option value={"defulat"}> Default</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>
      {/*Product*/}
      <div className="m-28">
        <Product />
        <Product />
        <Product />
        <Product />
        <div className="lg:flex hidden justify-center items-center gap-7 m-20 cursor-pointer">
          <p className="h-12 w-12  pt-3 pl-5 bg-[#b88e2f] text-[#FFFFFF]  rounded-lg hover:translate-x-3 hover:translate-y-3">
            1
          </p>
          <p className="bg-[#f9f1e7] h-12 w-12  pt-3 pl-5 rounded-lg hover:translate-x-3 hover:translate-y-3 hover:bg-[#b88e2f] hover:text-white">
            2
          </p>
          <p className="bg-[#f9f1e7] h-12 w-12 pt-3 pl-5 rounded-lg hover:translate-x-3 hover:translate-y-3 hover:bg-[#b88e2f] hover:text-white">
            3
          </p>
          <p className="bg-[#f9f1e7] h-12 w-20 pt-3 pl-5 rounded-lg hover:translate-x-3 hover:translate-y-3 hover:bg-[#b88e2f] hover:text-white">
            Next
          </p>
        </div>
      </div>
      <Topfooter />
      <Footer />
    </div>
  );
}

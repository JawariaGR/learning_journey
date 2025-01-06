"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Product from "@/components/product";
import Hover from "@/components/Hover";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full">
        <div className="relative">
          <Image
            src={"/scandinavian-interior-mockup-wall-decal-background 1.png"}
            alt="main-back-grond"
            width={1800}
            height={200}
            className="bg-cover"
          />
        </div>
        <div className="bg-[#fff3e3] h-[443px] w-[643px] top-[253px] left-[739px] rounded-xl absolute z-10 hidden lg:block">
          <div className="flex flex-col justify-start items-start pl-12">
            <h1 className="text-black text-lg pt-24 pr-[400]">New Arrival</h1>
            <p className="text-[#bc953b] font-extrabold text-4xl ">
              Discover Our<span className="block">New Collection</span>
            </p>
            <p className="pt-6 max-w-[500px] max-h-2 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              laudantium rem enim maiores corporis dolores.
            </p>
        <Link href={"/navshop"}>    <button className="bg-[#bc9536] h-14 w-40 rounded-sm mt-24 mr-32 text-[#FFFFFF] font-bold shadow-xl hover:bg-[#e3b64b] hover:translate-x-2 hover:translate-y-3">
              Buy Now
            </button></Link>
          </div>
        </div>
      </main>
      {/*Range*/}
      <section className="h-full m-12">
        <div className="flex-col justify-center items-center flex">
          <h1 className="font-bold text-2xl">Browse The Range</h1>
          <p className="text-gray-500 font-thin hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            itaque?
          </p>
        </div>
        <div className="flex justify-center items-center m-7">
          <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-6 gird-col-1 grid-row-1">
            <div>
              <Image
                src={"/Mask Group.png"}
                alt="Rangpic1"
                width={381}
                height={300}
                className="shadow-xl"
              />
              <div className="flex justify-center items-center mt-4 font-bold">
                <p>Dining</p>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src={"/Image-living room.png"}
                alt="Rangpic2"
                width={381}
                height={300}
                className="shadow-xl"
              />
              <div className="flex justify-center items-center mt-4 font-bold">
                <p>Living</p>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src={"/Mask Group (1).png"}
                alt="Rangpic3"
                width={381}
                height={480}
                className="shadow-xl"
              />
              <div className="flex justify-center items-center mt-4 font-bold">
                <p>Badroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product */}
      <section className="h-full">
        <div className="flex justify-center m-8">
          <h1 className="text-4xl font-extrabold">Our Product</h1>
        </div>
        <Product />
        <div className="flex justify-center items-center m-8">
          <div className="grid lg:grid-rows-1 lg:grid-cols-4 gap-7 grid-row-1 grid-col-1">
            <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
              <Link href={"/single-product"}>
                <Image
                  src={"/propic5.png"}
                  alt="propic"
                  width={285}
                  height={301}
                />
                <Hover />
              </Link>
              <div className="m-7">
                <h1 className="font-bold">Grifo</h1>
                <p className="text-gray-500 text-sm">Night lamp</p>
                <p className="font-bold pt-2">Rp 1,500.000 </p>
              </div>{" "}
            </div>
            <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
              {" "}
              <Link href={"/single-product"}>
                {" "}
                <Image
                  src={"/propic6.png"}
                  alt="propic"
                  width={285}
                  height={301}
                />
                <Hover />
              </Link>
              <div className="absolute bg-[#2ec1ac] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0">
                <p>New</p>
              </div>
              <div className="m-7">
                <h1 className="font-bold">Muggo</h1>
                <p className="text-gray-500 text-sm">small mug</p>
                <p className="font-bold pt-2">Rp 150.000 </p>
              </div>{" "}
            </div>
            <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
              {" "}
              <Link href={"/single-product"}>
                {" "}
                <Image
                  src={"/propic7.png"}
                  alt="propic"
                  width={285}
                  height={301}
                />
                <Hover />
              </Link>
              <div className="absolute bg-[#e97171] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0 ">
                <p>-50%</p>
              </div>
              <div className="m-7">
                <h1 className="font-bold">Pingky</h1>
                <p className="text-gray-500 text-sm">Cute bad set</p>
                <p className="font-bold pt-2">
                  Rp 7,000.000
                  <span className="pl-2 font-light">
                    <del>Rp 14,000.000</del>
                  </span>
                </p>
              </div>{" "}
            </div>
            <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
              {" "}
              <Link href={"/single-product"}>
                {" "}
                <Image
                  src={"/propic8.jpg"}
                  alt="propic"
                  width={285}
                  height={301}
                />
                <Hover />
              </Link>
              <div className="absolute bg-[#2ec1ac] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0">
                <p>New</p>
              </div>
              <div className="m-7">
                <h1 className="font-bold">Potty</h1>
                <p className="text-gray-500 text-sm">Minimalist flower pot</p>
                <p className="font-bold pt-2">Rp 500.000 </p>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-14">
          <Link href={"/navshop"}>
            {" "}
            <button className="bg-white border-[#B88E2F] border-solid border-2 w-48 h-10 text-[#B88E2F] shadow-xl hover:translate-x-4 hover:translate-y-4 ">
              Show More
            </button>
          </Link>
        </div>
      </section>
      {/*Inspiration*/}
      <section className="h-full mt-14">
        <div className="bg-[#fcf8f3] flex flex-col lg:flex-row justify-center items-center">
          <div className="text-center lg:text-left lg:mr-10">
            <h1 className="font-extrabold text-4xl mr-10 top-6 pt-9 lg:pt-0">
              50+ Beautiful rooms <span className="block">inspiration</span>
            </h1>
            <p>
              Our designer already made Link lot of Beautiful{" "}
              <span className="block">Prototipe of rooms that inspire you</span>
            </p>
            <button className=" mt-8 h-[50px] w-52 text-[#fcf8f3] bg-[#b88e2f] font-bold text-lg rounded-md hover:translate-x-3 hover:translate-y-4">
              Explor more
            </button>
          </div>
          <div className="mt-20 mb-20 flex flex-col lg:flex-row relative">
            <Image
              src={"/inspic1.png"}
              alt="inspic1"
              height={582}
              width={404}
            />
            <div className="absolute bg-[#f4f4f4] opacity-70 mt-[400px] ml-5 h-28 w-52">
              <p className="flex top-9 justify-center items-center font-thin pt-5">
                01 --- Bad Room
              </p>
              <h1 className=" flex justify-center font-extrabold text-2xl pt-5">
                Inner Pace
              </h1>
            </div>
            <div className="absolute w-12 h-10 mt-[470px] ml-[230px] flex justify-center items-center text-[#f4f4f4] bg-[#b88e2f] ">
              <ArrowRight />
            </div>
            <div className="ml-0 lg:ml-5 mt-5 lg:mt-0 relative">
              <Image
                src={"/inspic2.png"}
                alt="inspic2"
                height={486}
                width={372}
              />
              <div className="absolute text-[#b88e2f] bg-[#f4f4f4] rounded-3xl h-12 w-12 flex justify-center items-center top-44 left-80 opacity-100 ">
                <ChevronRight />
              </div>
              <div className="mt-12 lg:mt-16 mr-56 lg:mr-24 gap-9 lg:gap-4 flex items-center justify-center">
                <h1 className="h-8 w-8 flex justify-center border-2 border-[#b88e2f] border-solid rounded-3xl">
                  <p className=" h-4 w-4 rounded-2xl mt-2 bg-[#b88e2f]"></p>
                </h1>
                <p className="h-4 w-4 rounded-2xl :hover bg-[#ddd7d7]"></p>
                <p className="h-4 w-4 rounded-2xl :hover bg-[#ddd7d7]"></p>
                <p className="h-4 w-4 rounded-2xl :hover bg-[#ddd7d7]"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Furniture*/}
      <section>
        <div className="hidden lg:flex flex-col justify-center items-center mt-5">
          <p className="font-thin text-[#616161] text-xl">Share Your With</p>
          <h1 className="block font-bold text-4xl text-[3A3A3A]">
            #FuniroFurniture
          </h1>
        </div>

        <div className="fun-img mt-4 mb-4 hidden lg:block bg-[#ffffff]">
          <div>
            {" "}
            <Image
              src={"/Rectangle 38.png"}
              alt="furnpic1"
              height={312}
              width={451}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div className="fun-item">
            {" "}
            <Image
              src={"/Rectangle 39.png"}
              alt="furnpic1"
              height={242}
              width={344}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div>
            {" "}
            <Image
              src={"/Rectangle 40.png"}
              alt="furnpic1"
              height={392}
              width={295}
              className="rounded-lg h-full w-auto"
            />
          </div>{" "}
          <div>
            {" "}
            <Image
              src={"/Rectangle 43.png"}
              alt="furnpic1"
              height={348}
              width={290}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div className="fun-item">
            {" "}
            <Image
              src={"/Rectangle 41.png"}
              alt="furnpic1"
              height={242}
              width={178}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div>
            {" "}
            <Image
              src={"/Rectangle 45.png"}
              alt="furnpic1"
              height={433}
              width={425}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div className="fun-item">
            <Image
              src={"/Rectangle 44.png"}
              alt="furnpic1"
              height={196}
              width={258}
              className="rounded-lg h-full w-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

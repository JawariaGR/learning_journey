import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import Topfooter from "@/components/TopFooter";
import Footer from "@/components/Footer";
export default function compare() {
  return (
    <div>
      <Navbar />
      {/*comparebanner*/}
      <section>
        <div className="relative">
          <Image
            src={"/Rectangle 1.png"}
            alt="shopbg"
            height={316}
            width={14440}
            className="bg-cover"
          />
          <div className="absolute lg:top-[120px] top-9 left-32 lg:left-[500px]">
            <Image
              src={"/Meubel House_Logos-05.png"}
              alt="logo"
              width={70}
              height={70}
              className="pb-4 ml-9 hidden"
            />
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">
              Product Comparison{" "}
            </h1>
            <div className="flex lg:mt-5 lg:text-xl ml-11 lg:ml-28">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Comparion</p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="lg:mt-20 mt-10 border-b-2">
          <div className="lg:ml-20 ml-8 mb-20 flex flex-col lg:flex-row gap-9 lg:gap-0 justify-between items-start mr-20 ">
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-2xl w-44 h-16 ">
                Go to Product page for more Product
              </h1>
              <Link href={"/navshop"} className="border-b-2 font-bold mt-5 text-xl text-[#9F9F9F] border-[#9F9F9F] ">
                View more
              </Link>
            </div>
            <div className="flex flex-col items-start">
              {" "}
              <Image
                src={"/Asgaard sofa 3.png"}
                alt="sofapic"
                height={251}
                width={140}
                className="pl-5 h-44 w-72 bg-[#F9F1E7] rounded-lg"
              />
              <div className="flex flex-col mt-6 gap-1">
                <h1 className="font-semibold text-lg">Asgaard Sofa</h1>
                <p className="font-semibold text-lg">Rs. 250,000.00</p>
                <div className="flex gap-2">
                  <p>4.7</p>
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <StarHalf
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <div className="border-l-2 border-[#9F9F9F] ml-2 text-[#9F9F9F]">
                    <p className="pl-2">204 Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              {" "}
              <Image
                src={"/Outdoor sofa set 1.png"}
                alt="sofapic"
                height={251}
                width={140}
                className="pl-5 h-44 w-72 bg-[#F9F1E7] rounded-lg"
              />
              <div className="flex flex-col mt-6 gap-1">
                <h1 className="font-semibold text-lg">Outdoor Sofa Set</h1>
                <p className="font-semibold text-lg">Rs. 224,000.00</p>
                <div className="flex gap-2">
                  <p>4.2</p>
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <Star
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <StarHalf
                    style={{ fontSize: 20, color: "#ffc700" }}
                    className="hover:translate-y-1 hover:translate-x-1"
                  />
                  <div className="border-l-2 border-[#9F9F9F] ml-2 text-[#9F9F9F]">
                    <p className="pl-2">145 Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Add A Product</h1>
              <div className="bg-[#B88E2F] text-white font-semibold flex justify-between items-center  mt-4 rounded-lg p-6 h-9 w-60">
                <button>Choose a Product</button>
                <div>
                  {" "}
                  <ChevronDown />
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="mb-32">
          {" "}
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6  ">
            <div className="lg:ml-20 ml-5 border-r-2">
              <div className="mt-20">
                {" "}
                <h1 className="font-bold text-2xl">General</h1>
                <p className="text-lg pt-5">Sales Package</p>
                <p className="text-lg pt-5">Model Number</p>
                <p className="text-lg pt-5">Secondary Material</p>
                <p className="text-lg pt-5">Configuration</p>
                <p className="text-lg pt-5">Upholstray Material</p>
              </div>
              <div className="mt-32">
                <h1 className="font-bold text-2xl">Product</h1>
                <p className="text-lg pt-5">Filling Material</p>
                <p className="text-lg pt-5">Finish Type</p>
                <p className="text-lg pt-5">Adjustable Headrest</p>
                <p className="text-lg pt-5">
                  Maximum Load <span className="block">Capacity</span>
                </p>
                <p className="text-lg pt-5">Origin of Manufacture</p>
              </div>
              <div className="mt-32">
                <h1 className="font-bold text-2xl">Dimensions</h1>
                <p className="text-lg pt-5">Width</p>
                <p className="text-lg pt-5">Height</p>
                <p className="text-lg pt-5">Depth</p>
                <p className="text-lg pt-5">Weight</p>
                <p className="text-lg pt-5">Seat Height</p>
                <p className="text-lg pt-5">Leg Height</p>
              </div>
              <div className="mt-32">
                <h1 className="text-2xl font-bold">Warranty</h1>
                <p className="text-lg pt-5">Warranty Summary</p>
                <p className="text-lg pt-10">
                  Warranty Service <span className="block">Type</span>
                </p>
                <p className="text-lg pt-24"> Covered in Warranty</p>
                <p className="text-lg pt-20">
                  Not Covered in <span className="block">Warranty</span>
                </p>
                <p className="text-lg pt-40">Domestic Warranty</p>
              </div>
            </div>
            <div className="lg:ml-20 ml-5  lg:border-r-2">
              <div className="mt-24">
                {" "}
                <p className="text-lg">1 sectional Sofa</p>
                <p className="text-lg pt-5">TFCBLIGRBL6SRHS</p>
                <p className="text-lg pt-5">Solid Wood</p>
                <p className="text-lg pt-5">L- shaped</p>
                <p className="text-lg pt-5">Fabric + Cotton</p>
                <p className="text-lg pt-5">Bright Grey & Lion</p>
              </div>
              <div className="mt-40">
                <p className="text-lg pt-5">Foam</p>
                <p className="text-lg pt-5">Bright Grey & Lion</p>
                <p className="text-lg pt-5">No</p>
                <p className="text-lg pt-8">280 KG</p>
                <p className="text-lg pt-11">India</p>
              </div>
              <div className="mt-44">
                <p className="text-lg">265.32 cm</p>
                <p className="text-lg pt-4">76 cm</p>
                <p className="text-lg pt-4">45 KG</p>
                <p className="text-lg pt-4">167.76 cm</p>
                <p className="text-lg pt-4">41.52 cm</p>
                <p className="text-lg pt-8">5.46 cm</p>
              </div>
              <div className="lg:mt-44 mt-40">
                <p className="h-12 w-56 text-lg">
                  1 Year Manufacturing Warranty
                </p>
                <p className="h-12 w-56 text-lg pt-5">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </p>
                <p className="h-12 w-56 text-lg pt-32">
                  Warranty Against Manufacturing Defect
                </p>
                <p className="h-12 w-56 text-lg pt-28">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </p>
                <p className="h-12 w-56 text-lg pt-56">1 Year</p>
              </div>
              <div>
                <button className="bg-[#bc9536] h-14 w-44 rounded-sm mt-16 text-[#FFFFFF] font-bold shadow-xl hover:bg-[#e3b64b] hover:translate-x-2 hover:translate-y-3">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="ml-20 hidden lg:block border-r-2">
              <div className="mt-24">
                {" "}
                <p className="text-lg">
                  1 Three Seater,2 single <span className="block">Seater</span>
                </p>
                <p className="text-lg pt-5">DTUBLIGRBL568</p>
                <p className="text-lg pt-5">Solid Wood</p>
                <p className="text-lg pt-5">L- shaped</p>
                <p className="text-lg pt-5">Fabric + Cotton</p>
                <p className="text-lg pt-5">Bright Grey & Lion</p>
              </div>
              <div className="mt-32">
                <p className="text-lg pt-5">Matte</p>
                <p className="text-lg pt-5">Bright Grey & Lion</p>
                <p className="text-lg pt-5">yes</p>
                <p className="text-lg pt-8">300 KG</p>
                <p className="text-lg pt-12">India</p>
              </div>
              <div className="mt-44">
                <p className="text-lg">265.32 cm</p>
                <p className="text-lg pt-4">76 cm</p>
                <p className="text-lg pt-4">45 KG</p>
                <p className="text-lg pt-4">167.76 cm</p>
                <p className="text-lg pt-4">41.52 cm</p>
                <p className="text-lg pt-8">5.46 cm</p>
              </div>
              <div className="mt-44 ">
                <p className="h-12 w-56 text-lg">
                  1.2 Year Manufacturing Warranty
                </p>
                <p className="h-12 w-56 text-lg pt-5">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </p>
                <p className="h-12 w-56 text-lg pt-32">
                  Warranty of the product is limited to manufacturing defects
                  only.
                </p>
                <p className="h-12 w-56 text-lg pt-28">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </p>
                <p className="h-12 w-56 text-lg pt-56">3 month</p>{" "}
              </div>
              <div>
                <button className="bg-[#bc9536] h-14 w-44 rounded-sm mt-16 ml-6 lg:ml-0 text-[#FFFFFF] font-bold shadow-xl hover:bg-[#e3b64b] hover:translate-x-2 hover:translate-y-3">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Topfooter />
      <Footer />
    </div>
  );
}

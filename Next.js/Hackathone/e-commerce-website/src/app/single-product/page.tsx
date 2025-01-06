"use client";
import Navbar from "@/components/Navbar";
import { ChevronRight } from "lucide-react";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Product from "@/components/product";
import Footer from "@/components/Footer";
import Link from "next/link";
import Quanity from "@/components/ui/Quanity";

export default function singleProduct() {
  return (
    <div>
      <Navbar />
      {/*secondnav*/}
      <section>
        <div className="flex gap-5 bg-[#F9F1E7]">
          <div className="flex m-9">
            <p className="text-[#9F9F9F] pr-3">Home</p>
            <ChevronRight />
            <p className="text-[#9F9F9F] pr-3">Shop</p>
            <ChevronRight />
            <div className="ml-5 border-l-2 border-[#9F9F9F]">
              <p className="pl-5 text-black">Asgaard Sofa</p>
            </div>
          </div>
        </div>
      </section>
      {/*productinfo*/}
      <section>
        <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center mt-7 lg:m-9">
          <div className="flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:gap-8 gap-6 mb-8">
            <div className="flex flex-row lg:flex-col gap-6 cursor-pointer">
              <Image
                src={"/Group 98.png"}
                alt="sofapic"
                height={80}
                width={76}
                className="hover:translate-y-3 hover:translate-x-3"
              />
              <Image
                src={"/Group 96.png"}
                alt="sofapic"
                height={80}
                width={76}
                className="hover:translate-y-3 hover:translate-x-3"
              />
              <Image
                src={"/Group 94.png"}
                alt="sofapic"
                height={80}
                width={76}
                className="hover:translate-y-3 hover:translate-x-3"
              />
              <Image
                src={"/Group 97.png"}
                alt="sofapic"
                height={80}
                width={76}
                className="hover:translate-y-3 hover:translate-x-3"
              />
            </div>
            <div className="bg-[#F9F1E7] flex rounded-lg ">
              <Image
                src={"/Asgaard sofa 3.png"}
                alt="sofapic"
                height={391}
                width={481}
                className="pl-5"
              />
            </div>
          </div>
          <div className="flex flex-col lg:ml-10 justify-center items-center lg:justify-start lg:items-start">
            <h1 className="font-bold text-3xl">Asgaard sofa</h1>
            <p className="font-medium text-[#9F9F9F] text-lg pt-2 pb-2">
              Rs.250,000.00
            </p>
            <div className="flex mb-3 cursor-pointer ">
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
              <div className="border-l-2 border-[#9F9F9F] ml-5 text-[#9F9F9F]">
                <p className="pl-6">5 Custrom Review</p>
              </div>
            </div>
            <p className="lg:w-[500px] w-[300px] lg:h-20 h-32 pb-2">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="text-[#9F9F9F] text-lg">Size</p>
            <div className="flex lg:gap-7 mt-2 cursor-pointer gap-14">
              <p className="h-12 w-12  pt-3 pl-5 bg-[#b88e2f] text-[#FFFFFF]  rounded-lg hover:translate-y-1 hover:translate-x-1">
                {" "}
                L
              </p>
              <p className="bg-[#f9f1e7] h-12 w-12  pt-3 pl-4 rounded-lg hover:translate-y-1 hover:translate-x-1 hover:bg-[#b88e2f] hover:text-white ">
                XL
              </p>
              <p className="bg-[#f9f1e7] h-12 w-12 pt-3 pl-4 rounded-lg hover:translate-y-1 hover:translate-x-1 hover:bg-[#b88e2f] hover:text-white ">
                XS
              </p>
            </div>
            <p className="text-[#9F9F9F] text-lg mt-2">Color</p>
            <div className="flex lg:gap-7 lg:mt-3 mt-5 gap-14">
              <p className="h-10 w-10 bg-[#816DFA] rounded-3xl hover:translate-y-1 hover:translate-x-1"></p>
              <p className="h-10 w-10 bg-[#000000] rounded-3xl hover:translate-y-1 hover:translate-x-1"></p>
              <p className="h-10 w-10 bg-[#B88E2F] rounded-3xl hover:translate-y-1 hover:translate-x-1"></p>
            </div>
            <div className="flex border-b-2 pb-20">
              <div className="flex flex-col lg:flex-row mt-10 mr-6 gap-5 ">
                <div className="rounded-lg h-16 w-48 lg:w-32 flex justify-center items-center gap-7 border-2">
                  <button>
                    <Quanity />
                  </button>
                </div>
                <button className="border-solid border-2 w-48 h-16  rounded-lg">
                  Add to cart
                </button>
                <Link href={"/compare"} className="border-solid border-2 w-48 h-16  text-center pt-5 rounded-lg">
                  + compare
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex mt-12">
                <h1 className="font-bold text-xl text-[#9F9F9F]">SKU</h1>
                <p className="pl-16 font-bold text-[#9F9F9F]">:</p>
                <p className="pl-3 font-medium text-[#9F9F9F]">SS001</p>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold text-xl text-[#9F9F9F]">Category</h1>
                <p className="pl-6 font-bold text-[#9F9F9F]">:</p>
                <p className="pl-3 font-medium text-[#9F9F9F]">Sofas</p>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold text-xl text-[#9F9F9F]">Tags</h1>
                <p className="pl-16 font-bold text-[#9F9F9F]">:</p>
                <p className="pl-3 font-medium text-[#9F9F9F]">
                  Sofas,Chair,Home,Shop
                </p>
              </div>
              <div className="flex mt-5">
                <h1 className="font-bold text-xl text-[#9F9F9F]">Share</h1>
                <p className="pl-14 font-bold text-[#9F9F9F] pr-3">:</p>
                <div className="flex gap-2">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*DESCRIPTION*/}
      <section>
        <div className="border-t-2 mt-6 mb-11 flex justify-center items-center flex-col ">
          <div className="flex justify-center items-center gap-3 lg:gap-12 m-9">
            {" "}
            <p className="lg:font-extrabold text-2xl">Description</p>
            <p className="text-lg text-[#9F9F9F]">Additional Information</p>
            <p className="text-lg text-[#9F9F9F]">Reviews [5]</p>
          </div>
          <p className="lg:pt-8 pb-10 lg:w-[1200px] w-[400px] text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="lg:w-[1200px] text-[#9F9F9F] w-[400px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className=" flex flex-col lg:flex-row lg:gap-9 justify-center items-center mt-12 mb-0">
            <Image
              src={"/Cloud sofa three seater + ottoman_1 1.png"}
              alt="despic"
              height={348}
              width={605}
              className="rounded-lg bg-[#f9f1e7]"
            />
            <div className="mt-8 lg:mt-0 ">
              {" "}
              <Image
                src={"/Cloud sofa three seater + ottoman_1 1.png"}
                alt="despic"
                height={348}
                width={605}
                className="rounded-lg bg-[#f9f1e7] "
              />
            </div>
          </div>
        </div>
      </section>
      {/*REALTED PRODUCT*/}
      <section>
        <div className="border-t-2 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pb-12 pt-9 ">Related Product</h1>
          <Product />
          <div className="mt-12 mb-20">
            <Link href={"/navshop"}>
              <button className="bg-white border-[#B88E2F] border-solid border-2 w-48 h-10 text-[#B88E2F] shadow-xl hover:translate-x-4 hover:translate-y-4 ">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="flex justify-center items-center mb-8 ">
      <div className="grid lg:grid-rows-1 lg:grid-cols-4 gap-7 grid-row-1 grid-col-1">
        <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
          <Link href={"/single-product"}>
            <Image src={"/Images.png"} alt="propic" width={285} height={301} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 cursor-pointer">
              <button className="bg-white text-[#bc953b] rounded-sm w-44 h-14 font-bold  mb-2 ">
                Add to cart
              </button>
              <div className="text-white m-9 inline-flex space-x-4 ">
                <div className="flex">
                  <Share2 />
                  <p>Share</p>
                </div>
                <div>
                  <Link href={"/compare"} className="flex">
                    {" "}
                    <ArrowLeftRight />
                    <p>Compare</p>
                  </Link>
                </div>
                <div className="flex">
                  {" "}
                  <Heart />
                  <p className="pr-0">like</p>
                </div>{" "}
              </div>
            </div>
            <div className="absolute bg-[#e97171] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0 ">
              <p>-30%</p>
            </div>
          </Link>
          <div className="m-7">
            <h1 className="font-bold">Syltherine</h1>
            <p className="text-gray-500 text-sm">Stylish Cafe Chair</p>
            <p className="font-bold pt-2">
              Rp 2,500.000{" "}
              <span className="pl-2 font-light">
                <del>Rp3,500.000</del>
              </span>
            </p>
          </div>
        </div>
        <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7] ">
          <Link href={"/single-product"}>
            {" "}
            <Image
              src={"/Images (1).png"}
              alt="propic1"
              width={285}
              height={301}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 cursor-pointer">
              {" "}
              <button className="bg-white text-[#bc953b] rounded-sm w-44 h-14 font-bold  mb-2 ">
                Add to cart
              </button>
              <div className="text-white m-9 inline-flex space-x-4 ">
                <div className="flex">
                  <Share2 />
                  <p>Share</p>
                </div>
                <div>
                  <Link href={"/compare"} className="flex">
                    {" "}
                    <ArrowLeftRight />
                    <p>Compare</p>
                  </Link>
                </div>
                <div className="flex">
                  {" "}
                  <Heart />
                  <p className="pr-0">like</p>
                </div>{" "}
              </div>
            </div>
          </Link>
          <div className="m-7">
            <h1 className="font-bold">Levios</h1>
            <p className="text-gray-500 text-sm">Stylish Cafe chair</p>
            <p className="font-bold pt-2">Rp 2,500.000</p>
          </div>
        </div>
        <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
          <Link href={"/single-product"}>
            {" "}
            <Image
              src={"/Images (2).png"}
              alt="propic2"
              width={285}
              height={301}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 cursor-pointer">
              <button className="bg-white text-[#bc953b] rounded-sm w-44 h-14 font-bold  mb-2 ">
                Add to cart
              </button>
              <div className="text-white m-9 inline-flex space-x-4 ">
                <div className="flex">
                  <Share2 />
                  <p>Share</p>
                </div>
                <div>
                  <Link href={"/compare"} className="flex">
                    {" "}
                    <ArrowLeftRight />
                    <p>Compare</p>
                  </Link>
                </div>
                <div className="flex">
                  {" "}
                  <Heart />
                  <p className="pr-0">like</p>
                </div>{" "}
              </div>
            </div>
            <div className="absolute bg-[#e97171] text-[#fceded] font-bold h-14 w-14 top-3 flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0 ">
              <p>-50%</p>
            </div>
          </Link>
          <div className="m-7">
            <h1 className="font-bold">Lolite</h1>
            <p className="text-gray-500 text-sm">Luxury big sofa</p>
            <p className="font-bold pt-2">
              Rp 7,000.000{" "}
              <span className="pl-2 font-light">
                <del>Rp 14,000.000</del>
              </span>
            </p>
          </div>
        </div>
        <div className="relative group shadow-xl rounded-lg bg-[#f4f5f7]">
          <Link href={"/single-product"}>
            {" "}
            <Image
              src={"/Images (3).png"}
              alt="propic3"
              width={285}
              height={301}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 cursor-pointer">
              {" "}
              <button className="bg-white text-[#bc953b] rounded-sm w-44 h-14 font-bold  mb-2 ">
                Add to cart
              </button>
              <div className="text-white m-9 inline-flex space-x-4 ">
                <div className="flex">
                  <Share2 />
                  <p>Share</p>
                </div>
                <div>
                  <Link href={"/compare"} className="flex">
                    {" "}
                    <ArrowLeftRight />
                    <p>Compare</p>
                  </Link>
                </div>
                <div className="flex">
                  {" "}
                  <Heart />
                  <p className="pr-0">like</p>
                </div>{" "}
              </div>
            </div>
            <div className="absolute bg-[#2ec1ac] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0">
              <p>New</p>
            </div>
          </Link>
          <div className="m-7">
            <h1 className="font-bold">Respire</h1>
            <p className="text-gray-500 text-sm">Outdoor bar table and stool</p>
            <p className="font-bold pt-2">Rp 5,000.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

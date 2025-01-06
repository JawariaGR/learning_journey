import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import Link from "next/link";

export default function Hover() {
  return (
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
  );
}

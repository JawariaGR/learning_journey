import HeadBanner from "@/components/Head";
import Image from "next/image";
import { Search } from "lucide-react";
import Blogcard from "@/components/blogcard";
import { fetchProductfromsanity } from "@/sanity/lib/fetchProduct";
import { blogQuery } from "@/sanity/lib/blogquary";
import Topfooter from "@/components/TopFooter";

export default async function Blog() {
      const blogs = await fetchProductfromsanity({ quary: blogQuery});
  return (
    <div>
    <HeadBanner title="Blog"/>
      {/*blog*/}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10 lg:mt-20">
        <div className="flex flex-col float-left lg:ml-32 gap-5">
        <Blogcard blogs={blogs}/>
        </div>
        {/* blog left side  */}
        <div>
          <div className="flex flex-col float-right mt-5 lg:mt-0 ml-9 lg:ml-0 lg:mr-48">
            <div className="hidden lg:block ">
              <button className="border-2 rounded-md lg:w-72 w-[400px] p-2   border-[#9F9F9F]">
                <Search className="float-right" />
              </button>
            </div>
            <div className="text-[#9F9F9F] hidden lg:block text-lg gap-3 mt-6 mb-10 ">
              <h1 className="font-bold text-2xl lg:pl-3 pl-32 text-black">Categories</h1>{" "}
              <p className="pt-5">
                Crafts<span className="float-right">2</span>
              </p>
              <p className="pt-5">
                Design<span className="float-right">8</span>
              </p>
              <p className="pt-5">
                Handmade<span className="float-right">7</span>
              </p>
              <p className="pt-5">
                Interior<span className="float-right">1</span>
              </p>
              <p className="pt-5">
                Wood<span className="float-right">6</span>
              </p>
            </div>
            <div className="mt-5 mb-9 -ml-4 lg:-ml-0 lg:mb-0 ">
              <h1 className="font-bold text-2xl">Recent Post</h1>
              <div className="flex items-start mt-7">
                <Image
                  src={"/RP1.png"}
                  alt="Recentpost1"
                  height={80}
                  width={80}
                />
                <p className="w-32 h-8 ml-5">
                  Going all-in with millennial desgin
                  <span className="block text-[#9F9F9F]">03 Aug 2022</span>
                </p>
              </div>{" "}
              <div className="flex items-start mt-7">
                <Image
                  src={"/RP2.png"}
                  alt="Recentpost1"
                  height={80}
                  width={80}
                />
                <p className="w-40 h-8 ml-5">
                  Exploring new ways of decorating
                  <span className="block text-[#9F9F9F]">03 Aug 2022</span>
                </p>
              </div>{" "}
              <div className="flex items-start mt-7">
                <Image
                  src={"/RP3.png"}
                  alt="Recentpost1"
                  height={80}
                  width={80}
                />
                <p className="w-40 h-8 ml-5">
                  Handmade piecec that took time to make{" "}
                  <span className="block text-[#9F9F9F]">03 Aug 2022</span>
                </p>
              </div>{" "}
              <div className="flex items-start mt-7">
                <Image
                  src={"/RP4.png"}
                  alt="Recentpost1"
                  height={80}
                  width={80}
                />
                <p className="w-32 h-8 ml-5">
                  Modern home in Milan{" "}
                  <span className="block text-[#9F9F9F]">03 Aug 2022</span>
                </p>
              </div>{" "}
              <div className="flex items-start mt-7">
                <Image
                  src={"/RP5.png"}
                  alt="Recentpost1"
                  height={80}
                  width={80}
                />
                <p className="w-32 h-8 ml-5">
                  Colorful office redesign{" "}
                  <span className="block text-[#9F9F9F]">03 Aug 2022</span>
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-center items-center gap-7 m-20 cursor-pointer">
        <p className="h-12 w-12  pt-3 pl-5 bg-[#b88e2f] text-[#FFFFFF] rounded-lg hover:translate-x-3 hover:translate-y-3">
          1
        </p>
        <p className="bg-[#f9f1e7] h-12 w-12  pt-3 pl-5 rounded-lg hover:bg-[#b88e2f] hover:text-white hover:translate-x-3 hover:translate-y-3">
          2
        </p>
        <p className="bg-[#f9f1e7] h-12 w-12 pt-3 pl-5 rounded-lg hover:bg-[#b88e2f] hover:text-white hover:translate-x-3 hover:translate-y-3">
          3
        </p>
        <p className="bg-[#f9f1e7] h-12 w-20 pt-3 pl-5 rounded-lg hover:bg-[#b88e2f] hover:text-white hover:translate-x-3 hover:translate-y-3 active:bg-[#b88e2f]">
          Next
        </p>
      </div>
      <Topfooter />
    </div>
  );
}

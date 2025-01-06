import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Sell from "@mui/icons-material/Sell";
import Person from "@mui/icons-material/Person";
import Topfooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div>
      <Navbar />
      {/*Blogbanner*/}
      <section>
        <div className="relative">
          <Image
            src={"/Rectangle 1.png"}
            alt="shopbg"
            height={316}
            width={14440}
            className="bg-cover"
          />
          <div className="absolute lg:top-[120px] top-9 left-44 lg:left-[650px]">
            <Image
              src={"/Meubel House_Logos-05.png"}
              alt="logo"
              width={70}
              height={70}
              className="pb-4 ml-9 hidden"
            />
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">Blog</h1>
            <div className="flex lg:mt-5 lg:text-xl">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Blog</p>
            </div>
          </div>
        </div>
      </section>
      {/*blog*/}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10 lg:mt-20">
        <div className="flex flex-col float-left lg:ml-32 gap-5">
          <div className="flex flex-col lg:ml-8 ml-1">
            <Image
              src={"/blog pic 1.png"}
              alt="first blog img"
              height={500}
              width={817}
              className="w-full max-w-[500px] lg:max-w-[817px] h-auto "
            />
            <div className="text-[#9F9F9F] flex gap-5 mt-4">
              <p>
                {" "}
                <Person />
                <span>Admin</span>{" "}
              </p>
              <p>
                {" "}
                <CalendarToday />
                <span>14 Oct 2022</span>
              </p>{" "}
              <p>
                <Sell />
                <span>Wood</span>
              </p>{" "}
            </div>
            <p className="font-bold text-3xl mt-4">
              Going all-in with millennial design
            </p>
            <p className="lg:text-xl text-sm w-[500px] lg:w-[800px] pt-4 pb-4 text-[#9F9F9F] h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="font-semibold text-lg border-b-2 border-black mb-3 w-24 items-start ml-0 ">
              Read more{" "}
            </button>
          </div>
          <div className="flex flex-col lg:ml-8 ml-1">
            <Image
              src={"/blog 2.png"}
              alt="second blog img"
              height={500}
              width={817}
              className="w-full max-w-[500px]  lg:max-w-[817px] h-auto "
            />
            <div className="text-[#9F9F9F] flex gap-5 mt-4">
              <p>
                {" "}
                <Person />
                <span>Admin</span>{" "}
              </p>
              <p>
                {" "}
                <CalendarToday />
                <span>14 Oct 2022</span>
              </p>{" "}
              <p>
                <Sell />
                <span>Handmade</span>
              </p>{" "}
            </div>
            <p className="font-bold text-3xl mt-4">
              Exploring new ways of decorating{" "}
            </p>
            <p className="lgtext-xl text-sm lg:w-[800px] w-[500px] pt-4 pb-4 text-[#9F9F9F] h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="font-semibold text-lg border-b-2 border-black mb-3 w-24 items-start ml-0 ">
              Read more{" "}
            </button>
          </div>
          <div className="flex flex-col lg:ml-8 ml-1">
            <Image
              src={"/blog 3.png"}
              alt="Third blog img"
              height={500}
              width={817}
              className="w-full max-w-[500px] lg:max-w-[817px] h-auto "

            />
            <div className="text-[#9F9F9F] flex gap-5 mt-4">
              <p>
                {" "}
                <Person />
                <span>Admin</span>{" "}
              </p>
              <p>
                {" "}
                <CalendarToday />
                <span>14 Oct 2022</span>
              </p>{" "}
              <p>
                <Sell />
                <span>Wood</span>
              </p>{" "}
            </div>
            <p className="font-bold text-3xl mt-4">
              Handmade Piece that took time to make{" "}
            </p>
            <p className="text-sm lg:text-xl lg:w-[800px] w-[500px] pt-4 pb-4 text-[#9F9F9F] h-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="font-semibold text-lg border-b-2 border-black mb-3 w-24 items-start ml-0 ">
              Read more{" "}
            </button>
          </div>
        </div>
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
      <Footer />
    </div>
  );
}

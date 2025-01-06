import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import LocationOn from "@mui/icons-material/LocationOn";
import Call from "@mui/icons-material/Call";
import Schedule from "@mui/icons-material/Schedule";
import Topfooter from "@/components/TopFooter";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="relative">
          <Image
            src={"/Rectangle 1.png"}
            alt="shopbg"
            height={316}
            width={14440}
            className="bg-cover"
          />
          <div className="absolute lg:top-[120px] top-10 left-44 lg:left-[650px]">
            <Image
              src={"/Meubel House_Logos-05.png"}
              alt="logo"
              width={70}
              height={70}
              className="pb-4 ml-9 hidden"
            />
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">
              Contact
            </h1>
            <div className="flex lg:mt-5 lg:text-xl">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Contact</p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="flex flex-col lg:mt-20 mt-10 justify-center items-center">
          <h1 className="font-extrabold text-3xl">Get In Touch With Us</h1>
          <p className="text-[#9F9F9F] lg:w-[600px] w-[400px] pt-8">
            {" "}
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us{" "}
            <span className="lg:block lg:px-5">
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </span>{" "}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-32 lg:mt-40 mt-16 mb-20 items-start">
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="pl-5">
              <div className="flex gap-4">
                <LocationOn className="mr-6" />
                <h1 className="font-bold text-2xl">Address</h1>
              </div>
              <p className="pl-16">
                236 5th SE Avenue,
                <span className="block"> New York NY10000, United </span> States
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <Call className="mr-5" />
                <h1 className="font-bold text-2xl">Phone</h1>
              </div>{" "}
              <p className="pl-16">Moblie: +(84) 546-6789</p>
              <p className="pl-16">Hotline: +(84) 546-6789</p>
            </div>
            <div>
              <div className="flex gap-4">
                <Schedule className="mr-5" />
                <h1 className="font-bold text-2xl">WorkingTime</h1>
              </div>{" "}
              <p className="pl-16">
                Moday-friday:9:00-<span className="block ">22:00</span>
              </p>
              <p className="pl-16">
                Saturday-sunday:9:00-<span className="block"> 21:00</span>
              </p>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-5 ml-6 lg:ml-0 -mt-10 mr-6">
              <label className="font-bold text-lg">Your Name:-</label>
              <input
                type="text"
                id="name"
                placeholder="abc"
                className="border-2 lg:w-[500px] w-[400px] p-4 rounded-md hover:border-blue-800"
              ></input>
              <label className="font-bold text-lg">Email Address:-</label>
              <input
                type="text"
                id="Email"
                placeholder="Abc@def.com"
                className="border-2 lg:w-[500px] w-[400px] p-4 rounded-md hover:border-blue-800"
              ></input>
              <label className="font-bold text-lg">Subject:-</label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optinal"
                className="border-2 lg:w-[500px] w-[400px] p-4 rounded-md hover:border-blue-800"
              ></input>
              <label className="font-bold text-lg">Message:-</label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about..."
                className="border-2 lg:w-[500px] w-[400px] h-24 p-4 rounded-md hover:border-blue-800"
                name="message"
              ></textarea>
            </form>
            <button className="bg-[#bc9536] h-14 w-44 rounded-sm mt-16 ml-6 lg:ml-0 text-[#FFFFFF] font-bold shadow-2xl hover:bg-[#d8a52d]  hover:translate-x-2 hover:translate-y-3">
              Submite
            </button>
          </div>
        </div>
      </main>
      <Topfooter/>
      <Footer/>
    </div>
  );
}

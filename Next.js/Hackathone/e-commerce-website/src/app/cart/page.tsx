import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Delete from "@mui/icons-material/Delete";
import { ChevronRight } from "lucide-react";
import Topfooter from "@/components/TopFooter";
import Footer from "@/components/Footer";
export default function cart() {
  return (
    <div>
      <Navbar />
      {/*cartbanner*/}
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
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">Cart</h1>
            <div className="flex lg:mt-5 lg:text-xl">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Cart</p>
            </div>
          </div>
        </div>
      </section>
      {/*MAIN*/}
      <main>
        <div className="flex flex-col lg:flex-row mt-8 ml-2 lg:m-20 justify-between items-start">
          <div className="flex lg:flex-col lg:justify-center justify-between items-start lg:items-center gap-16">
            <div className="flex flex-col lg:flex-row lg:gap-16 gap-44 p-6 lg:pl-32 lg:pr-36 font-bold rounded-md bg-[#F9F1E7] ">
              <h1 className="lg:pr-16">Product</h1>
              <h1>Price</h1>
              <h1 className="lg:pl-5">Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            <div className="lg:mt-20 ml-7 lg:ml-0 lg:flex lg:items-center gap-16 ">
              <div className="lg:flex gap-4 justify-center items-center">
                <Image
                  src={"/Asgaard sofa 3.png"}
                  alt="sofapic"
                  height={105}
                  width={105}
                  className="bg-[#F9F1E7] rounded-lg"
                />
                <h1 className="font-medium text-lg pt-5 lg:py-0 text-[#9F9F9F]">
                  Asgaard sofa
                </h1>
              </div>
              <p className="font-medium text-[#9F9F9F]  pt-24 lg:pt-0 text-lg">
                Rs.250,000.00
              </p>
              <p
                className="border-solid h-10 w-10 border-[#9F9F9F] mt-40 lg:mt-0 text-black text-center pt-2 
            border rounded-lg"
              >
                {" "}
                1{" "}
              </p>
              <p className="font-medium text-[#000000]  pt-40 lg:pt-0 text-lg">
                Rs.250,000.00
              </p>
              <Delete style={{ fontSize: 30, color: "#b88e2f" }} />
            </div>
          </div>
          <div className="bg-[#F9F1E7] lg:mb-0 mb-7 lg:ml-0 ml-8 lg:mt-0 mt-6 rounded-xl ">
            <div className="flex flex-col justify-center items-center gap-9 h-96 w-96">
              <h1 className="font-extrabold text-4xl -pt-2">Cart Totals</h1>
              <p className="font-bold text-lg">
                Subtotal{" "}
                <span className="text-[#9F9F9F] pl-5 font-thin">
                  Rs 250,000.00
                </span>
              </p>
              <p className="font-bold text-lg">
                Total{" "}
                <span className="text-[#b88e2f] pl-9 font-bold text-xl">
                  Rs 250,000.00
                </span>
              </p>
              <Link href={"/checkout"} className="border-solid h-16 w-44 pl-9 pt-4 font-bold text-lg  border-black border-2 rounded-lg ">
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Topfooter />
      <Footer />
    </div>
  );
}

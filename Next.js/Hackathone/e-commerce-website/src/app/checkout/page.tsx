"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Topfooter from "@/components/TopFooter";
import Footer from "@/components/Footer";
export default function checkout() {
  return (
    <div>
      <Navbar />
      {/*checkoutbanner*/}
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
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">
              CheckOut{" "}
            </h1>
            <div className="flex lg:mt-5 lg:text-xl">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Checkout</p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="flex lg:flex-row lg:justify-between flex-col  mt-16 mb-16">
          <div className="lg:ml-44 ml-8 mb-6 lg:mb-0">
            <h1 className="font-bold text-3xl ">Billing detailes</h1>
            <div className="mt-8 text-[#000000]">
              <form className="flex flex-col lg:gap-4 gap-2 ">
                <div className="flex lg:gap-9 flex-col lg:flex-row justify-center">
                  <div className="flex flex-col">
                    {" "}
                    <label className="font-medium text-lg">First Name</label>
                    <input
                      type="text"
                      className="border-2 mt-3 rounded-lg h-16 lg:w-52 w-[400px] hover:border-black pl-2"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <label className="font-medium text-lg">Last Name</label>
                    <input
                      type="text"
                      className="border-2 mt-3 rounded-lg h-16 lg:w-52 w-[400px] pl-2"
                    ></input>
                  </div>
                </div>
                <label className="font-medium text-lg">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 lg:lg:w-[453px] w-[400px] pl-2"
                ></input>
                <label className="font-medium text-lg">Country / Region</label>
                <select
                  id="country-select"
                  className="border-2 mt-3 pl-4 rounded-lg h-16 lg:lg:w-[453px] w-[400px] text-[#9F9F9F] "
                >
                  {" "}
                  <option value="">
                    Sri Lanka
                  </option>{" "}
                  <option value={"option1"}>USA</option>
                  <option value={"option3"}>USE</option>
                  <option value={"option4"}>China</option>
                </select>

                <label className="font-medium text-lg">Street address</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2"
                ></input>
                <label className="font-medium text-lg">Town / City</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2"
                ></input>
                <label className="font-medium text-lg">Province</label>
                <select
                  id="Province-option"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2 text-[#9F9F9F]"
                >
                  <option value="">
                    Western Province
                  </option>
                  <option value={"option1"}>South Province</option>{" "}
                  <option value={"option2"}>North Province</option>{" "}
                  <option value={"option3"}>East Province</option>{" "}
                </select>
                <label className="font-medium text-lg">ZIP code</label>
                <input
                  type="number"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2"
                ></input>
                <label className="font-medium text-lg">Phone</label>
                <input
                  type="tel"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2"
                ></input>
                <label className="font-medium text-lg">Email Address</label>
                <input
                  type="email"
                  className="border-2 mt-3 rounded-lg h-16 lg:w-[453px] w-[400px] pl-2"
                ></input>
                <input
                  type="text"
                  placeholder="Additional information"
                  className="border-2 mt-6 rounded-lg h-16 lg:w-[453px] w-[400px] pl-5 "
                ></input>
              </form>
            </div>
          </div>
          <div className="w-[500px] mr-52">
            <div className="flex justify-between mt-8 pb-10 border-b-2">
              <div className="ml-6 lg:ml-0 space-y-5">
                {" "}
                <h1 className="font-bold text-2xl pb-6">Product</h1>
                <p className="text-[#9F9F9F] flex text-lg ">
                  Asgaard Sofa <X size={18} /> <span>1</span>
                </p>
                <p className="text-lg">Subtotal</p>
                <p className="text-lg">Total</p>
              </div>
              <div className="space-y-5 mr-12 lg:mr-0">
                <h1 className="font-bold text-2xl pb-6">Subtotal</h1>
                <p className="text-lg">Rs 250,00.00</p>
                <p className="text-lg">Rs 250,00.00</p>
                <p className="text-[#B88E2F] text-2xl font-semibold">
                  Rs 250,00.00
                </p>
              </div>
            </div>
            <div className="ml-8 lg:ml-0">
              <div className="mt-10">
                <form>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="h-5 w-5 border-[#9F9F9F]"
                    />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <h1 className="w-[528] h-24 pr-4  text-[#9F9F9F] pt-5 ">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </h1>
                  <div className="flex flex-col mt-6 gap-3">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="w-4 h-4 border-[#9F9F9F]"
                      />
                      <span className="text-[#9F9F9F] pl-3">
                        Direct Bank Transfer
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="w-4 h-4 border-[#9F9F9F]"
                      />
                      <span className="text-[#9F9F9F] pl-3">
                        Cash On Delivery
                      </span>
                    </label>
                  </div>
                </form>
                <h1 className="w-[528] pr-4 h-24 pt-9">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold text-black">
                    {" "}
                    privacy policy.{" "}
                  </span>
                </h1>
              </div>
            </div>
            <div className="mt-16 mb-10 flex justify-center">
              <button className="border-2 border-black text-xl w-80 h-16 items-center rounded-lg hover:translate-x-3  hover:translate-y-2 shadow-md">
                Place order
              </button>
            </div>
          </div>
        </div>
      </main>
      <Topfooter />
      <Footer />
    </div>
  );
}

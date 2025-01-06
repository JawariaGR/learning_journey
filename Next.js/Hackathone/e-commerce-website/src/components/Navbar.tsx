"use client";
import React from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  CircleX,
  ShoppingBagIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import PersonAlert from "@mui/icons-material/Person";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export default function navbar() {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex items-center ml-0 md:ml-7 ">
        <Image
          src={"/Meubel House_Logos-05.png"}
          alt="logo"
          width={50}
          height={20}
        />{" "}
        <h1 className="font-bold font-200 text-2xl">Furniro</h1>
      </div>
      <div className="justify-center gap-12 font-bold hidden md:flex">
        <Link href={"/"}>Home</Link>
        <Link href={"/navshop"}>Shop</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="gap-5 hidden mr-9 md:flex ">
        <PersonAlert />
        <Search />
        <Heart />
        <Sheet>
          <SheetTrigger>
            <ShoppingCart />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>
              <div className="flex justify-between h-full mt-10 ">
                <h1 className="font-bold text-3xl border-b-2 pb-7 border-[#9F9F9F] w-60">
                  Shopping Cart
                </h1>
                <ShoppingBagIcon style={{ color: "#9F9F9F" }} />
              </div>
            </SheetTitle>

            <div className="flex justify-between items-center mt-16">
              <div>
                {" "}
                <Image
                  src={"/Asgaard sofa 3.png"}
                  alt="AsgaardSofa"
                  height={105}
                  width={105}
                  className="bg-[#efe6d1] rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl pb-2">Asgaard Sofa</h1>
                <div className="flex ">
                  <p className="pr-2">1</p>
                  <X size={20} />{" "}
                  <p className="text-[#b88e2f] pl-2">Rs.250,000.00</p>
                </div>
              </div>
              <div>
                <CircleX style={{ color: "#9F9F9F" }} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-7">
              <div>
                {" "}
                <Image
                  src={"/CasalivingWood.png"}
                  alt="CasalivingWood"
                  height={105}
                  width={105}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl pb-2">Asgaard Sofa</h1>
                <div className="flex ">
                  <p className="pr-2">1</p>
                  <X size={20} />{" "}
                  <p className="text-[#b88e2f] pl-2">Rs.270,000.00</p>
                </div>
              </div>
              <div>
                <CircleX style={{ color: "#9F9F9F" }} />
              </div>
            </div>
            <div className="lg:mt-60 mt-28">
              {" "}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-xl">Subtotal</p>
                  <p className="text-[#b88e2f] text-xl font-semibold">
                    Rs. 520,000.00
                  </p>
                </div>
              </div>
              <div className="flex border-t-2 border-[#9F9F9F]">
                <div className="mt-7">
                  <Link href={"/cart"}>
                    {" "}
                    <button className="h-9 lg:w-20 w-60 rounded-2xl items-center border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                      Cart
                    </button>
                  </Link>
                  <Link href={"/checkout"}>
                    {" "}
                    <button className="h-9 lg:w-28 w-60 mt-6 lg:mt-0 ml-1 rounded-2xl items-center  border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                      Checkout
                    </button>
                  </Link>
                  <Link href={"compare"}>
                    {" "}
                    <button className="h-9 lg:w-28 w-60 mt-6 lg:mt-0 ml-1 rounded-2xl items-center  border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                      Comparison
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col gap-3  h-full w-full items-center">
              <div className="mt-8 flex flex-col space-y-4">
                {" "}
                <Link href={"/"} className="font-semibold">
                  Home
                </Link>
                <Link className="font-semibold" href={"/navshop"}>
                  Shop
                </Link>
                <Link href={"/blog"} className="font-semibold">
                  Blog
                </Link>
                <Link href={"contact"} className="font-semibold">
                  Contact
                </Link>
                <p className="font-semibold">personAlert</p>
                <p className="font-semibold">Search</p>
                <p className="font-semibold">Like</p>
                <div className="block">
                  {" "}
                  <Sheet>
                    <SheetTrigger className="font-semibold">Cart</SheetTrigger>
                    <SheetContent>
                      <SheetTitle>
                        <div className="flex justify-between h-full mt-10 ">
                          <h1 className="font-bold text-3xl border-b-2 pb-7 border-[#9F9F9F] w-60">
                            Shopping Cart
                          </h1>
                          <ShoppingBagIcon style={{ color: "#9F9F9F" }} />
                        </div>
                      </SheetTitle>

                      <div className="flex justify-between items-center mt-16">
                        <div>
                          {" "}
                          <Image
                            src={"/Asgaard sofa 3.png"}
                            alt="AsgaardSofa"
                            height={105}
                            width={105}
                            className="bg-[#efe6d1] rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-xl pb-2">Asgaard Sofa</h1>
                          <div className="flex ">
                            <p className="pr-2">1</p>
                            <X size={20} />{" "}
                            <p className="text-[#b88e2f] pl-2">Rs.250,000.00</p>
                          </div>
                        </div>
                        <div>
                          <CircleX style={{ color: "#9F9F9F" }} />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-7">
                        <div>
                          {" "}
                          <Image
                            src={"/CasalivingWood.png"}
                            alt="CasalivingWood"
                            height={105}
                            width={105}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-xl pb-2">Asgaard Sofa</h1>
                          <div className="flex ">
                            <p className="pr-2">1</p>
                            <X size={20} />{" "}
                            <p className="text-[#b88e2f] pl-2">Rs.270,000.00</p>
                          </div>
                        </div>
                        <div>
                          <CircleX style={{ color: "#9F9F9F" }} />
                        </div>
                      </div>
                      <div className="lg:mt-60 mt-28">
                        {" "}
                        <div>
                          <div className="flex justify-between">
                            <p className="font-bold text-xl">Subtotal</p>
                            <p className="text-[#b88e2f] text-xl font-semibold">
                              Rs. 520,000.00
                            </p>
                          </div>
                        </div>
                        <div className="flex border-t-2 border-[#9F9F9F]">
                          <div className="mt-7">
                            <Link href={"/cart"}>
                              {" "}
                              <button className="h-9 lg:w-20 w-60 rounded-2xl items-center border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                                Cart
                              </button>
                            </Link>
                            <Link href={"/checkout"}>
                              {" "}
                              <button className="h-9 lg:w-28 w-60 mt-6 lg:mt-0 ml-1 rounded-2xl items-center  border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                                Checkout
                              </button>
                            </Link>
                            <Link href={"compare"}>
                              {" "}
                              <button className="h-9 lg:w-28 w-60 mt-6 lg:mt-0 ml-1 rounded-2xl items-center  border-2 border-black font-thin text-lg hover:translate-x-2 hover:translate-y-3 shadow-lg shadow-gray-500">
                                Comparison
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

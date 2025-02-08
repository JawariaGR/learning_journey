import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeadCompnents {
  title: string;
}

function HeadBanner({ title }: HeadCompnents) {
  return (
    <div>
      {" "}
      <div className="relative">
        <Image
          src={"/Rectangle 1.png"}
          alt="title"
          height={316}
          width={14440}
        />
        <div className="absolute lg:top-[150px] top-9 left-44 lg:left-[650px]">
          <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">
            {title}
          </h1>
          <div className="flex lg:mt-5 lg:text-xl">
            <Link href={"/"} className="font-bold">
              Home
            </Link>
            <ChevronRight />
            <p className="font-thin">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadBanner;

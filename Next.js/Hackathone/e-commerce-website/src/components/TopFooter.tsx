import Image from "next/image";
export default function Topfooter() {
  return (
    <div className="flex justify-center bg-[#faf3ea]">
      <div className="gap-16 mt-20 mb-20 lg:flex">
        <div className="flex">
          <Image src={"/tropy.png"} alt="toppic" height={50} width={80} />
          <h1 className="pl-4 pt-4 font-bold text-xl">
            High Quality
            <span className="block text-[#898989] text-md font-medium">
              crafted from top materials
            </span>
          </h1>
        </div>
        <div className="flex mt-5 lg:mt-0">
          <Image src={"/warrenty.png"} alt="toppic" height={60} width={80} />
          <h1 className="pl-4 pt-2 font-bold text-xl">
            Warranty Protection
            <span className="block text-[#898989] text-md font-medium">
              Over 2 year
            </span>
          </h1>
        </div>
        <div className="flex mt-5 lg:mt-0">
          <Image src={"/shipping.png"} alt="toppic" height={60} width={80} />
          <h1 className="pl-4 pt-2 font-bold text-xl">
            Free Shipping
            <span className="block text-[#898989] text-md font-medium">
              Order over 150 $
            </span>
          </h1>
        </div>
        <div className="flex mt-5 lg:mt-0">
          <Image
            src={"/customer-support.png"}
            alt="toppic"
            height={50}
            width={80}
          />
          <h1 className="pl-4 pt-2 font-bold text-xl">
            24 / 7 Support
            <span className="block text-[#898989] text-md font-medium">
              Dedicated support
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

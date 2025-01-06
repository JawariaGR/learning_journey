import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-2">
      <div className=" flex flex-col lg:flex-row justify-between m-16">
        <div>
          <h1 className="font-bold text-2xl mt-7 mb-10">Funiro</h1>
          <p className="text-xl text-[#9F9F9F]">
            400 Univercity Drive Suite 200 coral
          </p>
          <p className="text-xl text-[#9F9F9F]">
            Gables,<span className="block">FL 33134 USA</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-2xl mt-5 mb-10 text-[#9F9F9F]">
            Links
          </h1>
          <Link href={"/"} className="pb-4 text-lg font-bold">Home</Link>
          <Link href={"/"} className="pb-4 text-lg font-bold">Shop</Link>
          <Link href={"/"} className="pb-4 text-lg font-bold">About</Link>
          <Link href={"/"} className="pb-4 text-lg font-bold">Contact</Link>
        </div>
        <div>
          <h1 className="font-medium text-2xl mt-5 mb-10 text-[#9F9F9F]">
            Help
          </h1>
          <p className="pb-4 text-lg font-bold">Payment Option</p>
          <p className="pb-4 text-lg font-bold">Returns</p>
          <p className="pb-4 text-lg font-bold">Privacy Policies</p>
        </div>
        <div>
          <h1 className="font-medium text-2xl mt-5 mb-10 text-[#9F9F9F]">
            Newsletter
          </h1>
          <div className="flex flex-row gap-7">
            {" "}
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="pr-12 h-8 w-60 pl-2 border-b-black border-b-2"
              ></input>
            </form>
            <p className="text-center border-b-black border-b-2 w-28 items-start ">
              SUBSCRIBE
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 m-12">
          <p className="pt-6">2023 furino. All rights reverved</p>
        </div>
    </div>
  );
}

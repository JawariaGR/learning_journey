import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductfromsanity } from "@/sanity/lib/fetchProduct";
import { latestProduct } from "@/sanity/lib/latestproduct";
interface productCard {
  _id: string;
  productName: string;
  description: string;
  realPrice: string;
  discount: string;
  discountPrice: string;
  imageUrl: string;
  newarrival:string
}
async function ProductCard() {

const products:productCard[] = await fetchProductfromsanity({quary:latestProduct})

  return (
    <div className="flex justify-center items-center mb-8 mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative group shadow-xl rounded-lg bg-[#f4f5f7]"
          >
            <Link href={`/single-product/`}>
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  width={285}
                  height={301}
                />
              ) : (
                <div className="w-[285px] h-[301px] bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">No Image</p>
                </div>
              )}
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
                    <Link href="/compare" className="flex">
                      <ArrowLeftRight />
                      <p>Compare</p>
                    </Link>
                  </div>
                  <div className="flex">
                    <Heart />
                    <p className="pr-0">Like</p>
                  </div>
                </div>
              </div>
              {product.newarrival &&
              <div className="absolute bg-[#2ec1ac] text-[#fceded] font-bold h-14 w-14 top-3  flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0">
              <p>{product.newarrival}</p>
            </div>}
              {product.discount &&
              <div className="absolute bg-[#e97171] text-[#fceded] font-bold h-14 w-14 top-3 flex justify-center ml-48 rounded-3xl items-center opacity-100 group-hover:opacity-0 ">
                <p>-{product.discount}%</p>
              </div>}
            </Link>
            <div className="m-7">
              <h1 className="font-bold">{product.productName}</h1>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="font-bold pt-2">
                {product.discountPrice ?(product.discountPrice):product.realPrice}{" "}
                <span className="pl-2 font-light">
                {product.discountPrice && <del>{product.realPrice}</del>}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductCard;

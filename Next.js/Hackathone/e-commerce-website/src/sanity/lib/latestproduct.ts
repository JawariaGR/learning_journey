import { defineQuery } from "next-sanity";

export const latestProduct = defineQuery(`*[_type == "Product"]{
    _id,
    name,
    description,
    "imageUrl":image.asset->url,
    realPrice,
    discountPrice,
    discount,
    newarrival

    }`)

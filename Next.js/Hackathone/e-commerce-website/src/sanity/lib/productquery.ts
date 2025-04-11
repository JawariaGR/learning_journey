import { defineQuery } from "next-sanity";
export const allProductsQuery = defineQuery(` *[_type == "Product"]
   | order(_createdAt desc) {
    _id,
   productName,
    slug,
    Stock,
    Sold,
    description,
    "imageUrl":image.asset->url,
    realPrice,
    discountPrice,
    discount,
    newarrival
        }
      `);

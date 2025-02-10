import { defineQuery } from "next-sanity";

export const fourProduct = defineQuery(`*[_type == "Product"]
    | order(_createdAt desc)[0...4]{
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
    }`);
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

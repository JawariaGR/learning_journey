import { defineQuery } from "next-sanity";
export const blogQuery = defineQuery(`*[_type == "blog"]
    | order(_createdAt desc) {
    _id,
    blogtitle,
    slug,
   "imageUrl":image.asset->url,
    blogdate,
    author,
    content,
    tags
    }`);

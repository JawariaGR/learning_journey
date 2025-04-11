"use client";
import { useState } from "react";
import Image from "next/image";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Sell from "@mui/icons-material/Sell";
import Person from "@mui/icons-material/Person";
interface blogcard {
  blogs: {
    _id: string;
    blogtitle: string;
    slug: string;
    imageUrl: string;
    blogdate: string;
    author: string;
    content: string;
    tags: string;
  };
}
async function blogcard({ blogs }: blogcard) {
  const maxlenght = 200;
  const [Readmore, setreadmore] = useState(false);
  const handlecontent = () => {
    setreadmore((recentState) => !recentState);
  };
  const truncatedContent = blogs.content.slice(0, maxlenght);
  const showContent = Readmore ? blogs.content : truncatedContent;

  return (
    <div>
      {blogs.map((blogs) => (
        <div key={blogs._id} className="flex flex-col lg:ml-8 ml-1">
          <Image
            src={blogs.imageUrl}
            alt={blogs.blogtitle || "Blog pic"}
            height={500}
            width={817}
            className="w-full max-w-[500px] lg:max-w-[817px] h-auto "
          />
          <div className="text-[#9F9F9F] flex gap-5 mt-4">
            <p>
              {" "}
              <Person />
              <span>{blogs.author}</span>{" "}
            </p>
            <p>
              {" "}
              <CalendarToday />
              <span>{blogs.blogdate}</span>
            </p>{" "}
            <p>
              <Sell />
              <span>{blogs.tags}</span>
            </p>{" "}
          </div>
          <p className="font-bold text-3xl mt-4">{blogs.blogtitle}</p>
          <p className="lg:text-xl text-sm w-[500px] lg:w-[800px] pt-4 pb-4 text-[#9F9F9F] h-[200px]">
            {showContent}{" "}
          </p>
          <button className="font-semibold text-lg border-b-2 border-black mb-3 w-24 items-start ml-0 "
          onClick={handlecontent}>
            {Readmore ? "Read less" : "Read more"}{" "}
          </button>
        </div>
      ))}
    </div>
  );
}

export default blogcard;

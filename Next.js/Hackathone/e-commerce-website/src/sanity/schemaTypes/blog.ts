export const blogInfo = {
  name: "blog",
  type: "document",
  title: "Blog Information",
  fields: [
    { name: "blogtitle", type: "string", title: "Blog Title" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "blogtitle" },
    },
    { name: "image", type: "image", title: "Blog Image" },
    {name:"blogdate" , type:"date",title:"Blog Date",options:{dateFormat:'YYYY-MM-DD'}},
    { name: "author", type: "string", title: "Author" },
    { name: "content", type: "text", title: "Content" },
    { name: "tags", type: "array", of: [{ type: "string" }] },
  ],
};

export const productInfo = {
  name: "Product",
  type: "document",
  title: "Product Information",
  fields: [
    {
      name: "productName",
      type: "string",
      title: "Product Name",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,
      },
    },
    {
      name: "Stock",
      type: "number",
      title: "Stock",
    },
    {
      name: "Sold",
      type: "number",
      title: "Sold",
    },
    {
      name: "description",
      type: "text",
      title: "Product description",
    },
    {
      name: "image",
      type: "image",
      title: "Product image",
    },

    {
      name: "realPrice",
      type: "string",
      title: "Real price",
    },
    {
      name: "discountPrice",
      type: "string",
      title: "Discounts price",
    },
    {
      name: "discount",
      type: "number",
      title: "Discounts",
    },
    {
      name: "newarrival",
      type: "string",
      title: "New Arrival",
    },
  ],
};

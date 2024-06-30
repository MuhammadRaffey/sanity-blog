import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});

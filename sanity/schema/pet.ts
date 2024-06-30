import { defineField, defineType } from "sanity";

export const petType = defineType({
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
  ],
});

import { defineField, defineType } from "sanity";

const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        sortable: true,
      },
      validation: (Rule) =>
        Rule.min(1).error("At least one image is required."),
    }),
  ],
});

export default projectType;

import { FaLanguage } from "react-icons/fa"

export default {
  name: "language",
  title: "Language",
  type: "document",
  icon: FaLanguage,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "resources",
      title: "Helpful resources",
      type: "array",
      of: [
        {
          type: "url",
        },
      ],
    },
    {
      name: "specs",
      title: "Specs URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Language Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
}

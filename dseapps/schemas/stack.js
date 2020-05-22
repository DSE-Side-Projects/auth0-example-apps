import { MdComputer } from "react-icons/md"

export default {
  name: "stack",
  title: "Stack",
  type: "document",
  icon: MdComputer,
  fields: [
    {
      name: "title",
      title: "title",
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
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "language",
            },
          ],
        },
      ],
    },
    {
      name: "docs",
      title: "Stack Docs URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Stack Logo",
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
      subtitle: "languages.0.title",
    },
  },
}

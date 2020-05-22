import { GrCloudUpload } from "react-icons/gr"

export default {
  name: "deployment",
  title: "Deployment",
  type: "document",
  icon: GrCloudUpload,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "button",
      title: "Deployment Button Image URL",
      type: "url",
    },
    {
      name: "deploymentUrl",
      title: "Deployment URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Service Logo",
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

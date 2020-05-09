import { GrAppleAppStore } from "react-icons/gr"

export default {
  name: "app",
  title: "App",
  type: "document",
  icon: GrAppleAppStore,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Site URL",
      type: "url",
    },
    {
      name: "appId",
      title: "Application Netlify ID",
      type: "string"
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
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "technology",
      title: "Technology",
      type: "reference",
      to: [{ type: "stack" }],
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "quickstart",
      title: "Auth0 Quickstart URL",
      type: "url",
    },
    {
      name: "docs",
      title: "Auth0 Docs URL",
      type: "url",
    },
    {
      name: "deploy",
      title: "Deploy URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "screenshot",
      subtitle: "technology.title",
    },
  },
}

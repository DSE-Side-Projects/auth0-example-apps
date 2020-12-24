declare module "*.png" {
  const value: any
  export = value
}

declare module "*.svg" {
  const content: any
  export default content
}

type Asset = {
  asset: {
    fluid: any
  }
}
interface Deploy {
  title: string
  deploymentUrl: string
  button: string
  logo: Asset
}

interface Screenshot {
  image: {
    asset: {
      fluid: any
    }
  }
  screenshotMetadata: any
}

interface Technology {
  title: string
  slug: {
    current: string
  }
  logo: Asset
  languages: {
    title: string
    logo: Asset
  }
}

interface Slug {
  current: string
}

interface DescriptionChildren {
  _key: string
  _type: string
  marks: Array<any>
  text: string
}

interface Description {
  _key: string
  _type: string
  children: Array<DescriptionChildren>
  markDefs: Array<any>
  style: string
}
interface IApplication {
  data?: {
    sanityApp: IApplication
    coverImage: Screenshot
  }
  title: string
  screenshot: Screenshot
  deploy: Deploy
  github: string
  _rawDescription: Array<Record<string, unknown>>
  technology: Technology
  slug: Slug
  quickstart: string
  docs: string
  url: string
  _id: string
}

interface IApplications {
  data: {
    coverImage?: Screenshot
    allSanityApp: {
      edges: IApplicationNode[]
    }
  }
}

interface IApplicationNode {
  node: IApplication
}

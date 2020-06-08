declare module "*.png" {
  const value: any
  export = value
}

interface Deploy {
  title: string
  deploymentUrl: string
  button: string
}

interface Screenshot {
  asset: {
    fluid: {
      src: string
    }
  }
}

interface Technology {
  title: string
  slug: {
    current: string
  }
  logo: {
    asset: {
      url: string
    }
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
    allSanityApp: {
      edges: IApplicationNode[]
    }
  }
}

interface IApplicationNode {
  node: IApplication
}

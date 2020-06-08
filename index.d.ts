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

interface IApplication {
  title: string
  screenshot: {
    asset: {
      url: string
    }
  }
  deploy: {
    title: string
    deploymentUrl: string
    button: string
  }
  github: string
  _rawDescription: Array<Record<string, unknown>>
  technology: {
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
  slug: {
    current: string
  }
  quickstart: string
  docs: string
  url: string
  _id: string
}

declare module "*.png" {
  const value: any
  export = value
}

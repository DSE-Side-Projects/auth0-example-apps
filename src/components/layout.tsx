import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as logo from "../images/auth0-logo-forlightbg.png"
import shareIcon from "../placeholders/icons/share.svg"
import starIcon from "../placeholders/icons/star.svg"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query allAppsAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container max-w-8xl mx-auto px-4">
        <main className="w-full">{children}</main>
        <footer>
          <div className="flex flex-wrap items-center py-4 px-4 border-b">
            <div className="w-full lg:w-1/5 text-center lg:text-left">
              <Link
                className="text-xl text-indigo-500 font-semibold"
                to="/"
                title={data.site.siteMetadata.title}
              >
                <img
                  src={logo}
                  className="float-left mr-2"
                  width="80px"
                  alt="Auth0 logo"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
              <Link
                className="inline-block mx-8 mb-4 lg:mb-0 text-blue-900 hover:text-orange-700"
                to="/"
              >
                Home
              </Link>
              <Link
                className="inline-block mx-8 mb-4 lg:mb-0 text-blue-900 hover:text-orange-700"
                to="/about"
                title="About page"
              >
                About
              </Link>
              <a
                className="inline-block mx-8 mb-4 lg:mb-0 text-blue-900 hover:text-orange-700"
                rel="preload"
                href="https://auth0.com"
              >
                Learn Identity
              </a>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
              <img className="w-6 h-6 mx-8" src={shareIcon} alt="" />
              <img className="w-6 h-6" src={starIcon} alt="" />
            </div>
          </div>

          <div className="py-4 text-center">
            <span className="block md:inline-block mb-4 md:mb-0 mx-3"></span>
            <p className="mt-2">Identity is complex. Deal with it.</p>
            <p>© 2020</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as logo from "../images/auth0-logo-forlightbg.png"

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
      <div className="container mx-auto px-4">
        <main>{children}</main>
        <footer>
          <div className="flex flex-wrap items-center py-4 px-4 border-b">
            <div className="w-full lg:w-1/5 text-center lg:text-left">
              <a className="text-xl text-indigo-500 font-semibold" href="#">
                Dunder Mifflin
              </a>
            </div>

            <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
              <a
                className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
                href="#"
              >
                Products
              </a>
              <a
                className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
                href="#"
              >
                Team
              </a>
              <a
                className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
                href="#"
              >
                Customers
              </a>
              <a
                className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
                href="#"
              >
                Blog
              </a>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
              <img
                className="w-6 h-6"
                src="placeholders/icons/message.svg"
                alt=""
              />
              <img
                className="w-6 h-6 mx-8"
                src="placeholders/icons/share.svg"
                alt=""
              />
              <img
                className="w-6 h-6"
                src="placeholders/icons/star.svg"
                alt=""
              />
            </div>
          </div>

          <div className="py-4 text-center">
            <span className="block md:inline-block mb-4 md:mb-0 mx-3"></span>
            <p className="mt-2">Identity is complex. Deal with it.</p>
            <a
              className="inline-block mx-4 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="inline-block mx-4 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Term of Service
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout

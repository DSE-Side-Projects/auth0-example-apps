import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"
import Img from "gatsby-image"

const Application = (app: IApplicationNode) => {
  const slug = `/app/${app.node.slug.current}`

  return (
    <>
      <div className="md:flex shadow-2xl md:mx-auto border border-gray-300 w-sm md:w-xl h-96 rounded overflow-hidden mx-auto my-10 bg-gray-100">
        <Link
          to={slug}
          className="md:max-w-1/2 w-1/3 align-middle"
          title={app.node.title}
        >
          {app.node.screenshot.asset.fluid ? (
            <Img
              className="px-2 py-2 min-h-full min-w-1/3 object-cover"
              style={{ filter: "grayscale(70%)" }}
              fluid={app.node.screenshot.asset.fluid}
              alt={app.node.title}
              loading="lazy"
            />
          ) : (
            <ProfilePlaceholder type="screenshot" />
          )}
        </Link>
        <div className="flex w-full h-full md:w-2/3 px-4 py-4 rounded-lg flex-col justify-between">
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2 text-orange-900">
              <Link to={slug} title={app.node.title}>
                <h2 className="text-2xl mb-2">{app.node.title}</h2>
              </Link>
              <div
                className="flex max-h-sm"
                style={{ filter: "grayscale(80%) opacity(40%)" }}
              >
                <img
                  src={app.node.technology.logo.asset.fluid.srcWebp}
                  alt={app.node.title}
                  className="mx-1 h-5"
                  loading="lazy"
                />
                <img
                  src={
                    app.node.technology.languages[0].logo.asset.fluid.srcWebp
                  }
                  alt={app.node.title}
                  className="mx-1 h-5"
                  loading="lazy"
                />{" "}
                <img
                  src={app.node.deploy.logo.asset.fluid.srcWebp}
                  alt={app.node.title}
                  className="mx-1 h-5"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-700 my-4 leading-relaxed overflow-hidden antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased">
            {app.node._rawDescription[0].children[0].text}
          </p>
          <div className="flex justify-between mt-4 top-auto">
            <a href={`${app.node.deploy.deploymentUrl}${app.node.github}`}>
              <button className="inline-block py-3 px-5 mr-4 leading-none text-center hover:bg-orange-900 hover:text-white duration-200 text-gray-800 font-semibold my-4 border hover:border-orange-900 border-gray-100 rounded shadow ">
                Deploy
              </button>
            </a>
            <a href={app.node.github}>
              <button className="inline-block py-3 px-5 mr-4 leading-none text-center hover:bg-orange-900 hover:text-white duration-200 text-gray-800 font-semibold my-4 border hover:border-orange-900 border-gray-100 rounded shadow ">
                Clone
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Application

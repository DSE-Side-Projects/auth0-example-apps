import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"
import Img from "gatsby-image"

const Application = (app: IApplicationNode) => {
  const slug = `/app/${app.node.slug.current}`

  return (
    <>
      <div className="shadow-2xl border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 lg:rounded-lg p-0 flex flex-col justify-between leading-normal bg-gray-100 border sm:w-full lg:w-2/5 mx-2 my-5 rounded-sm overflow-hidden">
        <div className="relative">
          <Link
            to={slug}
            // className="md:max-w-1/2 w-1/3 align-middle px-1 py-1"
            title={app.node.title}
          >
            {app.node.screenshot.image.asset.fluid ? (
              <Img
                className="absolute w-full object-cover"
                style={{ filter: "grayscale(40%)" }}
                fluid={app.node.screenshot.image.asset.fluid}
                title={app.node.title}
                alt={app.node.title}
                loading="lazy"
              />
            ) : (
              <ProfilePlaceholder type="screenshot" />
            )}
          </Link>
        </div>

        <div className="p-6">
          <div className="flex items-baseline">
            <span className="inline-block bg-teal-300 text-teal-900 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
          </div>

          <h4 className="my-3 font-semibold text-3xl text-orange-900 leading-tight">
            <Link
              to={slug}
              title={app.node.title}
              className="flex w-full items-center break-normal"
            >
              {app.node.title}{" "}
            </Link>
          </h4>
          <span className="flex text-xs uppercase font-semibold tracking-wide">
            <Img
              className="mr-1 h-4 w-4"
              fluid={app.node.technology.logo.asset.fluid}
            />
            <Img
              fluid={app.node.technology.languages[0].logo.asset.fluid}
              className="h-4 w-4 mx-1"
            />{" "}
            <Img
              fluid={app.node.deploy.logo.asset.fluid}
              className="h-4 w-4 ml-1"
            />
          </span>
          <p className="text-gray-600 my-5">
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

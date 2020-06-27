import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"
import Img from "gatsby-image"

const Application = (app: IApplicationNode) => {
  const slug = `/app/${app.node.slug.current}`

  return (
    <>
      <div className="max-w-sm w-xl lg:max-w-xl lg:flex shadow-2xl border border-gray-300 w-sm md:w-xl h-96 rounded overflow-hidden mx-auto my-10 bg-gray-100">
        <Link
          to={slug}
          className="md:max-w-1/2 w-1/3 align-middle px-1 py-1"
          title={app.node.title}
        >
          {app.node.screenshot.asset.fluid ? (
            <Img
              className="h-36 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center"
              style={{ filter: "grayscale(40%)" }}
              fluid={app.node.screenshot.asset.fluid}
              title="Woman holding a mug"
              alt={app.node.title}
              loading="lazy"
            />
          ) : (
            // <Img
            //   className="px-2 py-2 min-h-full min-w-1/3 object-cover"
            //   style={{ filter: "grayscale(70%)" }}
            //   fluid=
            //   alt={app.node.title}
            //   loading="lazy"
            // />
            <ProfilePlaceholder type="screenshot" />
          )}
        </Link>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gray-100">
          <div className="mb-8">
            {/* <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p> */}
            <div className="text-gray-900 font-bold text-xl mb-2">
              <Link to={slug} title={app.node.title}>
                <h2 className="text-2xl mb-2 text-orange-900">
                  {app.node.title}
                </h2>
              </Link>
              <div
                className="flex max-h-sm"
                style={{ filter: "grayscale(20%) opacity(80%)" }}
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
          <p className="text-gray-700 text-base">
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

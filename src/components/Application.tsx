import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faReact,
  faNodeJs,
  faJava,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons"

const Application = (app: IApplicationNode) => {
  const slug = `/app/${app.node.slug.current}`

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="relative pb-2/3">
          <Link
            to={slug}
            // className="md:max-w-1/2 w-1/3 align-middle px-1 py-1"
            title={app.node.title}
          >
            {app.node.screenshot.asset.fluid ? (
              <Img
                className="relative w-full object-cover"
                style={{ filter: "grayscale(40%)" }}
                fluid={app.node.screenshot.asset.fluid}
                title={app.node.title}
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
        </div>

        <div className="p-6">
          <div className="flex items-baseline">
            <span className="inline-block bg-orange-300 text-orange-900 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
          </div>

          <h4 className="mt-3 mb-1 font-semibold text-lg leading-tight truncate">
            <Link to={slug} title={app.node.title}>
              {app.node.title}{" "}
              <span className="text-gray-500 text-md font-semibold tracking-wide my-0">
                <FontAwesomeIcon icon={faJava} className="mr-2" />
                <FontAwesomeIcon icon={faAngular} className="mr-2" />
                {/* {app.node.technology.title} |{" "}
              {app.node.technology.languages[0].title} | {app.node.deploy.title} */}
              </span>
            </Link>
          </h4>

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

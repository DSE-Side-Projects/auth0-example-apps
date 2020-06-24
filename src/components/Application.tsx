import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"

const Application = (app: IApplicationNode) => {
  const slug = `/app/${app.node.slug.current}`
  console.log(app.node.screenshot.asset.fluid.src)

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
        <Link to={slug}>
          {app.node.screenshot ? (
            <img
              className="w-full mb-2"
              src={app.node.screenshot.asset.fluid.src}
              alt={app.node.title}
              loading="lazy"
            />
          ) : (
            <ProfilePlaceholder type="screenshot" />
          )}
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-orange-900">
            <Link to={slug}>
              <h2 className="text-2xl">{app.node.title}</h2>
            </Link>
          </div>
          <div className="text-gray-700 my-4 leading-relaxed tracking-wide antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased">
            {app.node._rawDescription[0].children[0].text}
          </div>
          <div className="flex justify-between my-6">
            <p>
              <a href={app.node.quickstart} className="text-gray-600">
                Quickstart
              </a>
            </p>
            <p>
              <a href={app.node.docs} className="text-gray-600">
                Docs
              </a>
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <a
              href={app.node.deploy.deploymentUrl + app.node.github}
              className="deploy"
            >
              <img
                src={app.node.deploy.button}
                alt={`Deploy to ${app.node.deploy.title}`}
                title={`Deploy to ${app.node.deploy.title}`}
              />
            </a>
          </div>
          <div className="flex justify-center">
            <a href={app.node.url} className="w-full">
              <button className=" bg-white w-full hover:bg-orange-900 hover:text-white duration-200 text-gray-800 font-semibold py-2 px-4 my-8 border hover:border-orange-900 border-gray-100 rounded shadow">
                {app.node.title} &rarr;
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Application

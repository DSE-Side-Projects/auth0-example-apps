import React from "react"
import { Link } from "gatsby"
import illustration from "../images/p-dashboard-6fc11ba51b.png"

const Hero = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
        <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
          <h2 className="text-5xl mb-6 leading-tight font-heading">
            Identity is complex. Supporting identity is even{" "}
            <em>
              <abbr title="Oh, shut up. Words are hard too.">complexer</abbr>
            </em>
            .
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            This site is a collection of tools, examples, pre-built source code,
            compiled apps and Auth0 tenant settings. It aims to help Auth0
            Developer Support Engineers to streamline debugging, troubleshooting
            and reproducing issues in a variety of environments, languages,
            frameworks and platforms.
          </p>
          <div>
            <Link className="text-black-900 hover:underline hover:text-orange-900" to="/about">
              Learn more
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 px-2">
          <img src={illustration} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero

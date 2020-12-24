import Nav from "../components/Nav"
import Footer from "../components/Footer"
import auth0 from "../utils/auth0"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>Dashboard | DSE Sample Apps</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png"></link>
      </Head>
      <Nav user={user} />
      <div>
        <img
          className=" z-50  h-32 w-full object-cover lg:h-48"
          src="/markus-spiske-iar-afB0QQw-unsplash.jpg"
          alt=""
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={user.picture}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-gray-900 truncate">
                  <p className="font-mono font-bold text-2xl my-0">
                    {user.name}
                  </p>
                  <a
                    href={`https://duckduckgo.com/?q=map+${user["https://example.com/geoip"].latitude}%2C+${user["https://example.com/geoip"].longitude}&t=ffab&atb=v199-1&ia=web&iaxm=maps`}
                    className="max-w-xl mt-1 mx-auto text-sm text-gray-500"
                  >
                    {user["https://example.com/geoip"].city_name},{" "}
                    {user["https://example.com/geoip"].country_name}
                  </a>
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {user.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 xl:w-2/3 xl:mx-auto">
        <h2 className="text-gray-500 px-5 text-xs font-medium uppercase tracking-wide">
          DSE Tools
        </h2>
        <ul className="mt-3 grid grid-cols-1 px-5 xs:px-5 sm:px-5xl:px-0 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange text-white text-sm font-medium rounded-l-md">
              RL
            </div>
            <div className="flex-1 flex mx-auto items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate text-gray-900 font-medium hover:text-gray-600">
                <Link href="/dashboard/logs">Request Log</Link>
                <p className="text-gray-500">Debug Rules</p>
              </div>
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              CS
            </div>
            <div className="flex-1 flex mx-auto items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  Coming Soon
                </a>
                <p className="text-gray-500">Coming Soon</p>
              </div>
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md">
              CS
            </div>
            <div className="flex-1 flex mx-auto items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  Coming Soon
                </a>
                <p className="text-gray-500">Coming Soon</p>
              </div>
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              CS
            </div>
            <div className="flex-1 flex mx-auto items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  Coming Soon
                </a>
                <p className="text-gray-500">Coming Soon</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req)
  if (!session || !session.user) {
    context.res.writeHead(302, {
      Location: "/api/login",
    })
    context.res.end()
    return {
      props: {
        user: null,
      },
    }
  }

  return {
    props: {
      user: session?.user || null,
    },
  }
}

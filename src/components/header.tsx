import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "../utils/auth"

const Header = ({ siteTitle }) => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0()

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between bg-gray-200  p-4">
        <div className="flex flex-shrink-0 mr-6">
          <Link className="text-xl text-black-500 font-semibold" to="/">
            <img
              src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
              className="float-left mr-2"
              width="80px"
              alt="Auth0 logo"
            />
            {siteTitle}
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
          <div className="lg:ml-auto">
            <Link
              className="block lg:inline-block py-3 px-5 mr-4 text-blue-900 hover:text-blue-700"
              to="/about"
            >
              About
            </Link>
          </div>
          <div>
            {!isAuthenticated && !loading && (
              <button
                className="inline-block py-3 px-5 mr-4 leading-none text-center text-white bg-orange-900 hover:bg-orange-700 duration-200 hover:text-white rounded shadow "
                onClick={() =>
                  loginWithRedirect({
                    appState: `${window.location.pathname}`,
                  })
                }
              >
                Sign in
              </button>
            )}
            {isAuthenticated && (
              <>
                <Link className="my-auto mr-5 text-black-50" to="/profile">
                  My Profile
                </Link>
                <button
                  className="inline-block py-3 px-5 mr-4 leading-none text-center text-white bg-orange-900 hover:bg-orange-700 hover:text-white rounded shadow"
                  onClick={() => logout()}
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* <
        <Nav className="ml-auto" navbar>
          
          <Link to="/about" className="my-auto mr-5 text-dark">
            About
          </Link>
          {!isAuthenticated && !loading && (
            <Button
              onClick={() =>
                loginWithRedirect({ appState: `${window.location.pathname}` })
              }
            >
              Log in
            </Button>
          )}
          {isAuthenticated && (
            <>
              <Link className="my-auto mr-5 text-black-50" to="/profile">
                My Profile
              </Link>
              <Button onClick={() => logout()}>Log out</Button>
            </>
          )}
        </Nav>
      </Navbar> */}
    </>
  )
}

export default Header

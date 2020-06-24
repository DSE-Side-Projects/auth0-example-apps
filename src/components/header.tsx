import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "../utils/auth"

const Header = ({ siteTitle }) => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0()

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-4">
        <div className="flex flex-shrink-0 mr-6">
          <a className="text-xl text-indigo-500 font-semibold" href="#">
            <img
              src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
              className="float-left mr-2"
              width="80px"
              alt="Auth0 logo"
            />
          </a>
          <Link to="/">{siteTitle}</Link>
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
            <a
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Products
            </a>
            <a
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Team
            </a>
            <a
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Customers
            </a>
          </div>
          <div>
            <a
              className="inline-block py-3 px-5 mr-4 leading-none text-center text-blue-700 bg-indigo-100 hover:bg-indigo-200 rounded shadow"
              href="#"
            >
              Sign in
            </a>
            <a
              className="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
              href="#"
            >
              Sign up
            </a>
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

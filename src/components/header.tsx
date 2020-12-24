import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "../utils/auth"

const Header = ({ siteTitle }) => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0()

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between bg-gray-200  p-4">
        <div className="flex flex-shrink-0 mr-6">
          <Link
            className="text-xl text-black-500 font-semibold"
            to="/"
            title={siteTitle}
          >
            <img
              src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
              className="float-left mr-2"
              width="80px"
              alt="Auth0 logo"
            />
            {siteTitle}
          </Link>
        </div>
        <div className="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
          <div className="lg:ml-auto">
            <Link
              className="block lg:inline-block py-3 px-5 mr-4 text-blue-900 hover:text-blue-700"
              to="/about"
              title="About page"
            >
              About
            </Link>
          </div>
          <div>
            {!isAuthenticated && !loading && (
              <button
                className="inline-block py-3 px-5 mr-4 leading-none text-center text-white bg-orange-900 hover:bg-orange-700 duration-200 hover:text-white rounded shadow login-button"
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
              <div className="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
                <div className="lg:ml-auto">
                  <Link
                    className="my-auto mr-5 text-black-50"
                    to="/profile"
                    title="Profile Page"
                  >
                    My Profile
                  </Link>
                  <button
                    className="inline-block py-3 px-5 mr-4 leading-none text-center text-white bg-orange-900 hover:bg-orange-700 hover:text-white rounded shadow"
                    onClick={() => logout()}
                  >
                    Log out
                  </button>
                </div>
              </div>
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

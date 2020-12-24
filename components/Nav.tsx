import Link from 'next/link';
import auth0 from '../utils/auth0';

const Nav = ({user}) => {
  return (
    <>
      <div className="relative pt-6 pb-6 sm:pb-6 lg:pb-4 shadow-md bg-gray-50">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <span className="sr-only">DSE Sample Apps</span>
              <Link href="/">
                <a>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
                    alt=""
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="text-2xl ml-3 text-black-500">DSE Sample Apps</a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden"></div>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
              { !user ? <Link href="/dashboard">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md text-orange font-semibold bg-white hover:bg-gray-50">Dashboard</a>
              </Link> :
              <Link href="/api/logout">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md text-orange font-semibold bg-white hover:bg-gray-50">Logout</a>
            </Link>
            }
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;

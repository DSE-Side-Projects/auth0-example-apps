import { Link } from 'gatsby';
import React from 'react';
import { Navbar, Nav, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useAuth0 } from '../utils/auth';


const Header = ({ siteTitle }) => {
  const {
    isAuthenticated, loginWithRedirect, logout, loading,
  } = useAuth0();

  return (
    <>
      <Navbar color="light" light expand="md">
        <img
          src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
          className="float-left mr-2"
          width="80px"
          alt="Auth0 logo"
        />
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>
        <Nav className="ml-auto" navbar>
          <Link to="/" className="my-auto mr-3 text-dark">
            Home
          </Link>
          <Link to="/about" className="my-auto mr-3 text-dark">
            About
          </Link>
          {!isAuthenticated && !loading && (
            <Button
              // eslint-disable-next-line no-undef
              onClick={() => loginWithRedirect({ appState: `${window.location.pathname}` })}
            >
              Log in
            </Button>
          )}
          {isAuthenticated && (
            <>
              <Link className="my-auto mr-3 text-black-50" to="/profile">
                My Profile
              </Link>
              <Button onClick={() => logout()}>Log out</Button>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

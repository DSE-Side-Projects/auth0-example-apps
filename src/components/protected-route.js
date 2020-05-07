import { useEffect } from 'react';
import { useAuth0 } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (loading || isAuthenticated) {
      return undefined;
    }
    const asyncLogin = async () => {
      await loginWithRedirect({
        // eslint-disable-next-line no-undef
        appState: { targetUrl: window.location.pathname },
      });
    };
    asyncLogin();
    return null;
  }, [loading, isAuthenticated, loginWithRedirect]);
  return children;
};

export default ProtectedRoute;

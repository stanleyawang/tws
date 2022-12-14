import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  
  const domain="tws.au.auth0.com"
  const clientId="8tYWJMRaViJVufZRDO7bRyAISKRRQ2BW"
  
  const redirectUri = process.env.NODE_ENV === 'production'? 'https://stanleyawang.github.io/tws' : 'http://localhost:3000'
  const history = useHistory();

  const onRedirectCallback = (appState) => {       
    history.push(appState?.targetUrl || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
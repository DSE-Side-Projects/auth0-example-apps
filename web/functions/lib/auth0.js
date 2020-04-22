const initAuth0 = require('auth0-js');

exports.module = initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    redirectUri: 'https://dse.rosnovsky.us/api/callback',
    postLogoutRedirectUri: 'https://dse.rosnovsky.us/',
    session: {
        // The secret used to encrypt the cookie.
        cookieSecret: 'tee9mohthu1roMT3thiquieSh4ubee81',
        // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
        cookieLifetime: 60 * 60 * 8,
        // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
        cookieDomain: '',
        // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
        cookieSameSite: 'lax',
        // (Optional) Store the id_token in the session. Defaults to false.
        storeIdToken: true,
        // (Optional) Store the access_token in the session. Defaults to false.
        storeAccessToken: true,
        // (Optional) Store the refresh_token in the session. Defaults to false.
        storeRefreshToken: true
    },
    oidcClient: {
        // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
        httpTimeout: 2500,
        // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
        clockTolerance: 10000
    }
});

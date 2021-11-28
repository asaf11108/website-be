export default () => ({
  production: process.env.PRODUCTION,
  auth0IssuerUrl: process.env.AUTH0_ISSUER_URL,
  auth0Audience: process.env.AUTH0_AUDIENCE,
  database: {
    url: process.env.DATABASE_URL,
  }
});

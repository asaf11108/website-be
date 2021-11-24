export default () => ({
  production: process.env.PRODUCTION,
  auth0IssuerUrl: process.env.AUTH0_ISSUER_URL,
  auth0Audience: process.env.AUTH0_AUDIENCE,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
});

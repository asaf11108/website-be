export interface Config {
    production: boolean;
    auth0IssuerUrl: string;
    auth0Audience: string;
    database: DatabaseConfig
}

export interface DatabaseConfig {
    url: string;
}
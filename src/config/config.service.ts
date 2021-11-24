import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Config, DatabaseConfig } from "./config.interface";

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService<Config>) {}

    get production(): boolean {
        return this.configService.get<string>('production') === 'true';
    }

    get auth0IssuerUrl(): string {
        return this.configService.get<string>('auth0IssuerUrl');
    }

    get auth0Audience(): string {
        return this.configService.get<string>('auth0Audience');
    }

    get databaseHost(): string {
        return this.configService.get<DatabaseConfig>('database').host;
    }

    get databasePort(): number {
        return Number(this.configService.get<DatabaseConfig>('database').port);
    }

    get databaseName(): string {
        return this.configService.get<DatabaseConfig>('database').name;
    }

    get databaseUser(): string {
        return this.configService.get<DatabaseConfig>('database').user;
    }

    get databasePassword(): string {
        return this.configService.get<DatabaseConfig>('database').password;
    }
}
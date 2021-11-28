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

    get databaseURL(): string {
        return this.configService.get<DatabaseConfig>('database').url;
    }
}
import { NODE_ENV } from "./node_env";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: NODE_ENV;
      APP_NAME: string;
      APP_PORT: string;
      DOMAIN: string;
      ALLOWED_CORS_ORIGINS: string;
    }
  }
}

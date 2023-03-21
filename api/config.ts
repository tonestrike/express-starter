import { config } from "dotenv-safe";
import path from "path";

if (process.env.NODE_ENV === "local") {
  config({ path: path.join(__dirname, "../.env.local") });
}

const uncaughtHandler = (error: any) => {
  console.error(error);
  setTimeout(() => process.exit(1), 1000);
};

process.on("unhandledRejection", uncaughtHandler);
process.on("uncaughtException", uncaughtHandler);

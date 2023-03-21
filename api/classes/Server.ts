import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import nocache from "nocache";
import cookieParser from "cookie-parser";

import routes from "../routes";
import { errorResponseHandler } from "lib/errorResponseHandler";

const allowedOrigins = (process.env.ALLOWED_CORS_ORIGINS ?? "*")
  .split(",")
  .map((envOrigin) => envOrigin.trim());

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use;
    this.config();
  }
  private config() {
    try {
      this.app.use(
        (err: any, req: Request, res: Response, next: NextFunction) => {
          console.error(err.stack);
          res.status(500).send("Something broke!");
        }
      );
      // Middleware
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json({ limit: "50mb" }));
      this.app.use(express.text());
      this.app.use(helmet());
      this.app.use(nocache());
      this.app.use(cookieParser());
      this.app.set("trust proxy", 1);
      this.app.use(
        cors({
          origin: function (origin, callback) {
            if (allowedOrigins.includes(origin) || !origin) {
              callback(null, true);
            } else {
              callback(new Error("Not allowed by CORS"));
            }
          },
          credentials: true,
        })
      );
      // API Routes
      this.app.get("/", (req, res) => res.send("Online"));
      this.app.use("/", routes);

      this.app.use(errorResponseHandler);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;

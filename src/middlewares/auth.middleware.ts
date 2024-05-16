import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { IExpressRequest } from "src/types/express-request";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: IExpressRequest, _res: Response, next: NextFunction) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        try {
          const decoded = verify(token, process.env.JWT_SECRET);
          const currentTimeInSeconds = Math.floor(Date.now() / 1000);
          if (typeof decoded === "object" && currentTimeInSeconds < decoded.exp) req.userId = decoded.id;
          else req.userId = null;
        } catch {
          req.userId = null;
        }
      } else req.userId = null;
    } else req.userId = null;
    next();
  }
}

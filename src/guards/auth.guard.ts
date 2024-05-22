import { CanActivate, ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { GraphQLError } from "graphql";

import { IExpressRequest } from "src/types/app-types";

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = GqlExecutionContext.create(context).getContext<{ req: IExpressRequest }>();
    if (request.req.userId) return true;
    else throw new GraphQLError("Unauthorized", { extensions: { code: HttpStatus.UNAUTHORIZED } });
  }
}

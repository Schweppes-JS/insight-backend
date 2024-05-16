import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { IExpressRequest } from "src/types/express-request";

export const UserId = createParamDecorator((_data: never, context: ExecutionContext) => {
  const request = GqlExecutionContext.create(context).getContext<IExpressRequest>();
  return request.userId;
});

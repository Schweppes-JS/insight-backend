import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  path: join(process.cwd(), "src/graphql.ts"),
  typePaths: ["./**/*.graphql"],
  skipResolverArgs: true,
  outputAs: "class",
  watch: true,
});

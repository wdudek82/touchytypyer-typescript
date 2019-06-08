import { GraphQLResolveInfo } from "graphql";
import { MyContext } from "../types/graphql-yoga-types";
import { Exercise } from "../types";

interface MySource extends Exercise {
}

interface Args {
  id: string;
}

export default {
  author(
    parent: MySource,
    args: Args,
    { db }: MyContext,
    info: GraphQLResolveInfo,
  ) {
    return db.users.find((user) => user.id === parent.author);
  },
};

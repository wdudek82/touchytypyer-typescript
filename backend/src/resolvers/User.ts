import { User } from "../types";
import { MyContext } from "../types/graphql-yoga-types";
import { GraphQLResolveInfo } from "graphql";

interface Args {
  id: string;
}

export default {
  exercises(
    parent: User,
    args: Args,
    { db }: MyContext,
    info: GraphQLResolveInfo,
  ) {
    return db.exercises.filter((exercise) => exercise.author === parent.id);
  },
};

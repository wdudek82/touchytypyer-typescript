import { GraphQLResolveInfo } from "graphql";
import { Exercise } from "../types";
import { Context } from "graphql-yoga/dist/types";
import { MyContext } from "../types/graphql-yoga-types";

interface Args {
  id: string;
}

export default {
  users(parent: {}, args: {}, { db }: MyContext, info: GraphQLResolveInfo) {
    return db.users;
  },
  user(parent: {}, args: Args, { db }: MyContext, info: GraphQLResolveInfo) {
    const userFound = db.users.find((user) => user.id === args.id);

    if (!userFound) {
      throw new Error("User not found");
    }

    return userFound;
  },
  exercise(
    parent: {},
    args: Args,
    { db }: MyContext,
    info: GraphQLResolveInfo,
  ) {
    const exerciseFound = db.exercises.find(
      (exercise: Exercise) => exercise.id === args.id,
    );

    if (!exerciseFound) {
      throw new Error("Exercise not found");
    }

    return exerciseFound;
  },
  exercises(parent: {}, args: {}, { db }: Context, info: GraphQLResolveInfo) {
    return db.exercises;
  },
};

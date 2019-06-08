import { GraphQLResolveInfo, Source } from "graphql";
import { Exercise } from "../types";
import { Context } from "graphql-yoga/dist/types";
import { MyContext } from "../types/graphql-yoga-types";

interface Args {
  id: string;
}

export default {
  exercise(
    parent: Source,
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
  exercises(
    parent: Source,
    args: Args,
    { db }: Context,
    info: GraphQLResolveInfo,
  ) {
    return db.exercises;
  },
};

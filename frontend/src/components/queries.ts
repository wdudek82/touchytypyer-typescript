import gql from "graphql-tag";
import { ExerciseItem } from "../types/exercises";

export const foo = "foo";

export const GetExercisesQuery = gql`
    query Exercises {
        exercises {
            id
            title
            body
        }
    }
`;

export interface GetExercisesData {
  exercises: ExerciseItem[];
}

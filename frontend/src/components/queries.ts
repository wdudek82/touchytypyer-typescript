import gql from "graphql-tag";
import { ExerciseItem } from "types/exercises";

/**
 * Exercises
 */
export const GetExercisesQuery = gql`
    query Exercises {
        exercises {
            id
            title
        }
    }
`;

export interface GetExercisesData {
  exercises: ExerciseItem[];
}

/**
 * Get Exercise
 */
export const GetExerciseQuery = gql`
    query Exercise($where: ExerciseWhereUniqueInput!) {
        exercise(where: $where) {
            id
            title
            body
        }
    }
`;

export interface GetExerciseVariables {
  where: {
    id: string;
  };
}

export interface GetExerciseData {
  exercise: ExerciseItem;
}

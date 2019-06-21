import gql from "graphql-tag";
import { ExerciseItem } from "../../types/exercises";

export const GET_EXERCISE = gql`
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

export const GET_EXERCISES = gql`
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

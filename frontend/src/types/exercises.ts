export interface ExerciseItem {
  id: number;
  title: string;
  body: string;
}

export interface ExercisesState {
  exercises: ExerciseItem[];
  currentExercise?: ExerciseItem | null;
  textTypedByUser: string;
}

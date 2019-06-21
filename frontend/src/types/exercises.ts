export interface ExerciseItem {
  id: string;
  title: string;
  body: string;
}

export interface ExercisesState {
  exercises: ExerciseItem[];
  currentExercise?: ExerciseItem | null;
  textTypedByUser: string;
}

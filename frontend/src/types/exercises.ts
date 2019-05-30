export interface ExerciseItem {
  id: number;
  title: string;
  text: string;
}

export interface ExercisesState {
  exercises: ExerciseItem[];
  currentExercise?: ExerciseItem | null;
  textTypedByUser: string;
}

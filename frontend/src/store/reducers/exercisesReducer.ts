import { ExercisesState } from "types/exercises";
import { SET_TYPED_TEXT } from "../actions/types";
import { ExercisesAction } from "../actions/exercisesActions";

const initialState: ExercisesState = {
  exercises: [
    {
      id: 121434,
      title: "Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet blanditiis dicta distinctio ea id impedit, laboriosam maiores maxime numquam optio perspiciatis quaerat sit temporibus totam, ullam voluptatem? Dolor, perferendis?",
    },
    {
      id: 9754453,
      title: "Accusamus aliquam",
      text:
        "Accusamus aliquam aspernatur at autem blanditiis dolore dolores enim esse est et excepturi facere hic iste\n" +
        "        libero, minima molestiae mollitia nemo officiis omnis possimus rerum saepe temporibus voluptas voluptate\n" +
        "        voluptatum.",
    },
    {
      id: 8723987,
      title: "Accusantium consequuntur",
      text:
        "Accusantium consequuntur doloremque facilis incidunt sed unde. Alias dolorem fuga ipsum itaque optio quae\n" +
        "        quia ratione sequi, ullam vel! A adipisci delectus dicta eum fuga, fugit impedit neque saepe voluptatum!",
    },
  ],
  currentExercise: null,
  textTypedByUser: "",
};

export default function exercises(
  state = initialState,
  action: ExercisesAction,
): ExercisesState {
  switch (action.type) {
    case SET_TYPED_TEXT:
      return {
        ...state,
        textTypedByUser: action.text,
      };
    default:
      return state;
  }
}

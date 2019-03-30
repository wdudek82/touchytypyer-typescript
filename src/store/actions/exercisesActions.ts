import { SET_TYPED_TEXT } from './types';

export interface ExercisesAction {
  type: string;
  payload?: object | {};
  text: string | '';
}

export function setTypedText(text: string): ExercisesAction {
  return {
    type: SET_TYPED_TEXT,
    text,
  };
}

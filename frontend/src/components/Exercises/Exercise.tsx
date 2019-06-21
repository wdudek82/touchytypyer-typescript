import React, { ChangeEvent, Fragment, ReactElement, useEffect, useRef } from "react";
import { ExerciseItem } from "../../types/exercises";

interface Props {
  exercise: ExerciseItem;
  textTypedByUser: string;
  renderLines: (exercise?: ExerciseItem) => ReactElement[];
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Exercise = (props: Props): ReactElement => {
  const inputRefBis = useRef<HTMLInputElement>(null);
  const { exercise, textTypedByUser, renderLines, handleOnChange } = props;

  const refocusMainInput = (): void => {
    if (inputRefBis && inputRefBis.current) {
      inputRefBis.current.focus();
    }
  };

  useEffect(
    (): void => {
      document.title = `TouchyTyper | ${exercise.title}`;
      refocusMainInput();
    },
  );

  return (
    <Fragment>
      <h2>{exercise.title}</h2>

      <input
        className="exercise__main-input"
        type="text"
        ref={inputRefBis}
        value={textTypedByUser}
        onChange={handleOnChange}
        onBlur={refocusMainInput}
      />

      <section className="exercise__container">
        <div className="exercise__text">{renderLines(exercise)}</div>
      </section>
    </Fragment>
  );
};

export default Exercise;

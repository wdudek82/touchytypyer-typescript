import React, { ChangeEvent, Fragment, ReactElement, useEffect, useRef } from "react";
import { ExerciseItem } from "types/exercises";
import { Animated } from "react-animated-css";

interface Props {
  exercise: ExerciseItem;
  textTypedByUser: string;
  renderLines: (exercise?: ExerciseItem) => ReactElement[];
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Exercise = (props: Props): ReactElement => {
  const inputRefBis = useRef<HTMLInputElement>(null);
  const {
    exercise,
    textTypedByUser,
    renderLines,
    handleOnChange,
  } = props;

  const refocusMainInput = (): void => {
    if (inputRefBis && inputRefBis.current) {
      inputRefBis.current.focus();
    }
  };

  useEffect(
    (): void => {
      document.title = `TouchyTyper | ${exercise && exercise.title}`;
      refocusMainInput();
    },
  );

  return (
    <Fragment>
      <input
        className="exercise__main-input"
        type="text"
        ref={inputRefBis}
        value={textTypedByUser}
        onChange={handleOnChange}
        onBlur={refocusMainInput}
      />

      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible
        animationInDuration={1000}
      >
        <h2>{exercise && exercise.title}</h2>

        <section className="exercise__board">
          <div className="exercise__text">{renderLines(exercise)}</div>
        </section>
      </Animated>
    </Fragment>
  );
};

export default Exercise;

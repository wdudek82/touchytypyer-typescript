import React, { ReactElement } from "react";
import "./styles.scss";

type Type = "solid" | "light";
type Size = "sm" | "md" | "lg";

interface Props {
  type: Type;
  size: Size;
}

const Spinner = (props: Props): ReactElement => {
  return (
    <div className="spinner__container spinner__container--outer">
      <div className="spinner__container spinner__container--inner">
        <div
          className={`spinner spinner--${props.size} spinner--${props.type}`}
        />
      </div>
    </div>
  );
};

// Spinner.defaultProps = {
//   size: "md",
//   type: "light",
// };

export default Spinner;

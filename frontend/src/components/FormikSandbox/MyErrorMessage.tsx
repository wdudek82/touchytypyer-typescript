import React from "react";
import { ErrorMessage } from "formik";
import "./FormikSandbox.css";

interface Props {
  fieldName: string;
}

const MyErrorMessage = (props: Props) => {
  return (
    <ErrorMessage name={props.fieldName} className="error" component="div" />
  );
};

export default MyErrorMessage;

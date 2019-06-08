import React, { Component, ReactNode } from "react";
import { Field, Form, Formik, FormikActions, FormikProps } from "formik";
import * as Yup from "yup";
import "./FormikSandbox.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short!")
    .max(10, "Too long!")
    .required("Required!"),
  lastName: Yup.string()
    .min(2, "Too short!")
    .max(10, "Too long!")
    .required("Required!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Requried"),
});

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  // friends: string[];
}

class FormikSandbox extends Component<{}, {}> {
  public handleSubmit = (
    values: MyFormValues,
    actions: FormikActions<MyFormValues>,
  ): void => {
    console.log("set state:", JSON.stringify(values, null, 2));
    // actions.setErrors({ email: "Foo", password: "bar" });
    actions.setSubmitting(false);
  };

  private validateUsername = (value: string): string => {
    let error = "";
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  };

  public render(): ReactNode {
    return (
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          validateOnChange
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({
              values,
              errors,
              touched,
              ...formikBag
            }: FormikProps<MyFormValues>) => {
            console.log(formikBag);
            return (
              <Form>
                <Field
                  name="firstName"
                  validate={(value: string): string => {
                    let error = "";
                    if (value === "admin") {
                      error = "Nice try!";
                      formikBag.setFieldError("firstName", error);
                    }
                    return error;
                  }}
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <button type="submit">Submit</button>
                <div>{JSON.stringify(values, null, 2)}</div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default FormikSandbox;

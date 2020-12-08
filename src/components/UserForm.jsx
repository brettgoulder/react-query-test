import TextInput from "./TextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function UserForm({ title, onSubmit, initialValues }) {
  return (
    <>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={onSubmit}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

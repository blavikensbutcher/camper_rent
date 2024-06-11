import Button from "../../shared/components/Button/Button.jsx";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BookingForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "C'mon write a real name")
      .max(50, "Too long")
      .required("Must be not empty"),
    email: Yup.string().email("Email should be valid"),
    date: Yup.date().required("Date must be correct"),
    comment: Yup.string(),
  });

  const nameID = useId();
  const emailID = useId();
  const commentID = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: null,
        comment: "",
      }}
      onSubmit={(values) => {
        window.location.reload();
      }}
      validationSchema={userSchema}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          <Field
            type="text"
            name="name"
            id={nameID}
            className={css.regular_field}
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
          <Field
            type="email"
            name="email"
            id={emailID}
            className={css.regular_field}
            placeholder="Email"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
          <DatePicker
            selected={values.date}
            onChange={(date) => setFieldValue("date", date)}
            placeholderText="Booking date"
            className={css.datetime_picker}
          />
          <ErrorMessage name="date" component="span" className={css.error} />
          <Field
            type="text"
            name="comment"
            id={commentID}
            placeholder="Comment"
            className={css.comment_section}
          />
          <ErrorMessage name="comment" component="span" className={css.error} />
          <Button type="submit">Send</Button>
        </Form>
      )}
    </Formik>
  );
};

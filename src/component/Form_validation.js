import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: " ",
  email: " ",
  password: " ",
  confirm_password: "",
};

const schema = Yup.object({
  name: Yup.string().min(2).max(6).required("please enter name"),
  email: Yup.string().email().required("please enter mail"),
  password: Yup.string().min(4).max(6).required("please enter password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
});

function Form_validation() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: (values, action) => {
        console.log(values);

        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        <br></br>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
        <br></br>
        <input
          type="text"
          placeholder="enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <br></br>
        <input
          type="text"
          placeholder="confirm password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.confirm_password && touched.confirm_password ? (
          <p>{errors.confirm_password}</p>
        ) : null}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form_validation;

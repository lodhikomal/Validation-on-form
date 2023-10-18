import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Z].*$/, "First letter must be a capital letter")
    .min(6)
    .max(15)
    .required("field is required"),
  lname: Yup.string().min(6).max(15).required("field is required"),
  email: Yup.string().required("field is required").email(),
  number: Yup.number()
    .typeError("Must be a number")
    .required("field is required")
    .min(10)
    .nullable(),
  address: Yup.string().min(6).max(15).required("field is required"),
  str_address: Yup.string().min(6).max(15).required("field is required"),
  state: Yup.string().required("field is required"),
  country: Yup.string().required("field is required"),
  post: Yup.number()
    .typeError("Must be a number")
    .required("field is required")
    .min(10)
    .nullable(),
  area: Yup.number()
    .typeError("Must be a number")
    .required("field is required")
    .min(10)
    .nullable(),
});

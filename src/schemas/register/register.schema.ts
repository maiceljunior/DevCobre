import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup.string().required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "The password must contain an uppercase letter, a number and a special character."
    ),
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Requires at least 3 characters")
    .max(200, "Cannot exceed 200 characters"),
  address: yup.string().required("Address is required"),
  telephone: yup
    .string()
    .required("Telephone is required")
    .min(6, "Requires at least 6 characters")
    .max(14, "Cannot exceed 14 characters"),
});

export default registerSchema;

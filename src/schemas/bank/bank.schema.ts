import * as yup from "yup";

const createBankSchema = yup.object().shape({
  name: yup
    .string()
    .required("Error")
    .min(1, "The bank name needs at least 1 character!"),

  status: yup.boolean().typeError("Bank status must be a boolean").required(),
});

export default createBankSchema;

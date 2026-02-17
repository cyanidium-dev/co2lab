import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import { nameRegex } from "../regex/regex";

export const contactValidation = () => {
  const contactFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "The field must contain between 2 and 30 characters")
      .max(30, "The field must contain between 2 and 30 characters")
      .matches(nameRegex, "Allowed letters and hyphens, apostrophes, quotes")
      .required("This field is required"),
    phone: yup
      .string()
      .required("This field is required")
      .test(
        "is-valid-phone",
        "Invalid phone number",
        (value) => !value || isValidPhoneNumber(value),
      ),
  });

  return contactFormValidationSchema;
};

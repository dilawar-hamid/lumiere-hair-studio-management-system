import * as Yup from "yup";

const staffvalidation = Yup.object({
  staffName: Yup.string()
    .required("Staff name is required"),

  position: Yup.string()
    .required("Position is required"),

  phone: Yup.string()
    .required("Phone number is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  image: Yup.string()
    .url("Enter a valid image URL")
    .required("Image URL is required"),
});

export default staffvalidation;
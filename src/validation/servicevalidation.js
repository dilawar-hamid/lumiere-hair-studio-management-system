import * as Yup from "yup";

const servicevalidation = Yup.object({
  serviceName: Yup.string()
    .required("Service name is required"),

  category: Yup.string()
    .required("Category is required"),

  price: Yup.number()
    .required("Price is required")
    .positive("Price must be greater than 0"),

  duration: Yup.string()
    .required("Duration is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),

  image: Yup.string()
    .url("Enter a valid image URL")
    .required("Image is required"),
});

export default servicevalidation;
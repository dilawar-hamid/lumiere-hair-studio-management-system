import { object, string } from "yup";

const appointmentvalidation = object({
  customerName: string()
    .required("Customer name is required"),

  phone: string()
    .required("Phone number is required"),

  service: string()
    .required("Please enter a service"),

  staff: string()
    .required("Please enter a staff member"),

  date: string()
    .required("Appointment date is required"),

  time: string()
    .required("Appointment time is required"),

  notes: string(),
});

export default appointmentvalidation;
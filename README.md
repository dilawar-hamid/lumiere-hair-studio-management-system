# LUMIÈRE Hair Studio Management System

A modern **Hair Salon Management System** built with React. The application helps manage salon services, staff members, and customer appointments through a clean and responsive dashboard.

##  Live Demo

Coming soon...

## 📸 Project Preview

Screenshots will be added soon.

---

##  Features

###  Dashboard Login
- Simple admin login system
- Session-based login using `sessionStorage`
- Protected dashboard access

###  Service Management
- Add new salon services
- View all available services
- Edit service details
- Delete services
- Form validation using Formik and Yup

###  Staff Management
- Add staff members
- View staff information
- Edit staff details
- Delete staff members
- Staff cards for reusable UI

### Appointment Management
- Book customer appointments
- View all appointments
- Edit appointment details
- Update appointment status
- Delete appointments
- Manage customer, service, staff, date, time, and notes

### Form Validation
- Form handling with Formik
- Validation with Yup
- Required field validation
- Email validation
- URL validation
- Positive price validation

### User Interface
- Responsive design using Bootstrap
- Clean and modern salon-themed UI
- Dashboard with live counts for:
  - Total Services
  - Total Staff Members
  - Total Appointments

---

## Technologies Used

- React
- Vite
- React Router DOM
- Axios
- Formik
- Yup
- Bootstrap
- MockAPI

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ServiceCard.jsx
│   └── StaffCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Services.jsx
│   ├── Staff.jsx
│   ├── AddService.jsx
│   ├── EditService.jsx
│   ├── ServiceManage.jsx
│   ├── AddStaff.jsx
│   ├── EditStaff.jsx
│   ├── StaffManage.jsx
│   ├── BookAppointment.jsx
│   ├── EditAppointment.jsx
│   └── ViewAppointment.jsx
│
├── validation/
│   ├── servicevalidation.js
│   ├── staffvalidation.js
│   └── appointmentvalidation.js
│
├── App.jsx
└── main.jsx



git clone YOUR_REPOSITORY_URL

cd YOUR_PROJECT_FOLDER

npm install

npm run dev


👨‍💻 Author

Dilawar
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Services from "./pages/services";
import Dashboard from "./pages/dashboard";
import AddService from "./pages/addservice";
import EditService from "./pages/editservice";
import Home from "./pages/home";
import About from "./pages/about";
import ShowService from "./pages/showservice";

import BookAppointment from "./pages/bookappointment";
import ViewAppointment from "./pages/viewappointments";
import EditAppointment from "./pages/editappointment";
import ServiceManage from "./pages/showservice";
import Addstaff from "./pages/addstaff";
import Editstaff from "./pages/editstaff";
import StaffManage from "./pages/showstaff";
import Staff from "./pages/staff";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="services" element={<Services />} />

        <Route path="staff" element={<Staff />} />

        <Route path="servicemanage" element={<ServiceManage />} />

        <Route path="showservice" element={<ShowService />} />

        <Route path="addservice" element={<AddService />} />

        <Route path="editservice/:id" element={<EditService />} />

        <Route path="addstaff" element={<Addstaff />} />

        <Route path="editstaff/:id" element={<Editstaff />} />

        <Route path="staffmanage" element={<StaffManage />} />

        <Route path="about" element={<About />} />

        <Route path="dashboard" element={<Dashboard />} />

          <Route
            path="/bookappointment"
            element={<BookAppointment />}
          />

          <Route
            path="/viewappointment"
            element={<ViewAppointment />}
          />

          <Route
            path="/editappointment/:id"
            element={<EditAppointment />}
          />

      </Route>

    </Routes>
  );
}

export default App;
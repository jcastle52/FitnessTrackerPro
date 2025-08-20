import { Routes, Route } from "react-router";
import Login from "./auth/Login.jsx"
import Register from "./auth/Register.jsx"
import ActivitiesPage from "./activities/ActivitiesPage.jsx";
import Error404 from "./Error404.jsx"
import ActivityDetails from "./activities/ActivityDetails.jsx";
 
/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<ActivitiesPage />}></Route>
        <Route path="/activities" element={<ActivitiesPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/activities/:id" element={<ActivityDetails />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
  )
}

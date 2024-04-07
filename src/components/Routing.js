import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Heading from "./sections/aboutPages/Heading";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./sections/loginPages/Login";
import Confirmation from "./pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<Heading />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

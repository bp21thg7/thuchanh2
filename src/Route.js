import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello, { HelloPerson } from "./Hello";
import { Header } from "./Header";
import { Helloo } from "./Helloo";
import Car from "./Car";
import Login from "./Login";
import App from "./App";
function RouterPhuong() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/car" element={<Car />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="*" element={<h1>Khong tim thay trang nay</h1>} />
      </Routes>
    </Router>
  );
}
export default RouterPhuong;

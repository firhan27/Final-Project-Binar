import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Register from "./pages/register/Register";
import VerifikasiOTP from "./pages/verifikasi OTP/VerifikasiOTP";
import RiwayatPesanan from "./pages/User/Riwayat Pesanan/RiwayatPesanan";
import Notifikasi from "./pages/User/Notifikasi/Notifikasi";
import Checkout from "./pages/Chekout/Chekout1";
import Payment from "./components/Chekout/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifikasi-otp" element={<VerifikasiOTP />} />
        <Route path="/user/history" element={<RiwayatPesanan />} />
        <Route path="/user/notifikasi" element={<Notifikasi />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

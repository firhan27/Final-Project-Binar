import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Register from "./pages/register/Register";
import VerifikasiOTP from "./pages/verifikasi OTP/VerifikasiOTP";
import RiwayatPesanan from "./pages/User/Riwayat Pesanan/RiwayatPesanan";
import Checkout1 from "./pages/Checkout/Checkout1";
import Payment from "./components/Chekout/Payment";
import Notifikasi from "./pages/User/Notifikasi/Notifikasi";
import Profile from "./pages/User/Akun/Profile";
import SearchPage from "./pages/SearchPage/SearchPage";
import AuthToken from "./components/Auth/AuthToken";
import AuthNoToken from "./components/Auth/AuthNoToken";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/login"
          element={
            <AuthNoToken>
              <Login />
            </AuthNoToken>
          }
        />
        <Route
          path="/reset-password"
          element={
            <AuthNoToken>
              <ResetPassword />
            </AuthNoToken>
          }
        />
        <Route
          path="/auth/register"
          element={
            <AuthNoToken>
              <Register />
            </AuthNoToken>
          }
        />
        <Route
          path="/auth/register/verifikasi-otp"
          element={
            <AuthNoToken>
              <VerifikasiOTP />
            </AuthNoToken>
          }
        />
        <Route
          path="/user/history"
          element={
            <AuthToken>
              <RiwayatPesanan />
            </AuthToken>
          }
        />
        <Route
          path="/user/notifikasi"
          element={
            <AuthToken>
              <Notifikasi />
            </AuthToken>
          }
        />
        <Route
          path="/user/profile"
          element={
            <AuthToken>
              <Profile />
            </AuthToken>
          }
        />
        <Route path="/checkout" element={<Checkout1 />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <ToastContainer theme="light" />
    </BrowserRouter>
  );
}

export default App;

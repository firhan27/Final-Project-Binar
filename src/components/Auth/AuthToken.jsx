import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AuthToken = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async (token) => {
      try {
        await axios.get(`https://skypass-dev.up.railway.app/user/whoami`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 403) {
            localStorage.removeItem("token");
            toast.error("Token tidak valid!");
            return (window.location.href = "/");
          }
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      toast.warn("Anda harus login!");
      return navigate("/auth/login");
    }

    // get user information
    getProfile(token);
  }, [navigate]);

  return children;
};

export default AuthToken;

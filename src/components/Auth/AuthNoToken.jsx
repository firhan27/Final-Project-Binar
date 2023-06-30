import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import client from '../../api/axios'
import { toast } from "react-toastify";

const AuthNoToken = ({ children }) => {
  const navigate = useNavigate();

  const RefreshToken = () => {
    const refresh_token = localStorage.getItem("refresh_token");

    let data = JSON.stringify({
      refreshToken: refresh_token,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "auth/refresh-token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await client.request(config);
        console.log(JSON.stringify(response.data));

        const { access_token } = response.data.data;

        localStorage.setItem("token", access_token);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  };

  useEffect(() => {
    const getProfile = async (token) => {
      try {
        await client.get(`/user/whoami`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        window.location.href = "/";
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 403) {
            if (error.response.data.message === "jwt expired") {
              RefreshToken();
            } else {
              localStorage.removeItem("token");
              toast.error("Token tidak valid!");
              return (window.location.href = "/");
            }
          }
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    if (token) {
      getProfile(token);
    }
  }, [navigate]);

  return children;
};

export default AuthNoToken;

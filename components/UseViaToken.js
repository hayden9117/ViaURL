import { useState, useEffect } from "react";

export default function useViaToken() {
  useEffect(() => {
    const tokenString = localStorage.getItem("viaToken");
    const userToken = JSON.parse(tokenString);
    setToken(userToken);
  }, []);

  const [token, setToken] = useState(null);

  const saveToken = (userToken) => {
    localStorage.setItem("viaToken", JSON.stringify(userToken));

    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}

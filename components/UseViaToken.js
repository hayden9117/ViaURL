import { useState, useEffect } from "react";

export default function useViaToken() {
  const getToken = () => {
    let userToken;
    if (typeof window !== "undefined") {
      const tokenString = localStorage.getItem("viaToken");
      userToken = JSON.parse(tokenString);
    }
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("viaToken", JSON.stringify(userToken));

    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}

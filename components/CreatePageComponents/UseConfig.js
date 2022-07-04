import { useState } from "react";

export default function useConfig() {
  const getConfig = () => {
    let userConfig;
    if (typeof window !== "undefined") {
      const configString = localStorage.getItem("config");
      userConfig = JSON.parse(configString);
    }
    return userConfig;
  };

  const [config, setConfig] = useState(getConfig());

  const saveConfig = (userConfig) => {
    localStorage.setItem("config", JSON.stringify(userConfig));

    setConfig(userConfig);
  };

  return {
    setConfig: saveConfig,
    config,
  };
}

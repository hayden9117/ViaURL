import { useEffect, useState } from "react";

export default function useConfig() {
  useEffect(() => {
    const configString = localStorage.getItem("config");
    let userConfig = JSON.parse(configString);
    setConfig(userConfig);
  }, []);

  const [config, setConfig] = useState(null);

  const saveConfig = (userConfig) => {
    localStorage.setItem("config", JSON.stringify(userConfig));

    setConfig(userConfig);
  };

  return {
    setConfig: saveConfig,
    config,
  };
}

import { Box, Container } from "@mui/material";
import ViaLogin from "./ViaLogIn";
import useViaToken from "../components/UseViaToken";
import CreatePageNav from "../components/CreatePageComponents/CreatePageNav";
import { PageEditor } from "../components/CreatePageComponents/PageEditor";
import useConfig from "../components/CreatePageComponents/UseConfig";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";

function CreatePage(props) {
  const [config, setConfig] = useState(props.response.config);
  const [originalConfig, setOriginalConfig] = useState(props.response.config);
  const [token, setToken] = useState(props.response.token);
  let pageColor = bgColor(config.background, config.opacity, config.brightness);

  return (
    <div className={styles.container}>
      <Head>
        <title>ViaUrl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}></div>

        <CreatePageNav
          token={token}
          config={config}
          setConfig={setConfig}
          pageColor={pageColor}
          originalConfig={originalConfig}
          setOriginalConfig={setOriginalConfig}
        />

        <PageEditor
          config={config}
          setConfig={setConfig}
          pageColor={pageColor}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/ViaLogIn",
        permanent: false,
      },
    };
  }
  console.log(session);
  let bodyObject = { email: session.user.email, password: "password1" };

  console.log(session.user.email);

  let data = await fetch("http://localhost:3000/api/Users/getUser", {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(bodyObject),
  })
    .then((res) => res.json())
    .then((res) => res);
  console.log(data);
  if (session) {
    return { props: data };
  }
}

export default CreatePage;

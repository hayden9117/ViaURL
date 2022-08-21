import CreatePageNav from "../components/CreatePageComponents/CreatePageNav";
import { PageEditor } from "../components/CreatePageComponents/PageEditor";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

function CreatePage(props) {
  const [config, setConfig] = useState(props.config);
  const [originalConfig, setOriginalConfig] = useState(props.config);
  const [token, setToken] = useState(props.token);
  const [versionControl, setVersionControl] = useState(() => [config]);

  let pageColor = bgColor(config.background, config.opacity, config.brightness);

  useEffect(() => {
    let versionArr = [];

    versionArr = JSON.parse(sessionStorage.getItem("versionControl")) || [];

    versionArr.push(config);

    sessionStorage.setItem("versionControl", JSON.stringify(versionArr));
  }, [config]);

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
          token={token}
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
  console.log(session.user);
  const data = { token: session.session.user };

  data.config = {
    links: { num: session.user.links.length, url: session.user.links },
    avatarImg: session.user.avatarImg,
    avatarImgs: session.user.avatarImgs,
    avatars: session.user.avatars,
    background: session.user.background,
    opacity: session.user.opacity,
    template: session.user.template,
    brightness: session.user.brightness,
    colorList: session.user.colorList,
    gradient: session.user.gradient,
    hasPublished: session.user.hasPublished,
  };
  console.log(data);

  if (session) {
    return { props: data };
  }
}

export default CreatePage;

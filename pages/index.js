import { AboutProject } from "../components/about/AboutProject";
import { ViaHeader } from "../components/header/ViaHeader";

import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ViaUrl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}></div>
        <ViaHeader />
        <AboutProject />
      </main>
    </div>
  );
}

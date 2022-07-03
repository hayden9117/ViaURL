import { AboutProject } from "../components/about/AboutProject";
import { ViaHeader } from "../components/header/ViaHeader";

import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <ViaHeader />
        </h1>

        <AboutProject />
      </main>
    </div>
  );
}

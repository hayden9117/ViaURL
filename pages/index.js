import { AboutProject } from "../components/about/AboutProject";
import { ViaHeader } from "../components/header/ViaHeader";
import { getSession, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>ViaUrl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}></div>
        <ViaHeader session={session} status={status} />
        <AboutProject />
      </main>
    </div>
  );
}

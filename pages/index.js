import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dive-log App</title>
        <meta name="description" content="Created by Sevgi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
}

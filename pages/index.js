import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

export default function Home({ users }) {
  console.log("frome home", users);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dive-log App</title>
        <meta name="description" content="Created by Sevgi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header users={users} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

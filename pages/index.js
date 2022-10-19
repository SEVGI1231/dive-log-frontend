import Head from "next/head";
import { MainButtons } from "../components/MainButtons";
import { useAppContext } from "../context/appWrapper";
import Login from "../components/Login";

export default function Home({ users }) {
  const [appState, setAppState] = useAppContext();
  console.log(appState.userID);
  console.log(typeof appState.userID);
  return (
    <div>
      <Head>
        <title>Dive-log App</title>
        <meta name="description" content="Created by Sevgi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login users={users} appState={appState} setAppState={setAppState} />
      <br />
      <MainButtons appState={appState} />
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

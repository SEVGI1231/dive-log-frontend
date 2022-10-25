import { useEffect } from "react";
import { useAppContext } from "../context/appWrapper";
import { useState } from "react";
import { DiveCard } from "../components/DiveCard";
import styles from "../styles/Dives.module.scss";
import { useRouter } from "next/router";

export default function Dives() {
  const router = useRouter();
  const [dives, setDives] = useState([]);
  const [appState, setAppState] = useAppContext();
  useEffect(() => {
    let req = fetch(`http://localhost:4000/dives`);
    let res = req.then((res) => res.json());
    res.then((data) => setDives(data));
  }, [appState.userID]);

  console.log(dives);
  return (
    <div className={styles.page}>
      {dives.length < 1 ? (
        <p>No dives has been logged yet</p>
      ) : (
        dives.map((dive) => <DiveCard dive={dive} />)
      )}
    </div>
  );
}

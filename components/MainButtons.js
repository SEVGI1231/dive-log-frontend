import styles from "./MainButtons.module.scss";
import { useRouter } from "next/router";

export function MainButtons({ appState }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.buttons}>
        <button
          className={styles.button1}
          onClick={() => router.push("/newdive")}
          disabled={appState.userID == null}
        >
          Add Dive
        </button>
        <button
          className={styles.button2}
          onClick={() => router.push("/dives")}
          disabled={appState.userID == null}
        >
          View Dives
        </button>
        <button
          className={styles.button3}
          onClick={() => router.push("/marinelib")}
        >
          Marine Life Library
        </button>
      </div>
    </>
  );
}

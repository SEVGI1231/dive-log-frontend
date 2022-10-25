import styles from "../../styles/DivePage.module.scss";

export default function DivePage({ dive }) {
  console.log(dive);
  const oneDive = dive[0];
  return (
    <div className={styles.content}>
      <h1>{oneDive.location.toUpperCase()}</h1>
      <p>Summary: {oneDive.summary}</p>
      <h2>Details:</h2>
      <ul>
        <li>Date: {oneDive.date}</li>
        <li>Diver: {oneDive.diver_name}</li>
        <li>Buddy: {oneDive.buddy_name}</li>
        <li>Max Depth: {oneDive.max_depth} meters</li>
        <li>Duration: {oneDive.duration} minutes</li>
        <li>Training Dive: {oneDive.is_training_dive ? "Yes" : "No"}</li>
        <li>Water Temperature: {oneDive.water_temp} </li>
        <li>Air Temperature: {oneDive.air_temp}</li>
      </ul>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/dives");
  const dives = await res.json();
  const paths = dives.map((dive) => ({
    params: { diveid: `${dive.dive_key}` },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/dives/${params.diveid}`);
  const dive = await res.json();
  return {
    props: {
      dive: dive,
    },
  };
}

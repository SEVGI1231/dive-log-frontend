import Card from "react-bootstrap/Card";
import { formatDate } from "../utils/formatDate";
import { useRouter } from "next/router";
import styles from "./MainButtons.module.scss";
export function DiveCard({ dive }) {
  const router = useRouter();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>@ {dive.location}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {dive.diver_name}
          </Card.Subtitle>
          <Card.Text>{dive.summary}</Card.Text>
        </Card.Body>
        <button
          onClick={() => router.push(`/dive/${dive.dive_key}`)}
          className={styles.button2}
        >
          Details
        </button>
      </Card>
    </>
  );
}

import { Form, Button } from "react-bootstrap";
import styles from "./Header.module.scss";

export function Header({ users }) {
  console.log("from header", users);
  return (
    <div>
      <svg
        className={styles.waves}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6BB1A8"
          fill-opacity="1"
          d="M0,160L24,176C48,192,96,224,144,218.7C192,213,240,171,288,160C336,149,384,171,432,186.7C480,203,528,213,576,213.3C624,213,672,203,720,186.7C768,171,816,149,864,165.3C912,181,960,235,1008,250.7C1056,267,1104,245,1152,218.7C1200,192,1248,160,1296,176C1344,192,1392,256,1416,288L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.header}>
        <h1 className={styles.title}>Dive Log</h1>
        <Form.Select
          className={styles.users}
          size="lg"
          styles={{ width: "20%" }}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option value={user.user_id}>{user.user_name}</option>
          ))}
        </Form.Select>
        <Button variant="warning" className={styles.button} size="lg">
          Login
        </Button>
      </div>
    </div>
  );
}

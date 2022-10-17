import { Form, Button } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Login({ users, appState, setAppState }) {
  function handleLogin(e) {
    setAppState({ ...appState, userID: e.target.value });
  }
  function handleLogout() {
    setAppState({ ...appState, userID: null });
  }
  return (
    <>
      <Form.Select
        className={styles.users}
        size="lg"
        styles={{ width: "20%" }}
        value={appState.userID == null ? "" : appState.userID}
        onChange={handleLogin}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.user_id} value={user.user_id}>
            {user.user_name}
          </option>
        ))}
      </Form.Select>
      <Button
        onClick={appState.userID == null ? handleLogin : handleLogout}
        variant="warning"
        className={styles.button}
        size="lg"
        disabled={appState.userID == null}
      >
        Logout
      </Button>
    </>
  );
}

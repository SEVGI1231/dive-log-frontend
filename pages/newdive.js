import styles from "../styles/NewDive.module.css";
export default function NewDive() {
  return (
    <div className={styles.content}>
      <form>
        <label>Location</label>
        <input type="text" name="location" />
        <label>Date</label>
        <input type="date" name="date" />
        <label>Max Depth </label>
        <input type="number" name="maxdepth" placeholder="depth in meters" />
        <label>Duration</label>
        <input
          type="number"
          name="duration"
          placeholder="duration in minutes"
        />
        <label>Difficulty</label>
        <input type="number" name="difficulty" placeholder=".../100" />
        <label>Air Used</label>
        <input type="number" name="airused" />
        <label>Buddy Name</label>
        <input type="text" name="buddyname" />
        <label>Visibility</label>
        <input type="number" name="visibility" placeholder="in meters" />
        <label>Water Type</label>
        <select>
          <option value="Sea">Sea</option>
          <option value="Fresh">Fresh</option>
          <option value="Ocean">Ocean</option>
        </select>
        <label>Is training dive?</label>
        <input type="checkbox" name="istraining" />
        <br />
        <label>Notes</label>
        <textarea name="notes" type="text" rows={10} />
      </form>
    </div>
  );
}

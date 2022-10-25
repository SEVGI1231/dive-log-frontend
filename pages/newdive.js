import styles from "../styles/NewDive.module.scss";
import { useState } from "react";
import { useAppContext } from "../context/appWrapper";
import axios from "axios";
import { useRouter } from "next/router";

export default function NewDive() {
  const router = useRouter();
  const initialValues = {
    diver_name: "",
    location: "",
    difficulty: "",
    max_depth: "",
    duration: "",
    air_used: "",
    visibility: "",
    water_type: "",
    buddy_name: "",
    summary: "",
    date: "",
    water_temp: "",
    air_temp: "",
    is_training_dive: false,
  };
  const [appState, setAppState] = useAppContext();
  const [newDive, setNewdive] = useState(initialValues);
  function handleChange(e) {
    const { name, value } = e.target;
    setNewdive({ ...newDive, [name]: value });
  }
  console.log(newDive);
  function handleCheck(e) {
    if (e.target.checked) {
      setNewdive({ ...newDive, is_training_dive: true });
      console.log(newDive);
    } else {
      setNewdive({ ...newDive, is_training_dive: false });
      console.log(newDive);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/new/dive", {
          diver_name: newDive.diver_name,
          location: newDive.location,
          difficulty: parseInt(newDive.difficulty),
          max_depth: parseInt(newDive.max_depth),
          duration: parseInt(newDive.duration),
          air_used: parseInt(newDive.air_used),
          visibility: parseInt(newDive.visibility),
          water_type: newDive.water_type,
          buddy_name: newDive.buddy_name,
          summary: newDive.summary,
          date: newDive.date,
          water_temp: parseInt(newDive.water_temp),
          air_temp: parseInt(newDive.air_temp),
          is_training_dive: newDive.is_training_dive,
        })
        .then(() => {
          setNewdive(initialValues);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.content}>
          <div>
            <label>Diver Name</label>
            <input
              type="text"
              name="diver_name"
              onChange={handleChange}
              value={newDive.diver_name}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              value={newDive.location}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newDive.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Max Depth </label>
            <input
              type="number"
              name="max_depth"
              value={newDive.max_depth}
              onChange={handleChange}
              placeholder="depth in meters"
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              placeholder="duration in minutes"
              value={newDive.duration}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Difficulty</label>
            <input
              type="number"
              name="difficulty"
              placeholder=".../100"
              value={newDive.difficulty}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Air Used</label>
            <input
              type="number"
              name="air_used"
              value={newDive.air_used}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Buddy Name</label>
            <input
              type="text"
              name="buddy_name"
              value={newDive.buddy_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Visibility</label>
            <input
              type="number"
              name="visibility"
              placeholder="in meters"
              value={newDive.visibility}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Water Temperature</label>
            <input
              type="number"
              name="water_temp"
              placeholder="in degrees"
              value={newDive.water_temp}
              onChange={handleChange}
            />
            <label>Air Temperature</label>
            <input
              type="number"
              name="air_temp"
              placeholder="in degrees"
              value={newDive.air_temp}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Water Type</label>
            <select
              value={newDive.water_type}
              onChange={handleChange}
              name="water_type"
            >
              <option key="sea" value="Sea">
                Sea
              </option>
              <option key="fresh" value="Fresh">
                Fresh
              </option>
              <option key="ocean" value="Ocean">
                Ocean
              </option>
            </select>
            <label>Is training dive?</label>
            <input
              type="checkbox"
              name="is_training_dive"
              value={newDive.is_training_dive}
              onChange={handleCheck}
            />
          </div>
        </div>
        <div className={styles.notes}>
          <label>Notes</label>
          <textarea
            name="summary"
            type="text"
            rows={10}
            value={newDive.summary}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit} className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

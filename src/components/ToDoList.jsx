import { useState } from "react";
import { ImageGallery } from "./Images";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Wpisz zadanie.."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Dodaj
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="img-text">
              <ImageGallery />
              <span className="text">{task}</span>
            </div>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Usuń
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

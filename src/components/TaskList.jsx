import React, { useEffect, useState } from "react";
import "../css/TaskList.css"; // ✅ import CSS

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/tasks/all-tasks")
      .then((res) => {
        if (!res.ok) {
          setErrorMessage("Server is not responding properly ❌");
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        setErrorMessage("Something went wrong while fetching tasks 🚫");
        console.error(err);
      });
  }, []);

  return (
    <div className="task-container">
      <h2 className="task-title">All Tasks</h2>

      {errorMessage && <p className="empty-text">{errorMessage}</p>}

      {tasks.length > 0 && (
        <div className="task-grid">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3 className="task-card-title">{task.title}</h3>
              <p className="task-card-desc">{task.description}</p>

              <div className="task-dates">
  <div>
    <label>Created</label>
    <p className="task-card-date">{task.createdAt}</p>
  </div>

  <div>
    <label>Start</label>
    <p className="task-card-date">{task.startDate}</p>
  </div>

  <div>
    <label>End</label>
    <p className="task-card-date">{task.endDate}</p>
  </div>
</div>

              <div className="task-footer">
                <span
                  className={`status ${
                    task.status ? "done" : "pending"
                  }`}
                >
                  {task.status ? "Done" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tasks.length === 0 && !errorMessage && (
        <p className="empty-text">No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
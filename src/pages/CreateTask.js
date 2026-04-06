import { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    const task = {
      title,
      description,
      status: false,
      createdAt: new Date().toISOString(),
      startDate,
      endDate,
    };

    try {
      const response = await fetch("http://localhost:8080/tasks/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();
      console.log("Task created:", data);

      // Clear form
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");

    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="form">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create Task
      </h2>

      <div className="title-form">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="Description-form">
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* ✅ FIXED DATE SECTION */}
      <div className="date-form">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <button className="submit-form" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateTask;
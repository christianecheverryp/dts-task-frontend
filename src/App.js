import React, { useEffect, useState } from "react";
import axios from "axios";


const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8080";
const API = `${API_BASE.replace(/\/$/, "")}/tasks`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", dueDateTime: "" });
  const [editing, setEditing] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, { ...form, status: "PENDING" });
      setForm({ title: "", description: "", dueDateTime: "" });
      setErrors({});
      fetchTasks();
    } catch (err) {
      if (err.response?.status === 400) setErrors(err.response.data);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/${editing}`, {
        ...form,
        status: tasks.find((t) => t.id === editing).status
      });
      setEditing(null);
      setForm({ title: "", description: "", dueDateTime: "" });
      setErrors({});
      fetchTasks();
    } catch (err) {
      if (err.response?.status === 400) setErrors(err.response.data);
    }
  };

  const handleDelete = async (id) => { await axios.delete(`${API}/${id}`); fetchTasks(); };

  const handleEdit = (task) => {
    setEditing(task.id);
    setForm({
      title: task.title,
      description: task.description || "",
      dueDateTime: task.dueDateTime?.slice(0, 16) || ""
    });
    setErrors({});
  };

  const handleChangeStatus = async (id, newStatus) => {
    await axios.patch(`${API}/${id}/status`, { status: newStatus });
    fetchTasks();
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Task Manager</h1>
      <form onSubmit={editing ? handleUpdate : handleCreate} style={{ marginBottom: 20 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        {errors.title && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.title}</div>}

        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        {errors.description && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.description}</div>}

        <input type="datetime-local" name="dueDateTime" value={form.dueDateTime} onChange={handleChange} required />
        {errors.dueDateTime && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.dueDateTime}</div>}

        <button type="submit">{editing ? "Update Task" : "Create Task"}</button>
        {editing && (
          <button type="button" onClick={() => { setEditing(null); setForm({ title: "", description: "", dueDateTime: "" }); setErrors({}); }}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10, borderRadius: 6 }}>
            <b>{task.title}</b><br />
            Status:{" "}
            <select value={task.status} onChange={(e) => handleChangeStatus(task.id, e.target.value)} style={{ marginBottom: 8 }}>
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select><br />
            {task.description}<br />
            Due: {task.dueDateTime && new Date(task.dueDateTime).toLocaleString()}<br />
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: 10, color: "red" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
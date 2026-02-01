import React, { useEffect, useState } from "react";
import { createTask, deleteTask, getMyTasks, updateTask } from "../services/plannerService";

const PlannerPage = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const userId = user?.id;

  async function loadTasks() {
    if (!userId) return;

    setLoading(true);
    try {
      const data = await getMyTasks(userId);
      setTasks(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  async function addTask(e) {
  e.preventDefault();

  if (!title.trim() || !userId) return;

  try {
    const newTask = await createTask({
      title: title.trim(),
      done: false,
      userId: userId,
      createdAt: new Date().toISOString()
    });

    console.log("CREATED:", newTask);

    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
  } catch (e) {
    console.log("CREATE ERROR:", e);
  }
}


  async function toggleDone(task) {
    try {
      const updated = await updateTask(task.id, {
        ...task,
        done: !task.done
      });

      setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    } catch (e) {
      console.log(e);
    }
  }

  async function removeTask(id) {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadTasks();
  }, [userId]);


  return (
    <div className="page">
      <h1>Planner</h1>

      {!userId ? (
        <p>Please login</p>
      ) : (
        <>
          <form className="card" onSubmit={addTask}>
            <input
              className="input"
              placeholder="Add a task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Add
            </button>
          </form>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="list">
              {tasks.length === 0 ? (
                <p>No tasks yet</p>
              ) : (
                tasks.map((t) => (
                  <div className="card" key={t.id}>
                    <div className="card-row">
                      <div>
                        <b className={t.done ? "done" : ""}>{t.title}</b>
                      </div>

                      <div className="row">
                        <button
                          className="btn btn-outline"
                          onClick={() => toggleDone(t)}
                          type="button"
                        >
                          {t.done ? "Undo" : "Done"}
                        </button>

                        <button
                          className="btn btn-dark"
                          onClick={() => removeTask(t.id)}
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PlannerPage;

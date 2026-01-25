import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [favCount, setFavCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(u ? JSON.parse(u) : null);

    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavCount(favs.length);

    const tasks = JSON.parse(localStorage.getItem("plannerTasks") || "[]");
    setTaskCount(tasks.length);
  }, []);

  return (
    <div className="page">
      <h1>Profile</h1>

      <div className="card">
        {user ? (
          <>
            <p>
              <b>Name:</b> {user.name || "User"}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
          </>
        ) : (
          <p>No user found</p>
        )}
      </div>

      <div className="card">
        <p>
          <b>Favorites:</b> {favCount}
        </p>
        <p>
          <b>Planner tasks:</b> {taskCount}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

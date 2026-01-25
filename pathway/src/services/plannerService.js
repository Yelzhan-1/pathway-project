import { BASE_URL } from "./api";

function getToken() {
  return localStorage.getItem("accessToken");
}

export async function getMyTasks(userId) {
  const response = await fetch(BASE_URL + `/plannerTasks?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(task) {
  const response = await fetch(BASE_URL + "/plannerTasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(task)
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

export async function updateTask(id, changes) {
  const response = await fetch(BASE_URL + `/plannerTasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(changes)
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(BASE_URL + `/plannerTasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
}

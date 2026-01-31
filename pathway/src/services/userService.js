import { BASE_URL } from "./api";

export async function registerUser(name, email, password) {
    const response = await fetch(BASE_URL + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
    throw new Error("Failed to register user");
    }


    return response.json();
}

export async function loginUser(email, password) {
    const response = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
  });

        if (!response.ok) {
        throw new Error("Failed to login user");
  }

  const data = await response.json();


    if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken);
  }
    if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
}

export function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export function getToken() {
    return localStorage.getItem("token");
}

export function getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

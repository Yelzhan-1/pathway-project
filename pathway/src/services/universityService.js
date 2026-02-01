import { BASE_URL } from "./api";

function authHeaders() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
}


export async function getUniversities() {
    const res = await fetch(BASE_URL + "/universities");
    if (!res.ok) throw new Error("Failed to fetch universities");
    return res.json();
}


export async function getUniversityById(id) {
    const res = await fetch(BASE_URL + `/universities/${id}`);
    if (!res.ok) throw new Error("Failed to fetch university");
    return res.json();
}

export async function createUniversity(universityData) {
    const res = await fetch(BASE_URL + "/universities", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
    },
    body: JSON.stringify(universityData),
  });

    if (!res.ok) throw new Error("Failed to create university");
    return res.json();
}
export async function updateUniversity(id, universityData) {
    const res = await fetch(BASE_URL + `/universities/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
         ...authHeaders(),
    },
        body: JSON.stringify(universityData),
    });

    if (!res.ok) throw new Error("Failed to update university");
    return res.json();
}


export async function deleteUniversity(id) {
    const res = await fetch(BASE_URL + `/universities/${id}`, {
        method: "DELETE",
        headers: {
        ...authHeaders(),
        },
    });

    if (!res.ok) throw new Error("Failed to delete university");
    return true;
}

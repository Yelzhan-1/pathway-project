import { useEffect, useState } from "react";
import {getUniversities, createUniversity, updateUniversity, deleteUniversity,} from "../services/universityService";

export default function UniversitiesAdminPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tuition, setTuition] = useState("");
  const [language, setLanguage] = useState("");
  const [programs, setPrograms] = useState("");

  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await getUniversities();
      setItems(data);
    } catch (e) {
      setError(e.message || "Load failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function resetForm() {
    setEditingId(null);
    setName("");
    setCountry("");
    setCity("");
    setWebsite("");
    setDeadline("");
    setTuition("");
    setLanguage("");
    setPrograms("");
  }

  function startEdit(u) {
    setEditingId(u.id);
    setName(u.name || "");
    setCountry(u.country || "");
    setCity(u.city || "");
    setWebsite(u.website || "");
    setDeadline(u.deadline || "");
    setTuition(u.tuition || "");
    setLanguage(u.language || "");
    setPrograms(u.programs ? u.programs.join(", ") : "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !country.trim()) {
      setError("Fill in name and country");
      return;
    }

    const payload = {
      name: name.trim(),
      country: country.trim(),
      city: city.trim(),
      website: website.trim(),
      deadline: deadline.trim(),
      tuition: tuition.trim(),
      language: language.trim(),
      programs: programs
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean),
    };

    try {
      if (editingId === null) {
        const created = await createUniversity(payload);
        setItems((prev) => [created, ...prev]);
      } else {
        const updated = await updateUniversity(editingId, {
          id: editingId,
          ...payload,
        });
        setItems((prev) =>
          prev.map((u) => (u.id === editingId ? updated : u))
        );
      }
      resetForm();
    } catch (e) {
      setError(e.message || "Save failed");
    }
  }

  async function handleDelete(id) {
    const ok = window.confirm("Delete this university?");
    if (!ok) return;

    try {
      await deleteUniversity(id);
      setItems((prev) => prev.filter((u) => u.id !== id));
      if (editingId === id) resetForm();
    } catch (e) {
      setError(e.message || "Delete failed");
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: "30px auto", padding: "0 16px" }}>
      <h1>Universities CRUD</h1>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12, marginBottom: 20 }}>
        <h2>{editingId === null ? "Add University" : `Edit University #${editingId}`}</h2>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <input placeholder="University name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
          <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <input placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
          <input placeholder="Application deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          <input placeholder="Tuition" value={tuition} onChange={(e) => setTuition(e.target.value)} />
          <input placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
          <textarea placeholder="Programs" value={programs} onChange={(e) => setPrograms(e.target.value)} />

          <div style={{ display: "flex", gap: 10 }}>
            <button type="submit">{editingId === null ? "Add" : "Save"}</button>
            {editingId !== null && (
              <button type="button" onClick={resetForm}>Cancel</button>
            )}
            <button type="button" onClick={load}>Refresh</button>
          </div>
        </form>
      </div>

      <h2>List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: 10 }}>
          {items.map((u) => (
            <div
              key={u.id}
              style={{
                padding: 14,
                border: "1px solid #eee",
                borderRadius: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{u.name}</div>
                <div style={{ opacity: 0.8 }}>{u.country}</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>ID: {u.id}</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => startEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
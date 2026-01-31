import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { getUniversityById } from "../services/universityService";

const UniversityDetailsPage = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(false);

  function getFavs() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  }

  function isFav() {
    return getFavs().includes(Number(id));
  }

  function toggleFav() {
    const favs = getFavs();
    const uniId = Number(id);

    if (favs.includes(uniId)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favs.filter((x) => x !== uniId))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favs, uniId]));
    }

    setUniversity((prev) => ({ ...prev }));
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getUniversityById(id);
        setUniversity(data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }

    load();
  }, [id]);

  return (
    <div className="details-page">
      <div className="details-top">
        <Link className="btn btn-outline" to="/universities">
          ← Back
        </Link>

        <button className="btn btn-outline" onClick={toggleFav} type="button">
          <Heart size={18} fill={isFav() ? "currentColor" : "none"} />
          <span>{isFav() ? "Saved" : "Save"}</span>
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : !university ? (
        <p>University not found</p>
      ) : (
        <div className="details-card">
          <h1>{university.name}</h1>

          <div className="details-grid">
            <div className="details-item">
              <p className="details-label">Country</p>
              <p className="details-value">{university.country}</p>
            </div>

            <div className="details-item">
              <p className="details-label">ID</p>
              <p className="details-value">{university.id}</p>
            </div>

            <div className="details-item">
              <p className="details-label">City</p>
              <p className="details-value">{university.city}</p>
            </div>

            <div className="details-item">
              <p className="details-label">Website</p>
              <p className="details-value">{university.website}</p>
            </div>

            <div className="details-item">
              <p className="details-label">Deadline</p>
              <p className="details-value">{university.deadline}</p>
            </div>

            <div className="details-item">
              <p className="details-label">Tuition</p>
              <p className="details-value">{university.tuition}</p>
            </div>

            <div className="details-item">
              <p className="details-label">Language</p>
              <p className="details-value">{university.language}</p>
            </div>

            <div className="details-item">
              <p className="details-label">Programs</p>
              <p className="details-value">
                {university.programs.join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityDetailsPage;

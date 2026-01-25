import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { getUniversities } from "../services/universityService";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  function getFavs() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  }

  function removeFav(id) {
    const favs = getFavs().filter((x) => x !== id);
    localStorage.setItem("favorites", JSON.stringify(favs));
    setFavorites((prev) => prev.filter((u) => u.id !== id));
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const all = await getUniversities();
        const favIds = getFavs();
        setFavorites(all.filter((u) => favIds.includes(u.id)));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="page">
      <h1>Favorites</h1>

      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="list">
          {favorites.map((u) => (
            <div className="card" key={u.id}>
              <div className="card-row">
                <div>
                  <h3>{u.name}</h3>
                  <p>{u.country}</p>
                </div>

                <button className="btn btn-dark" onClick={() => removeFav(u.id)}>
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

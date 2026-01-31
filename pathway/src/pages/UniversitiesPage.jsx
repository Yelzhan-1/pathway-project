import React, { useEffect, useMemo, useState } from "react";
import SearchForm from "../components/SearchForm.jsx";
import FilterSidebar from "../components/FilterSidebar.jsx";
import { SlidersHorizontal, X, Heart } from "lucide-react";
import { getUniversities } from "../services/universityService.js";
import { Link } from "react-router-dom";

const UniversitiesPage = () => {
  const [universitiesData, setUniversitiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  const [filters, setFilters] = useState({
    countries: [],
    names: [],
  });

  const [searchValue, setSearchValue] = useState("");

  async function fetchUniversities() {
    setLoading(true);
    try {
      const data = await getUniversities();
      setUniversitiesData(data);
    } catch (e) {
      console.log("API not found, using local data");
      setUniversitiesData(universities);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUniversities();
  }, []);

  function onFilterHandler(filtersValue) {
    setFilters(filtersValue);
  }

  function onSearchHandler(value) {
    setSearchValue(value);
  }

  function getFavs() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  }

  function toggleFav(id) {
    const favs = getFavs();
    if (favs.includes(id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favs.filter((x) => x !== id))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favs, id]));
    }
    setUniversitiesData((prev) => [...prev]);
  }

  function isFav(id) {
    return getFavs().includes(id);
  }

  const filteredUniversities = useMemo(() => {
    const search = searchValue.trim().toLowerCase();

    return universitiesData.filter((u) => {
      const matchesSearch =
        search === "" ||
        u.name.toLowerCase().includes(search) ||
        u.country.toLowerCase().includes(search);

      if (!matchesSearch) return false;

      const matchCountry =
        filters.countries.length === 0 || filters.countries.includes(u.country);

      const matchName =
        filters.names.length === 0 || filters.names.includes(u.name);

      return matchCountry && matchName;
    });
  }, [universitiesData, searchValue, filters]);

  const displayList = useMemo(() => {
    if (!sortOrder) return filteredUniversities;

    const sorted = [...filteredUniversities].sort((a, b) =>
      (a.country || "").localeCompare(b.country || "")
    );
    return sorted;
  }, [filteredUniversities, sortOrder]);

  function handleSort() {
    setSortOrder((prev) => {
      if (prev === null) return "asc";
      return null;
    });
  }

  return (
    <div className="universities-page">
      <h1>Universities</h1>

      <div className="universities-toolbar">
        <SearchForm onSearchHandler={onSearchHandler} />

        <button className="filter-button" onClick={() => setIsFilterOpen(true)}>
          <SlidersHorizontal size={20} />
          <span>Filters</span>
        </button>

        <button className="sort-button" onClick={handleSort} type="button">
          Sort {sortOrder === "asc" ? "A→Z" : ""}
        </button>
      </div>

      <div className="universities-content">
        <div className="universities-list">
          {loading ? (
            <>Loading...</>
          ) : (
            <ul>
              {displayList.map((u) => (
                <li key={u.id} className="university-item">
                  <div className="university-left">
                    <b>{u.name}</b> — {u.country}
                  </div>

                  <div className="university-right">
                    <button
                      className="fav-btn"
                      onClick={() => toggleFav(u.id)}
                      type="button"
                    >
                      <Heart
                        size={18}
                        fill={isFav(u.id) ? "currentColor" : "none"}
                      />
                    </button>

                    <Link className="details-link" to={`/universities/${u.id}`}>
                      Details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="filter-menu">
          <div className="filter-menu-content">
            <button
              className="filter-modal-close"
              onClick={() => setIsFilterOpen(false)}
              type="button"
            >
              <X size={24} />
            </button>

            <h2>Filters</h2>

            <FilterSidebar
              filterOptions={filters}
              className="filter-mobile-menu"
              onFilterHandler={onFilterHandler}
              universities={universitiesData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversitiesPage;

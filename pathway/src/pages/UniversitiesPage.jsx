import React, { useState, useEffect } from 'react';
import SearchForm from "../components/SearchForm.jsx";
import FilterSidebar from "../components/FilterSidebar.jsx";
import { SlidersHorizontal, X, Heart } from "lucide-react";
import { getUniversities } from "../services/universityService.js";
import { Link } from "react-router-dom";


const UniversitiesPage = () => {
    const universities = [
        {
            id:1,
            name: "NazarbaevUniversity",
            country: "Kazakhstan"
        },
        {
            id:2,
            name: "KIMEP University",
            country: "Kazakhstan"
        },
        {
            id:3,
            name: "Stanford",
            country: "USA"
        },
        {
            id:4,
            name: "MIT",
            country: "USA"
        },
        {
  id: 5,
  name: "Al-Farabi Kazakh National University (KazNU)",
  country: "Kazakhstan"
},
{
  id: 6,
  name: "Satbayev University",
  country: "Kazakhstan"
},
{
  id: 7,
  name: "L.N. Gumilyov Eurasian National University (ENU)",
  country: "Kazakhstan"
},
{
  id: 8,
  name: "Kazakh-British Technical University (KBTU)",
  country: "Kazakhstan"
},
{
  id: 9,
  name: "Suleyman Demirel University (SDU)",
  country: "Kazakhstan"
},
{
  id: 10,
  name: "Astana IT University",
  country: "Kazakhstan"
},
{
  id: 11,
  name: "Narxoz University",
  country: "Kazakhstan"
},
{
  id: 12,
  name: "Kazakh National Medical University (KazNMU)",
  country: "Kazakhstan"
},
{
  id: 13,
  name: "Karaganda Medical University",
  country: "Kazakhstan"
},
{
  id: 14,
  name: "Karaganda Buketov University",
  country: "Kazakhstan"
},
{
  id: 15,
  name: "South Kazakhstan Medical Academy",
  country: "Kazakhstan"
},
{
  id: 16,
  name: "M. Auezov South Kazakhstan University",
  country: "Kazakhstan"
},
{
  id: 17,
  name: "Abylai Khan University of International Relations and World Languages",
  country: "Kazakhstan"
},
{
  id: 18,
  name: "KAZGUU University (M.S. Narikbayev University)",
  country: "Kazakhstan"
},
{
  id: 19,
  name: "D. Serikbayev East Kazakhstan Technical University",
  country: "Kazakhstan"
},
{
  id: 20,
  name: "S. Amanzholov East Kazakhstan University",
  country: "Kazakhstan"
},

{
  id: 21,
  name: "Harvard University",
  country: "USA"
},
{
  id: 22,
  name: "University of Oxford",
  country: "United Kingdom"
},
{
  id: 23,
  name: "University of Cambridge",
  country: "United Kingdom"
},
{
  id: 24,
  name: "California Institute of Technology (Caltech)",
  country: "USA"
},
{
  id: 25,
  name: "Princeton University",
  country: "USA"
},
{
  id: 26,
  name: "Yale University",
  country: "USA"
},
{
  id: 27,
  name: "Columbia University",
  country: "USA"
},
{
  id: 28,
  name: "University of Chicago",
  country: "USA"
},
{
  id: 29,
  name: "University of California, Berkeley (UC Berkeley)",
  country: "USA"
},
{
  id: 30,
  name: "University of California, Los Angeles (UCLA)",
  country: "USA"
},
{
  id: 31,
  name: "University of Pennsylvania",
  country: "USA"
},
{
  id: 32,
  name: "Cornell University",
  country: "USA"
},
{
  id: 33,
  name: "Duke University",
  country: "USA"
},
{
  id: 34,
  name: "Johns Hopkins University",
  country: "USA"
},
{
  id: 35,
  name: "Northwestern University",
  country: "USA"
},
{
  id: 36,
  name: "ETH Zurich",
  country: "Switzerland"
},
{
  id: 37,
  name: "EPFL (École Polytechnique Fédérale de Lausanne)",
  country: "Switzerland"
},
{
  id: 38,
  name: "Imperial College London",
  country: "United Kingdom"
},
{
  id: 39,
  name: "University College London (UCL)",
  country: "United Kingdom"
},
{
  id: 40,
  name: "London School of Economics (LSE)",
  country: "United Kingdom"
},
{
  id: 41,
  name: "National University of Singapore (NUS)",
  country: "Singapore"
},
{
  id: 42,
  name: "Nanyang Technological University (NTU)",
  country: "Singapore"
},
{
  id: 43,
  name: "University of Toronto",
  country: "Canada"
},
{
  id: 44,
  name: "University of British Columbia (UBC)",
  country: "Canada"
},
{
  id: 45,
  name: "McGill University",
  country: "Canada"
},
{
  id: 46,
  name: "University of Melbourne",
  country: "Australia"
},
{
  id: 47,
  name: "University of Sydney",
  country: "Australia"
},
{
  id: 48,
  name: "Australian National University (ANU)",
  country: "Australia"
},
{
  id: 49,
  name: "Tsinghua University",
  country: "China"
},
{
  id: 50,
  name: "Peking University",
  country: "China"
},
{
  id: 51,
  name: "University of Tokyo",
  country: "Japan"
},
{
  id: 52,
  name: "KAIST",
  country: "South Korea"
},
{
  id: 53,
  name: "Seoul National University",
  country: "South Korea"
},
{
  id: 54,
  name: "Technical University of Munich (TUM)",
  country: "Germany"
},
{
  id: 55,
  name: "Ludwig Maximilian University of Munich (LMU)",
  country: "Germany"
},
{
  id: 56,
  name: "Sorbonne University",
  country: "France"
},
{
  id: 57,
  name: "Sciences Po",
  country: "France"
},
{
  id: 58,
  name: "University of Amsterdam",
  country: "Netherlands"
},
{
  id: 59,
  name: "Delft University of Technology (TU Delft)",
  country: "Netherlands"
},
{
  id: 60,
  name: "University of Hong Kong (HKU)",
  country: "Hong Kong"
},
{
  id: 61,
  name: "International IT University (IITU)",
  country: "Kazakhstan"
},
{
  id: 62,
  name: "Kazakh University of Economics, Finance and International Trade",
  country: "Kazakhstan"
},
{
  id: 63,
  name: "Turan University",
  country: "Kazakhstan"
},
{
  id: 64,
  name: "Kokshetau University named after Shokan Ualikhanov",
  country: "Kazakhstan"
},
{
  id: 65,
  name: "Kostanay Regional University named after A. Baitursynov",
  country: "Kazakhstan"
},
{
  id: 66,
  name: "Pavlodar Pedagogical University",
  country: "Kazakhstan"
},
{
  id: 67,
  name: "Pavlodar State University named after S. Toraighyrov",
  country: "Kazakhstan"
},
{
  id: 68,
  name: "Abai Kazakh National Pedagogical University",
  country: "Kazakhstan"
},
{
  id: 69,
  name: "Kyzylorda University named after Korkyt Ata",
  country: "Kazakhstan"
},
{
  id: 70,
  name: "West Kazakhstan Marat Ospanov Medical University",
  country: "Kazakhstan"
},
{
  id: 71,
  name: "West Kazakhstan University named after M. Utemisov",
  country: "Kazakhstan"
},
{
  id: 72,
  name: "Atyrau University named after H. Dosmukhamedov",
  country: "Kazakhstan"
},
{
  id: 73,
  name: "Atyrau Oil and Gas University",
  country: "Kazakhstan"
},
{
  id: 74,
  name: "Aktobe Regional University named after K. Zhubanov",
  country: "Kazakhstan"
},
{
  id: 75,
  name: "Korkyt Ata University (Kyzylorda)",
  country: "Kazakhstan"
},
{
  id: 76,
  name: "Central Asian University",
  country: "Kazakhstan"
},
{
  id: 77,
  name: "Almaty Management University (AlmaU)",
  country: "Kazakhstan"
},
{
  id: 78,
  name: "Kazakh Academy of Transport and Communications",
  country: "Kazakhstan"
},
{
  id: 79,
  name: "Kazakh Academy of Sports and Tourism",
  country: "Kazakhstan"
},
{
  id: 80,
  name: "S. Seifullin Kazakh Agro Technical University",
  country: "Kazakhstan"
},

{
  id: 81,
  name: "New York University (NYU)",
  country: "USA"
},
{
  id: 82,
  name: "University of Michigan, Ann Arbor",
  country: "USA"
},
{
  id: 83,
  name: "Carnegie Mellon University",
  country: "USA"
},
{
  id: 84,
  name: "Georgia Institute of Technology",
  country: "USA"
},
{
  id: 85,
  name: "University of Washington",
  country: "USA"
},
{
  id: 86,
  name: "University of Texas at Austin",
  country: "USA"
},
{
  id: 87,
  name: "University of Illinois Urbana-Champaign (UIUC)",
  country: "USA"
},
{
  id: 88,
  name: "Purdue University",
  country: "USA"
},
{
  id: 89,
  name: "University of Wisconsin–Madison",
  country: "USA"
},
{
  id: 90,
  name: "University of North Carolina at Chapel Hill",
  country: "USA"
},
{
  id: 91,
  name: "University of California, San Diego (UCSD)",
  country: "USA"
},
{
  id: 92,
  name: "University of California, Davis (UC Davis)",
  country: "USA"
},
{
  id: 93,
  name: "University of California, Irvine (UCI)",
  country: "USA"
},
{
  id: 94,
  name: "University of California, Santa Barbara (UCSB)",
  country: "USA"
},
{
  id: 95,
  name: "University of Southern California (USC)",
  country: "USA"
},
{
  id: 96,
  name: "Boston University",
  country: "USA"
},
{
  id: 97,
  name: "Brown University",
  country: "USA"
},
{
  id: 98,
  name: "Dartmouth College",
  country: "USA"
},
{
  id: 99,
  name: "Rice University",
  country: "USA"
},
{
  id: 100,
  name: "Vanderbilt University",
  country: "USA"
},
{
  id: 101,
  name: "University of Notre Dame",
  country: "USA"
},
{
  id: 102,
  name: "Emory University",
  country: "USA"
},
{
  id: 103,
  name: "Georgetown University",
  country: "USA"
},
{
  id: 104,
  name: "Tufts University",
  country: "USA"
},
{
  id: 105,
  name: "Washington University in St. Louis",
  country: "USA"
},
{
  id: 106,
  name: "University of Maryland, College Park",
  country: "USA"
},
{
  id: 107,
  name: "Ohio State University",
  country: "USA"
},
{
  id: 108,
  name: "Pennsylvania State University (Penn State)",
  country: "USA"
},
{
  id: 109,
  name: "University of Minnesota, Twin Cities",
  country: "USA"
},
{
  id: 110,
  name: "University of Florida",
  country: "USA"
},

{
  id: 111,
  name: "King's College London",
  country: "United Kingdom"
},
{
  id: 112,
  name: "University of Edinburgh",
  country: "United Kingdom"
},
{
  id: 113,
  name: "University of Manchester",
  country: "United Kingdom"
},
{
  id: 114,
  name: "University of Bristol",
  country: "United Kingdom"
},
{
  id: 115,
  name: "University of Warwick",
  country: "United Kingdom"
},
{
  id: 116,
  name: "University of Glasgow",
  country: "United Kingdom"
},
{
  id: 117,
  name: "University of Birmingham",
  country: "United Kingdom"
},
{
  id: 118,
  name: "University of Leeds",
  country: "United Kingdom"
},
{
  id: 119,
  name: "University of Sheffield",
  country: "United Kingdom"
},
{
  id: 120,
  name: "University of Nottingham",
  country: "United Kingdom"
},

{
  id: 121,
  name: "University of Waterloo",
  country: "Canada"
},
{
  id: 122,
  name: "McMaster University",
  country: "Canada"
},
{
  id: 123,
  name: "University of Alberta",
  country: "Canada"
},
{
  id: 124,
  name: "University of Montreal",
  country: "Canada"
},
{
  id: 125,
  name: "Western University",
  country: "Canada"
},

{
  id: 126,
  name: "UNSW Sydney",
  country: "Australia"
},
{
  id: 127,
  name: "Monash University",
  country: "Australia"
},
{
  id: 128,
  name: "University of Queensland",
  country: "Australia"
},
{
  id: 129,
  name: "University of New South Wales (UNSW)",
  country: "Australia"
},
{
  id: 130,
  name: "University of Adelaide",
  country: "Australia"
},

{
  id: 131,
  name: "University of Auckland",
  country: "New Zealand"
},
{
  id: 132,
  name: "University of Otago",
  country: "New Zealand"
},

{
  id: 133,
  name: "University of Zurich",
  country: "Switzerland"
},
{
  id: 134,
  name: "University of Geneva",
  country: "Switzerland"
},
{
  id: 135,
  name: "University of Basel",
  country: "Switzerland"
},

{
  id: 136,
  name: "Karolinska Institute",
  country: "Sweden"
},
{
  id: 137,
  name: "KTH Royal Institute of Technology",
  country: "Sweden"
},
{
  id: 138,
  name: "Lund University",
  country: "Sweden"
},
{
  id: 139,
  name: "Uppsala University",
  country: "Sweden"
},

{
  id: 140,
  name: "University of Copenhagen",
  country: "Denmark"
},
{
  id: 141,
  name: "Technical University of Denmark (DTU)",
  country: "Denmark"
},

{
  id: 142,
  name: "University of Oslo",
  country: "Norway"
},
{
  id: 143,
  name: "Norwegian University of Science and Technology (NTNU)",
  country: "Norway"
},

{
  id: 144,
  name: "University of Helsinki",
  country: "Finland"
},
{
  id: 145,
  name: "Aalto University",
  country: "Finland"
},

{
  id: 146,
  name: "KU Leuven",
  country: "Belgium"
},
{
  id: 147,
  name: "Ghent University",
  country: "Belgium"
},
{
  id: 148,
  name: "Université catholique de Louvain (UCLouvain)",
  country: "Belgium"
},

{
  id: 149,
  name: "University of Vienna",
  country: "Austria"
},
{
  id: 150,
  name: "TU Wien (Vienna University of Technology)",
  country: "Austria"
},

{
  id: 151,
  name: "Trinity College Dublin",
  country: "Ireland"
},
{
  id: 152,
  name: "University College Dublin (UCD)",
  country: "Ireland"
},

{
  id: 153,
  name: "Leiden University",
  country: "Netherlands"
},
{
  id: 154,
  name: "Utrecht University",
  country: "Netherlands"
},
{
  id: 155,
  name: "Erasmus University Rotterdam",
  country: "Netherlands"
},
{
  id: 156,
  name: "Wageningen University & Research",
  country: "Netherlands"
},

{
  id: 157,
  name: "Heidelberg University",
  country: "Germany"
},
{
  id: 158,
  name: "RWTH Aachen University",
  country: "Germany"
},
{
  id: 159,
  name: "Humboldt University of Berlin",
  country: "Germany"
},
{
  id: 160,
  name: "Freie Universität Berlin",
  country: "Germany"
},
{
  id: 161,
  name: "Karlsruhe Institute of Technology (KIT)",
  country: "Germany"
},
{
  id: 162,
  name: "University of Bonn",
  country: "Germany"
},
{
  id: 163,
  name: "University of Göttingen",
  country: "Germany"
},

{
  id: 164,
  name: "PSL University (Paris Sciences et Lettres)",
  country: "France"
},
{
  id: 165,
  name: "École Polytechnique",
  country: "France"
},
{
  id: 166,
  name: "Université Paris-Saclay",
  country: "France"
},
{
  id: 167,
  name: "Université Grenoble Alpes",
  country: "France"
},

{
  id: 168,
  name: "Bocconi University",
  country: "Italy"
},
{
  id: 169,
  name: "Politecnico di Milano",
  country: "Italy"
},
{
  id: 170,
  name: "Sapienza University of Rome",
  country: "Italy"
}
];

  const [universitiesData, setUniversitiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  async function fetchUniversities() {
  setLoading(true);
    try {
      const data = await getUniversities();
        setUniversitiesData(data);
  } catch (e) {
        console.log("API not found, using local data");
        setUniversitiesData(universities);
  }
  setLoading(false);
}


  useEffect(() => {
    fetchUniversities();
  }, []);

  const [filters, setFilters] = useState({
    countries: [],
    names: []
  });

  const [searchValue, setSearchValue] = useState("");

  function onFilterHandler(filtersValue) {
    setFilters(filtersValue);
  }

  function onSearchHandler(value) {
    setSearchValue(value);
    console.log(value);
  }

  const filteredUniversities = universitiesData.filter((u) => {
    const search = searchValue.trim().toLowerCase();
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

  function getFavs() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function toggleFav(id) {
  const favs = getFavs();
  if (favs.includes(id)) {
    localStorage.setItem("favorites", JSON.stringify(favs.filter((x) => x !== id)));
  } else {
    localStorage.setItem("favorites", JSON.stringify([...favs, id]));
  }
  setUniversitiesData((prev) => [...prev]);
}

function isFav(id) {
  return getFavs().includes(id);
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
        </div>


    <div className="universities-content">
      

      <div className="universities-list">
        {loading ? (
          <>Loading...</>
        ) : (
          <ul>
            {filteredUniversities.map((u) => (
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
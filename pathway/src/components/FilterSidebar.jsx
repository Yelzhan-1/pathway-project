import React, { useEffect, useState } from "react";

const FilterSidebar = ({ onFilterHandler, className = "", filterOptions, universities = [] }) => {
  const [countries, setCountries] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const countriesSet = new Set();
    const namesSet = new Set();

    universities.forEach((u) => {
      if (u.country) countriesSet.add(u.country);
      if (u.name) namesSet.add(u.name);
    });

    setCountries(Array.from(countriesSet).sort());
    setNames(Array.from(namesSet).sort());
  }, [universities]);

  function handleCheckboxChange(category, value, checked) {
    const prevValues = filterOptions[category] || [];

    const newValues = checked
      ? [...prevValues, value]
      : prevValues.filter((item) => item !== value);

    const nextFilters = {
      ...filterOptions,
      [category]: newValues
    };

    onFilterHandler(nextFilters);
  }

  const selectedCountries = filterOptions.countries || [];
  const selectedNames = filterOptions.names || [];

  return (
    <div className={`filter-sidebar ${className}`}>
      <div>
        <h2>Countries</h2>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={country}
                checked={selectedCountries.includes(country)}
                onChange={(e) =>
                  handleCheckboxChange("countries", country, e.target.checked)
                }
              />
              {country}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Universities</h2>
        <ul style={{ maxHeight: "250px", overflowY: "auto" }}>
          {names.map((name, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={name}
                checked={selectedNames.includes(name)}
                onChange={(e) =>
                  handleCheckboxChange("names", name, e.target.checked)
                }
              />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;

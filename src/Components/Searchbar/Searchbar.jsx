import React, { useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ submitFunction }) => {
  const [search, setSearch] = useState("");

  const onChangeInpt = event => {
    setSearch(event.target.value.toLowerCase());
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (search === "") {
      return alert("Search field must not be empty");
    }
    submitFunction(search);
    setSearch("");
  };

  return (
    <header className="Searchbar">
      <form onSubmit={onSubmitForm} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeInpt}
          name="search"
          value={search}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  submitFunction: PropTypes.func.isRequired,
};
export default Searchbar;

import React from "react";
import PropTypes from "prop-types";

const SearchBar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search logs" required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

// SearchBar.propTypes = {

// }

export default SearchBar;

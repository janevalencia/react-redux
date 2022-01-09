import React, {useRef} from "react";
import PropTypes from "prop-types";

// Connect Redux
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logs/logActions";

const SearchBar = ( { searchLogs} ) => {
  const searchInput = useRef('');

  const onChange = (e) => {
    searchLogs(searchInput.current.value)
  }

  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search logs" required 
            ref={searchInput}
            onChange={onChange} />
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

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);

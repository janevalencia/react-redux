import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  const { firstname, lastname } = tech;

  return (
    <li className="collection-item">
      <div>{firstname} {lastname}</div>
      <a href="#!" className="secondary-content">
        <i className="material-icons teal-text">delete</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;

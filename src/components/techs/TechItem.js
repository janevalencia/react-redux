import React from "react";
import PropTypes from "prop-types";

// Connect redux
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techs/techActions";

// So we can use Toast for input-error handling
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const { id, firstname, lastname } = tech;

  const onDelete = () => {
    if (id !== null || id !== "") {
      // Execute deleteTech() action
      deleteTech(id);

      // On succeed (200)
      M.toast({
        html: `Successfully delete ${firstname} ${lastname}`,
      });
    } else {
      console.error('Error: cannot delete. ID null!')
    }
  };

  return (
    <li className="collection-item">
      <div className="flex-row flex__justify-between">
        <div>
          {firstname} {lastname}
        </div>
        <a href="#!" onClick={onDelete}>
          <i className="material-icons teal-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);

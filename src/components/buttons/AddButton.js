import React from "react";

const AddButton = () => {
  return (
    <div className="fixed-action-btn click-to-toggle">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large teal darken-2 modal-trigger"
      >
        <i class="large material-icons">add</i>
      </a>
      
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating btn-large blue lighten-2 modal-trigger"
          >
            <i class="material-icons">person</i>
          </a>
        </li>

        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating btn-large green lighten-2 modal-trigger"
          >
            <i class="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;

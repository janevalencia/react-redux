import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  const { id, message, priority, ITperson: tech, date } = log;

  let priorityColor, priorityIcon = "";
  switch (priority) {
    case "Urgent":
      priorityColor = "red-text";
      priorityIcon = "arrow_drop_up";
      break;

    case "High":
      priorityColor = "orange-text";
      priorityIcon = "arrow_drop_up";
      break;

    default:
      priorityColor = "teal-text";
      priorityIcon = "arrow_drop_down";
      break;
  }

  return (
    <li className="collection-item">
      <div className="grid">
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? `red-text` : `teal-text`
          }`}
        >
          {message}
        </a>

        <div className="flex-row flex__justify-between flex__align-center">
          <span className="grey-text">
            <span>
              <i className={`tiny material-icons ${priorityColor}`}>
                {priorityIcon}
              </i>
            </span>
            <span className="black-text">Issue #{id}</span>
            {``} last updated by {``}
            <span className="black-text">{tech}</span> on {` `}
            <Moment format="dddd, DD-MM-YYYY hh:mm:ss A">{date}</Moment>
          </span>

          <a href="#!">
            <i className="material-icons teal-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;

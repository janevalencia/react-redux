import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// So we can use Toast for input-error handling in Modal
import M from "materialize-css/dist/js/materialize.min.js";

// Connect Redux
import { connect } from "react-redux";
import { updateLog, clearCurrentLog } from "../../actions/logs/logActions";

// Import Sub-Component
import TechSelectOptions from "../techs/TechSelectOptions";

// This will pop-up an Add Form
const EditLogModal = ({ current, updateLog, clearCurrentLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [ITperson, setTech] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    // Upon current has been set i.e. NOT NULL, we set the form
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.ITperson);
      setPriority(current.priority);
    }
  }, [current]); // current is the dependency so as current is updated, this will be triggered

  const onSubmit = () => {
    if (message === "" || ITperson === "" || priority === "") {
      M.toast({
        html: "Invalid submission: Please enter message, IT person, and priority!",
      });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        ITperson,
        priority,
        date: new Date().toISOString(),
      };

      // Calling updateLog() action
      updateLog(updatedLog);

      // Upon success: sending TOAST message success
      M.toast({
        html: `Successfully updated: Log Issue #${current.id}`,
      });

      // Reset fields
      setMessage("");
      setTech("");
      setPriority("");
      setAttention(false);

      // Calling clearCurrentLog() action for next use
      clearCurrentLog();
    }
  };

  return (
    <div id="edit-log-modal" className="modal modal-box">
      <h4>Edit Issue #</h4>
      <div className="modal-content">
        {/* Input: Message */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              placeholder="Message (Required)"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Input: IT Person */}
        <div className="row">
          <div className="input-field">
            <select
              name="ITperson"
              value={ITperson}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <TechSelectOptions />
            </select>
          </div>
        </div>

        {/* Input: Priority */}
        <div className="row">
          <div className="input-field">
            <select
              name="priority"
              value={priority}
              className="browser-default"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Input: Attention Checkbox (true/false) */}
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need attention?</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      {/* Modal Footer: CTA */}
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-teal btn"
        >
          Edit
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
  clearCurrentLog: PropTypes.func.isRequired,
};

// Set what we need from App-Level-State and that will be the prop of this component
const mapStateToProps = (state) => ({
  current: state.logReducer.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrentLog })(
  EditLogModal
);

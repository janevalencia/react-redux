import React, { useState } from "react";

// So we can use Toast for input-error handling in Modal
import M from "materialize-css/dist/js/materialize.min.js";

// This will pop-up an Add Form
const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [ITperson, setTech] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = () => {
    if (message === "" || ITperson === "" || priority === "") {
      M.toast({
        html: "Invalid submission: Please enter message, IT person, and priority!",
      });
    } else {
      console.log(message, attention, ITperson, priority);

      // Reset fields
      setMessage("");
      setTech("");
      setPriority("");
      setAttention(false);
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
              <option value="" disabled>
                Select IT Person (Required)
              </option>
              <option value="1">Person 1</option>
              <option value="2">Person 2</option>
              <option value="3">Person 3</option>
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
              <option value="" disabled>
                Select Priority (Required)
              </option>
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

export default EditLogModal;

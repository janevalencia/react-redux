import React, { useState } from "react";

// So we can use Toast for input-error handling in Modal
import M from "materialize-css/dist/js/materialize.min.js";

// This will pop-up an Add Form
const AddTechModal = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const onSubmit = () => {
    if (firstname === "") {
      M.toast({
        html: "Invalid submission: Please enter firstname!",
      });
    } else {
      console.log(firstname, lastname);

      // Reset fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal modal-box">
      <h4>Add New Technician</h4>
      <div className="modal-content">
        {/* Input: FirstName */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={firstname}
              placeholder="First Name (Required)"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        {/* Input: LastName */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={lastname}
              placeholder="Surname"
              onChange={(e) => setLastName(e.target.value)}
            />
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
          Submit
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;

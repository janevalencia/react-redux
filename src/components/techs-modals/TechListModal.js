import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

// Import Component
import TechItem from "../techs/TechItem";

const TechListModal = () => {
  // State
  const [ITpersons, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  // Only run on the first render as noted with []
  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);

  // Return a promise
  const getTechs = async () => {
    setLoading(true);

    // directly fetching API uri because we have set proxy in package.json
    const res = await fetch("/ITpersons");
    const data = await res.json();

    setTech(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <h4>Technicians</h4>
      <div className="modal-content">
        <ul className="collection">
          {!loading ?
            ITpersons.map((tech) => <TechItem key={tech.id} tech={tech} />) : `None`}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;

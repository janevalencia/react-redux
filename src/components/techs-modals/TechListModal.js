import React, { useState, useEffect } from "react";

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
    <div id="tech-list-modal" className="modal modal-box">
      <h4>Technicians</h4>
      <div className="modal-content">
        <ul className="collection">
          {!loading && ITpersons.length !== 0 ?
            ITpersons.map((tech) => <TechItem key={tech.id} tech={tech} />) : console.log('something is up here.')}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;

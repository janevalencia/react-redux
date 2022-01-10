import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Import Component
import TechItem from "../techs/TechItem";

// Connect Redux
import { connect } from "react-redux";
import { getTechs } from "../../actions/techs/techActions";

const TechListModal = ( {tech, getTechs} ) => {
  // Deconstruct tech state
  const { techs: ITpersons, loading } = tech;

  // Only run on the first render as noted with []
  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal modal-box">
      <h4>Technicians</h4>
      <div className="modal-content">
        <ul className="collection">
          {!loading && ITpersons !== null ?
            ITpersons.map((tech) => <TechItem key={tech.id} tech={tech} />) : <li>No technicians.</li>}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  tech: state.tech // tech is key for techReducer (in rootReducer index.js)
});

export default connect(mapStateToProps, { getTechs })(TechListModal);

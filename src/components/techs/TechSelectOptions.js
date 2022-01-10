import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Connect Redux
import { connect } from "react-redux";
import { getTechs } from "../../actions/techs/techActions";

const TechSelectOptions = ({ tech, getTechs }) => {
  const { techs, loading } = tech;

  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []); // run on component mounted (initial)

  return (
    !loading &&
    techs !== null &&
    techs.map((obj) => (
      <option key={obj.id} value={`${obj.firstname} ${obj.lastname}`}>
        {obj.firstname} {obj.lastname}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);

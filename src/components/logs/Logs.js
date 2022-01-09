import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Connect with Redux
import { connect } from "react-redux"; // Connect redux to this component
import { getLogs } from "../../actions/logs/logActions"; // Import the action we need

// Import Component
import LogItem from "./LogItem";
import Preloader from "../loading/Preloader";

// Passing in whatever you put in connect(...) to here as it is now your prop
// including the getLogs() action function
const Logs = ({ log, getLogs }) => {
  // Deconstruct the log object (the object we got from reducer payload)
  const { logs, loading } = log;

  // Only run on the first render as noted with []
  useEffect(() => {
    // Run the getLogs() action
    getLogs();

    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) return <Preloader />;

  return (
    <section className="container">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs found.</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </section>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

// Set what we need from App-Level-State and that will be the prop of this component
const mapStateToProps = (state) => ({
  log: state.logReducer,
});

// everytime you connect redux, this is how you export component
export default connect(mapStateToProps, { getLogs })(Logs); 

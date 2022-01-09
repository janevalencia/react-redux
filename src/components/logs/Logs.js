import React, { useState, useEffect } from "react";

// Import Component
import LogItem from "./LogItem";
import Preloader from "../loading/Preloader";

const Logs = () => {
  // State
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Only run on the first render as noted with []
  useEffect(() => {
    getLogs();

    // eslint-disable-next-line
  }, []);

  // Return a promise
  const getLogs = async () => {
    setLoading(true);

    // directly fetching API uri because we have set proxy in package.json
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  // Will change this to material UI later
  if (loading) return <Preloader />;

  return (
    <section className="container">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs found.</p>
        ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </section>
  );
};

export default Logs;

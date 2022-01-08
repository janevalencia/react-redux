import React, { Fragment, useEffect } from "react";

// Always import the .min version
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// Import Components
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/buttons/AddButton";
import AddLogModal from "./components/logs-modals/AddLogModal";
import EditLogModal from "./components/logs-modals/EditLogModal";
import AddTechModal from "./components/techs-modals/AddTechModal";
import TechListModal from "./components/techs-modals/TechListModal";

// Import SASS
import "./App.scss";

const App = () => {
  useEffect(() => {
    // Initialise Materialise JS at the start of the app
    // Now we would be able to use Modals and all the Materialise stuff that requires JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <header className="header" id="header">
        <SearchBar />
      </header>
      <main className="container">
        <AddButton />
        <TechListModal />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </main>
    </Fragment>
  );
};

export default App;

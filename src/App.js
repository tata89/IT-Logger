import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Searchbar from "./components/Layout/Searchbar";
import AddBtn from "./components/Layout/AddBtn";
import Logs from "./components/Logs/Logs";
import AddLogModal from "./components/Logs/AddLogModal";
import EditLogModal from "./components/Logs/EditLogModal";
import AddTechsModal from "./components/Techs/AddTechsModal";
import TechListModal from "./components/Techs/TechListModal";
import { Provider } from "react-redux";
import store from "./Store";
const App = () => {
  useEffect(() => {
    //materilaze js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <React.Fragment>
        <Searchbar />
        <div className="container">
          {" "}
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechsModal />
          <TechListModal />
          <Logs />
        </div>
      </React.Fragment>
    </Provider>
  );
};
export default App;

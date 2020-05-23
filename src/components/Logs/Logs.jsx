import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItems from "./LogItems";
import Preloader from "../Layout/Preloader";
import { getLogs } from "../../Actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  //removal  of the useState hooks as the values of state are now coming from props thorught the logReducers.js
  useEffect(() => {
    getLogs();
  }, []);
  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("./logs");
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);
  //   console.log(data);
  // };
  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        logs.map((log) => <LogItems key={log.id} log={log} />)
      )}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);

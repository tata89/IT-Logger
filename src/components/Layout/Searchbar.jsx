import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../Actions/logActions";
const Searchbar = ({ searchLogs }) => {
  const text = useRef("");
  const onSearch = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <React.Fragment>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search for Log here..."
                ref={text}
                onChange={onSearch}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default connect(null, { searchLogs })(Searchbar);

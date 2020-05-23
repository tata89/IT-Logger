import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import { getTechs } from "../../Actions/techActions";
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);

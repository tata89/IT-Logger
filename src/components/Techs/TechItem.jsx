import React from "react";
import { connect } from "react-redux";
import { deleteTechs } from "../../Actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
const TechItem = ({ tech: { id, firstName, lastName }, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(id);
    M.toast({ html: "Technician deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTechs })(TechItem);

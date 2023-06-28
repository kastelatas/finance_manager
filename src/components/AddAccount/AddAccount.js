import React from "react";
import "./AddAccount.scss";

const AddAccount = ({ onClick }) => {
  return (
    <div className="add-account">
      <div className="button">
        <div
          className="button-big"
          onClick={onClick}
        >
          <div className="add-accounts">Add accounts</div>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;

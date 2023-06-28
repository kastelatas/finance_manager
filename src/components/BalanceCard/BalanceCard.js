import React from "react";
import { Link } from "react-router-dom";
import "./BalanceCard.scss";

const BalanceCard = props => {
  const {
    bankName,
    branchName,
    accountType,
    accountNumber,
    balanceAmount,
    id,
    deleteBalance,
  } = props;
  return (
    <div className="balance-card">
      <div className="header">
        <div className="credit-card">{accountType}</div>
        <div className="type">
          <div className="frame-40714">
            <div className="master-card">Master Card</div>
          </div>
          <div className="icon">
            <div className="mastercard">
              <img
                className="mastercard-logo-1"
                src="mastercard-logo-1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="account-details">
          <div className="account-number">
            <div className="_133-456-886-8">{accountNumber}</div>
            <div className="account-number2">Account Number</div>
          </div>
          <div className="total-amount">
            <div className="_25000">${balanceAmount}</div>
            <div className="total-amount2">Total amount</div>
          </div>
        </div>
        <div className="footer">
          <div
            className="remove"
            onClick={() => deleteBalance(id)}
          >
            Remove
          </div>
          <Link
            to={`/balances/${id}`}
            className="button"
          >
            <div className="details">Details</div>
            <svg
              className="chevron-right"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;

import React from "react";
import SVG from "react-inlinesvg";
import TransactionCategory from "@/assets/Icons/TransactionCategory.svg";
import currencyFormater from "@/helpers/currencyFormater";
import dateFormater from "@/helpers/dateFormater";

const TabContent = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => {
        return (
          <div
            className="transaction-item-wrapper"
            key={transaction.id}
          >
            <div className="flex">
              <SVG src={TransactionCategory} />
              <div>
                <p className="title">{transaction.item}</p>
                <p className="subtitle">{transaction.shopName}</p>
              </div>
            </div>
            <div>
              <div className="amount">
                {currencyFormater(transaction.amount)}
              </div>
              <div className="date">{dateFormater(transaction.date)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabContent;

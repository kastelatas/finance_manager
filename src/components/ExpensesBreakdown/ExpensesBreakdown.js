import React from "react";
import BaseTitle from "../shared/BaseTitle";
import ExpensesItem from "./components/ExpensesItem";
import styles from "./ExpensesBreakdown.module.scss";

const expensesArr = [
  {
    id: 1,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
  {
    id: 2,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
  {
    id: 3,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
  {
    id: 4,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
  {
    id: 5,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
  {
    id: 6,
    icon: "home",
    text: "Housing",
    price: 250,
    simile: 15,
  },
];

const ExpensesBreakdown = () => {
  return (
    <div className={styles.expensesBreakdown}>
      <BaseTitle
        text="Expenses Breakdown"
        fontSize={"22"}
      />
      <div className={styles.container}>
        {expensesArr.map(item => {
          return (
            <ExpensesItem
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpensesBreakdown;

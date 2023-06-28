import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import classNames from "classnames";
import { RoutesEnum } from "@/constants/emun/routes";
import HouseIcon from "@/assets/Icons/HouseIcon.svg";
import ArrowIcon from "@/assets/Icons/ExprensesBigArrow.svg";
import currencyFormatter from "@/helpers/currencyFormater";
import styles from "./ExpensesItem.module.scss";

const ExpensesItem = ({ item }) => {
  const clss = classNames(
    styles.expensesItem,
    {},
    styles[`expensesItem-${item.id}`]
  );

  return (
    <div className={clss}>
      <Link to={RoutesEnum.Expenses}>
        <div className={styles.container}>
          <div className={styles.iconWrapper}>
            <SVG
              src={HouseIcon}
              className={styles.icon}
            />
          </div>

          <div className="column">
            <p className={styles.title}>{item.text}</p>
            <p className={styles.price}>{currencyFormatter(item.price)}</p>
            <p className={styles.simile}>{item.simile} %</p>
          </div>
          <SVG
            src={ArrowIcon}
            className={styles.arrowIcon}
          />
        </div>
      </Link>
    </div>
  );
};

export default ExpensesItem;

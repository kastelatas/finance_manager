import React from "react";
import SVG from "react-inlinesvg";
import GoalsBar from "./GoalsBar";
import BaseTitle from "../shared/BaseTitle";
import EditIcon from "@/assets/Icons/EditIcon.svg";
import AwardIcon from "@/assets/Icons/AwardIcon.svg";
import TargetdIcon from "@/assets/Icons/TargetIcon.svg";
import styles from "./GoalsCard.module.scss";

function GoalsCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.goalsCardTitle}>
        <BaseTitle
          text="Goals"
          fontSize="22"
        />
      </div>
      <div className={styles.goalsCardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.goalsAmount}>
            $20,000
            <button className={styles.editButton}>
              <SVG
                src={EditIcon}
                className={styles.editIcon}
              />
            </button>
          </div>
          <div className={styles.date}>May, 23</div>
        </div>

        <div className={styles.bodyContent}>
          <div className={styles.targets}>
            <div className={styles.targetAchived}>
              <SVG
                src={AwardIcon}
                className={styles.targetsIcon}
              />
              <div className={styles.textContainer}>
                <p className={styles.targetsTitle}>Target Achieved</p>
                <p className={styles.targetsAmount}>$12,500</p>
              </div>
            </div>
            <div className={styles.targetAchived}>
              <SVG
                src={TargetdIcon}
                className={styles.targetsIcon}
              />
              <div className={styles.textContainer}>
                <p className={styles.targetsTitle}>This month Target</p>
                <p className={styles.targetsAmount}>$20,000</p>
              </div>
            </div>
          </div>
          <GoalsBar
            goal={560}
            current={232}
          />
        </div>
      </div>
    </div>
  );
}

export default GoalsCard;

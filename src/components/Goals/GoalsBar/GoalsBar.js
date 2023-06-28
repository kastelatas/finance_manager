import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from "react-customizable-progressbar";
import SVG from "react-inlinesvg";
import meterIcon from "@/assets/Icons/Meter.svg";
import styles from "./GoalsBar.module.scss";

const Goals = ({ goal, current }) => {
  const [progress, setProgress] = useState(0);
  const [meterRotate, setMeterRotate] = useState(-135);
  const [goalAmout, setgoalAmout] = useState(+goal);
  const [currentAmount, setCurrentAmount] = useState(+current);

  const calculateRotation = percentage => {
    const degSumm = 180;
    const startPosition = 135;
    const rotation = degSumm * (percentage / 100) - startPosition;
    setProgress(percentage);
    return rotation;
  };

  useEffect(() => {
    setTimeout(() => {
      const currentProggres = (currentAmount / goalAmout) * 100;
      const rotation = calculateRotation(currentProggres);
      setMeterRotate(rotation);
    }, 800);
  }, []);

  return (
    <>
      <div className={styles.meterCotainer}>
        <div className={styles.progressBar}>
          <ProgressBar
            progress={progress}
            radius={50}
            cut={180}
            rotate={-180}
            strokeColor="#299D91"
            strokeWidth={12}
            trackStrokeWidth={12}
            initialAnimation={true}
            initialAnimationDelay={800}
            className={styles.progressBar}
          />
          <SVG
            className={styles.meterIcon}
            src={meterIcon}
            width={38}
            height={72}
            style={{
              transform: `rotate(${meterRotate}deg)`,
            }}
          />
        </div>
        <div className={styles.barText}>
          <p className={styles.amountText}>$0</p>
          <p className={styles.currentAmount}>{`${currentAmount}K`}</p>
          <p
            className={(styles.amountText, styles.goalAmount)}
          >{`$${goalAmout}k`}</p>
        </div>
      </div>
    </>
  );
};

Goals.propTypes = {
  goal: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default Goals;

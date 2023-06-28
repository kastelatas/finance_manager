import React from "react";
import "./ExpensesBreakdownFull.scss";

const ExpensesBreakdownFull = () => {
  return (
    <div className="expenses-breakdown">
      <div className="expenses-breakdown__frame-40478">
        <div className="expenses-breakdown__frame-40315">
          <svg
            className="expenses-breakdown__housing"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3333 5V6.78421L12 7.83421V6.57895H20.3333V18.4211H16.1667V20H22V5H10.3333ZM8.25 7.36842L2 11.3158V20H14.5V11.3158L8.25 7.36842ZM13.6667 8.15789V8.89211L15.0083 9.73684H15.3333V8.15789H13.6667ZM17 8.15789V9.73684H18.6667V8.15789H17ZM8.25 9.34211L12.8333 12.1053V18.4211H10.3333V13.6842H6.16667V18.4211H3.66667V12.1053L8.25 9.34211ZM17 11.3158V12.8947H18.6667V11.3158H17ZM17 14.4737V16.0526H18.6667V14.4737H17Z"
              fill="#525256"
            />
          </svg>
        </div>

        <div className="expenses-breakdown__frame-40405">
          <div className="expenses-breakdown__frame-40322">
            <div className="expenses-breakdown__housing2">Housing</div>

            <div className="expenses-breakdown___250-00">$250.00</div>
          </div>

          <div className="expenses-breakdown__frame-40316">
            <div className="expenses-breakdown__frame-40492">
              <div className="expenses-breakdown___15">15%</div>

              <svg
                className="expenses-breakdown__up-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12.6667V3.33333"
                  stroke="#E73D1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33301 8L7.99967 3.33333L12.6663 8"
                  stroke="#E73D1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="expenses-breakdown__compare-to-last-month">
              Compare to last month
            </div>
          </div>
        </div>
      </div>

      <div className="expenses-breakdown__frame-40485">
        <div className="expenses-breakdown__frame-40267">
          <div className="expenses-breakdown__frame-40259">
            <div className="expenses-breakdown__frame-40258">
              <div className="expenses-breakdown__house-rent">House Rent</div>
            </div>
          </div>

          <div className="expenses-breakdown__frame-40290">
            <div className="expenses-breakdown___230-00">$230.00</div>

            <div className="expenses-breakdown___17-may-2023">17 May 2023</div>
          </div>
        </div>

        <div className="expenses-breakdown__frame-40484">
          <div className="expenses-breakdown__frame-40259">
            <div className="expenses-breakdown__frame-40258">
              <div className="expenses-breakdown__parking">Parking</div>
            </div>
          </div>

          <div className="expenses-breakdown__frame-40290">
            <div className="expenses-breakdown___20-00">$20.00</div>

            <div className="expenses-breakdown___17-may-2023">17 May 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesBreakdownFull;

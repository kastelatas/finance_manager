import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "@/components/Table";
import BillModal from "@/components/Modals/BillModal";
import dateFormater from "@/helpers/dateFormater";
import { bill } from "@/constants/bill";
import { useDispatch, useSelector } from "react-redux";
import { getBills } from "@/store/BillsSlice";
import styles from "./Bills.module.scss";
import SmallLoader from "@/components/SmallLoader";

export const Bills = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { bills, loading } = useSelector(state => state.bills);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const textHeadTable = [
    "Due Date",
    "Logo",
    "Item Description",
    "Last Charge",
    "Amount",
  ];

  useEffect(() => {
    if (user.id) {
      dispatch(getBills(user.id));
      console.log("bills", bills);
    }
  }, [user]);

  return (
    <MainLayout>
      <div className={styles.bills}>
        <div className="flex uk-flex-between">
          <BaseTitle
            text="Upcoming Bills"
            fontSize={"22"}
            classes={"transactions-title"}
          />
          <button
            type="button"
            className={styles["modal-open"]}
            onClick={() => setIsOpenModal(true)}
          >
            Create Bill
          </button>
        </div>
        <div className={styles.tableWrapper}>
          {loading ? (
            <SmallLoader />
          ) : (
            <Table>
              <TableHeader>
                <Tr>
                  {textHeadTable.map((t, index) => (
                    <Th
                      key={index}
                      className={
                        index === textHeadTable.length - 1
                          ? styles.rightAlign
                          : null
                      }
                    >
                      {t}
                    </Th>
                  ))}
                </Tr>
              </TableHeader>
              <TableBody>
                {bills.map(b => (
                  <Tr
                    className={styles.tableRow}
                    key={b.id}
                  >
                    <Td>
                      <div className={styles.dateBlock}>
                        <div className={styles.textMonth}>
                          {dateFormater(b.date, "MMM")}
                        </div>
                        <div className={styles.textDay}>
                          {dateFormater(b.date, "DD")}
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <img
                        className={styles.image}
                        src={b.logo}
                        alt={b.name}
                      />
                    </Td>
                    <Td>
                      <div className={styles.descriptionBlock}>
                        <div className={styles.descriptionTitle}>
                          {" "}
                          {b.title}
                        </div>
                        <div className={styles.description}>
                          {b.description}
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className={styles.lastChange}>
                        {dateFormater(b.updateDate, "DD MMM, YYYY")}
                      </div>
                    </Td>
                    <Td>
                      <div className={styles.amountBox}>
                        <div className={styles.amount}>${b.amount}</div>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
      <BillModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </MainLayout>
  );
};

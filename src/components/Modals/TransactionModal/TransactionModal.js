import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { v4 as uuidv4 } from "uuid";
import TextInput from "@/components/Inputs/TextInput";
import Modal from "../Modal";
import BaseTitle from "@/components/shared/BaseTitle";
import CheckBox from "@/components/Inputs/CheckBox";
import "./TransactionModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction, getTransaction } from "@/store/TransactionSlice";

const options = [
  { value: "Credit Card", label: "Credit Card" },
  { value: "Checking", label: "Checking" },
  { value: "Savings", label: "Savings" },
  { value: "Investment", label: "Investment" },
  { value: "Loan", label: "Loan" },
];

const TransactionModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [transaction, setTransaction] = useState({
    item: "",
    shopName: "",
    date: null,
    paymentMethod: "",
    amount: "",
    revenue: false,
    expenses: false,
  });

  const create = e => {
    e.preventDefault();
    const newTransaction = { ...transaction, id: uuidv4(), userId: user.id };
    dispatch(createTransaction(newTransaction));
    dispatch(getTransaction(user.id));
    onClose();
    setTransaction({
      item: "",
      shopName: "",
      date: null,
      paymentMethod: "",
      amount: "",
      revenue: false,
      expenses: false,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="transaction-modal"
    >
      <BaseTitle
        text={"Create Transaction"}
        fontSize={"22"}
      />

      <form
        className="transaction-modal__form"
        onSubmit={create}
      >
        <div className="input-wrapper">
          <label htmlFor="">Item</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, item: value });
            }}
            value={transaction.item}
            placeholder="Enter item name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Shop Name</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, shopName: value });
            }}
            value={transaction.shopName}
            placeholder="Enter Shop Name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Date</label>
          <DatePicker
            onChange={value => {
              setTransaction({ ...transaction, date: value });
            }}
            value={transaction.date}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Payment Method</label>
          <Select
            options={options}
            onChange={item => {
              setTransaction({ ...transaction, paymentMethod: item.value });
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Amount</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setTransaction({ ...transaction, amount: value });
            }}
            value={transaction.amount}
            placeholder="Enter Amount"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Revenue</label>
          <CheckBox
            id={"Revenue"}
            checked={transaction.revenue}
            onChange={({ target: { checked } }) =>
              setTransaction({ ...transaction, revenue: checked })
            }
            text={"Revenue"}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Expenses</label>
          <CheckBox
            id={"Expenses"}
            checked={transaction.expenses}
            onChange={({ target: { checked } }) =>
              setTransaction({ ...transaction, expenses: checked })
            }
            text={"Expenses"}
          />
        </div>
        <br />
        <button className="transaction-modal__button-create">
          Create Transaction
        </button>
      </form>
    </Modal>
  );
};

export default TransactionModal;

import React, { useEffect, useState } from "react";
import TextInput from "../Inputs/TextInput";
import { useDispatch } from "react-redux";
import { updateBalance } from "@/store/BalancesSlice";
import "./AccountDetails.scss";

export const AccountDetails = props => {
  const { balance, editMode, setEditMode, updateBalance } = props;
  const dispatch = useDispatch();
  const [editBalance, setEditBalance] = useState({
    bankName: balance.bankName,
    accountType: balance.accountType,
    balanceAmount: balance.balanceAmount,
    branchName: balance.branchName,
    accountNumber: balance.accountNumber,
  });

  const update = () => {
    const newBalance = { ...editBalance, id: balance.id };
    updateBalance(newBalance);
    setEditMode(false);
  };

  useEffect(() => {});

  return (
    <div className="account-detail">
      <div className="details">
        <div className="top-line">
          <div className="bank-name">
            <div className="bank-name2">Bank Name</div>
            {editMode ? (
              <TextInput
                value={editBalance?.bankName}
                onChange={({ target: { value } }) => {
                  setEditBalance({ ...editBalance, bankName: value });
                }}
              />
            ) : (
              <div className="ab-bank-ltd">{balance.bankName}</div>
            )}
          </div>

          <div className="account-type">
            <div className="account-type2">Account type</div>
            {editMode ? (
              <TextInput
                value={editBalance?.accountType}
                onChange={({ target: { value } }) => {
                  setEditBalance({ ...editBalance, accountType: value });
                }}
              />
            ) : (
              <div className="checking">{balance.accountType}</div>
            )}
          </div>

          <div className="balance">
            <div className="balance2">Balance</div>
            {editMode ? (
              <TextInput
                value={editBalance?.balanceAmount}
                onChange={({ target: { value } }) => {
                  setEditBalance({ ...editBalance, balanceAmount: value });
                }}
              />
            ) : (
              <div className="_25-056-00">{balance.balanceAmount}</div>
            )}
          </div>
        </div>

        <div className="bottom-line">
          <div className="branch-name">
            <div className="branch-name2">Branch Name</div>
            {editMode ? (
              <TextInput
                value={editBalance?.branchName}
                onChange={({ target: { value } }) => {
                  setEditBalance({ ...editBalance, branchName: value });
                }}
              />
            ) : (
              <div className="park-street-branch">{balance.branchName}</div>
            )}
          </div>

          <div className="account-number">
            <div className="account-number2">Account Number</div>
            {editMode ? (
              <TextInput
                value={editBalance?.accountNumber || ""}
                onChange={({ target: { value } }) => {
                  setEditBalance({ ...editBalance, accountNumber: value });
                }}
              />
            ) : (
              <div className="_133-456-886-8">{balance.accountNumber}</div>
            )}
          </div>
        </div>
      </div>

      <div className="button">
        <div className="button-big">
          {!editMode ? (
            <div
              className="add-accounts"
              onClick={() => setEditMode(true)}
            >
              Edit Details
            </div>
          ) : (
            <div
              className="add-accounts"
              onClick={update}
            >
              Update
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

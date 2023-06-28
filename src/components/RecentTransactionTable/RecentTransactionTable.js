import React from "react";
import SVG from "react-inlinesvg";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "@/components/Table";
import currencyFormatter from "@/helpers/currencyFormater";
import dateFormater from "@/helpers/dateFormater";
import GameIcon from "@/assets/Icons/HouseIcon.svg";

const RecentTransactionTable = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <Tr>
          <Th>Items</Th>
          <Th>Shop name</Th>
          <Th>Date</Th>
          <Th>Payment Method</Th>
          <Th>Amount</Th>
        </Tr>
      </TableHeader>
      <TableBody>
        {transactions &&
          transactions.map(t => {
            return (
              <Tr key={t.id}>
                <Td>
                  <SVG src={GameIcon} />
                  {t.item}
                </Td>
                <Td>{t.shopName}</Td>
                <Td>{dateFormater(t.date)}</Td>
                <Td>{t.paymentMethod}</Td>
                <Td>{currencyFormatter(t.amount)}</Td>
              </Tr>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default RecentTransactionTable;

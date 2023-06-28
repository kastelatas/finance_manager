import React from "react";
import { Table, TableHeader, Tr, Th, TableBody, Td } from "@/components/Table";
import "./TransactionHistoryTable.scss";

const TransactionHistoryTable = () => {
  return (
    <Table className="transactionHistoryTable">
      <TableHeader>
        <Tr>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Transaction Type</Th>
          <Th>Receipt</Th>
          <Th>Amount</Th>
        </Tr>
      </TableHeader>
      <TableBody>
        <Tr>
          <Td>17 Apr, 2023</Td>
          <Td>Complete</Td>
          <Td>Credit</Td>
          <Td>8C52d5DKDJ5</Td>
          <Td>$160.00</Td>
        </Tr>
      </TableBody>
    </Table>
  );
};

export default TransactionHistoryTable;

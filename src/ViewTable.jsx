import React from "react";
import propTypes from "prop-types";
// import Form from "./Components/Form"
export const ViewTable = ({ transactions }) => {
  return (
    <table className="w-full text-sm text-center text-gray-500">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ViewTable.propTypes = {
  transactions: propTypes.array,
};

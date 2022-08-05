
import React from 'react';
import PropTypes from "prop-types";
import styles from './Transaction.module.css';

const TransactionHistory = ({items}) => {

    return(
<table  className={styles.transactionHistory}>
  <thead>
    <tr>
    <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  
  {items.map(item => (
    <tbody key={item.id}>
    <tr>
    <td>{item.type}</td>
    <td >{item.amount}</td>
    <td>{item.currency}</td>
  </tr>
  </tbody>
      ))}
</table>
    )

}
export default TransactionHistory;

TransactionHistory.propTypes = {  
    items: PropTypes.array.isRequired
  };

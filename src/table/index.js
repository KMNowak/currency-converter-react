import React from 'react';
import "./style.css";

const Table = ({hideTable}) => (
  <div className={`main__tableContainer ${hideTable ? "" : "main__tableContainer--hidden"}`}>
    <table className="exchangeTable">
      <caption className="exchangeTable__caption">Kursy stosowane w naszym kantorze</caption>

      <thead>
        <tr>
          <th scope="col"></th>
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">PLN</th>
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">EUR</th>
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">GBP</th>
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">USD</th>
        </tr>
      </thead>
      <tbody>
        <tr className="exchangeTable__row">
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="row">PLN</th>
          <td className="exchangeTable__cell">1</td>
          <td className="exchangeTable__cell">0.2245</td>
          <td className="exchangeTable__cell">0.2018</td>
          <td className="exchangeTable__cell">0.2526</td>
        </tr>
        <tr className="exchangeTable__row">
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="row">EUR</th>
          <td className="exchangeTable__cell">4.4534</td>
          <td className="exchangeTable__cell">1</td>
          <td className="exchangeTable__cell">0.8988</td>
          <td className="exchangeTable__cell">1.1249</td>
        </tr>
        <tr className="exchangeTable__row">
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="row">GBP</th>
          <td className="exchangeTable__cell">4.9551</td>
          <td className="exchangeTable__cell">1.1127</td>
          <td className="exchangeTable__cell">1</td>
          <td className="exchangeTable__cell">1.2516</td>
        </tr>
        <tr className="exchangeTable__row">
          <th className="exchangeTable__cell exchangeTable__cell--header" scope="row">USD</th>
          <td className="exchangeTable__cell">3.9589</td>
          <td className="exchangeTable__cell">0.8890</td>
          <td className="exchangeTable__cell">0.7990</td>
          <td className="exchangeTable__cell">1</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Table;
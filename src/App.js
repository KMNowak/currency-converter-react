import React from 'react';

function App() {
  return (
    <div>
      <main className="main">
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Internetowy Kantor</legend>
            <p className="form__paragraph form__paragraph--instruction"> Pola, które oznaczone zostały "*" są wymagane.
                </p>
            <label className="form__label">Podaj kwotę, którą dysponujesz *:
                    <input className="form__input" type="number" step="0.01" min="0.01" placeholder="Tutaj wpisz kwotę" required />
            </label>
            <label className="form__label">Wybierz walutę, którą posiadasz:
                    <select className="form__select" name="currency">
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="PLN" selected>PLN</option>
                <option value="USD">USD</option>
              </select>
            </label>
            <label className="form__label">Wybierz walutę, którą chcesz zakupić:
                    <select className="form__select" name="currency">
                <option value="EUR" selected>EUR</option>
                <option value="GBP">GBP</option>
                <option value="PLN">PLN</option>
                <option value="USD">USD</option>
              </select>
            </label>
            <p className="form__paragraph"></p>

            <button className="button">Przelicz</button>
          </fieldset>
        </form>
        <div className="main__tableContainer">
          <table className="exchangeTable">
            <caption className="exchangeTable__caption">Kursy stosowane w naszym kantorze</caption>
            <tr>
              <th scope="col"></th>
              <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">PLN</th>
              <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">EUR</th>
              <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">GBP</th>
              <th className="exchangeTable__cell exchangeTable__cell--header" scope="col">USD</th>
            </tr>
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
          </table>
        </div>
        <button className="button">Ukryj tabelę z kursami wymiany</button>
        <button className="button">Zmień tło</button>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Table from "./table";

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
        <Table>
        </Table>
        <button className="button">Ukryj tabelę z kursami wymiany</button>
        <button className="button">Zmień tło</button>
      </main>
    </div>
  );
}

export default App;

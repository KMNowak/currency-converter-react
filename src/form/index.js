import React from 'react';
import "./style.css"


const Form = ({ amount, yourCurrency, finalCurrency, onInputChange, onSelectYourCurrencyChange, onSelectFinalCurrencyChange, exchangeToFinalCurrency }) => {

  const final = exchangeToFinalCurrency();

  const onFormSubmit = (event) => {
    event.preventDefault();
    exchangeToFinalCurrency()
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Internetowy Kantor</legend>
        <p className="form__paragraph form__paragraph--instruction"> Pola, które oznaczone zostały "*" są wymagane.
        </p>
        <label className="form__label">Podaj kwotę, którą dysponujesz *:
            <input onChange={onInputChange} className="form__input" type="number" step="0.01" min="0.01" placeholder="Tutaj wpisz kwotę" value={amount} />
        </label>
        <label className="form__label">Wybierz walutę, którą posiadasz:
            <select onChange={onSelectYourCurrencyChange} className="form__select" value={yourCurrency}>
            <option>Wybierz walutę</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>PLN</option>
            <option>USD</option>
          </select>
        </label>
        <label className="form__label">Wybierz walutę, którą chcesz zakupić:
            <select onChange={onSelectFinalCurrencyChange} className="form__select" name="currency" value={finalCurrency}>
            <option>Wybierz walutę</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>PLN</option>
            <option>USD</option>
          </select>
        </label>
        <p className="form__paragraph form__paragraph--result">
          Wynik:
         <span className={`${final ? "form__paragraph--showResult" : ""}`}>
            {final ? `Za ${amount} ${yourCurrency} kupisz u nas ${final.toFixed(2)} ${finalCurrency}` : ""}
          </span>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
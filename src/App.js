import React from 'react';
import Table from "./table";
import Form from "./form";

function App() {
  return (
    <div>
      <main className="main">
        <Form></Form>
        <Table></Table>
        <button className="button">Ukryj tabelę z kursami wymiany</button>
        <button className="button">Zmień tło</button>
      </main>
    </div>
  );
}

export default App;

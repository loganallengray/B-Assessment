import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import logo from './logo.svg';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import './App.css';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import BudgetsGrid from './app/components/BudgetsGrid';
import CollateralsGrid from './app/components/CollateralsGrid';
import LoansGrid from './app/components/LoansGrid';

const App = () => {
  return (
    <>
      <BudgetsGrid />
      <CollateralsGrid />
      <LoansGrid />
    </>
  );
};

export default App;

/*
  PROBLEM:
  1. Create a react-typescript code base using Built Core Technologies
    a. Core Technologies
      i. Typescript (Built uses 3.7.2)
      ii. React
      iii. Redux
      iv. Jest
      v. ag-grid (https://www.npmjs.com/package/ag-grid-community)
    b. Acceptance Criteria:
      i. Setup & bootstrap a Redux store to your example application with 3 primary
      reducers (the actual models don’t matter too much, improvise - will want to see
      some critical thinking)
        1. Loans
        2. Budgets
        3. Collateral
      ii. Create a class component & connect data from 1 or more reducers to the
      component
      iii. Create a functional component & connect data from 1 more reducers to the
      component
      iv. In one of the components connect data from the store to your ag-grid
      implementation & demonstrate editing on the grid to update the Redux store.
      v. An example of testing components using Jest
      vi. Show us how you use Typescript
*/

/*
  PLAN:
  a: install all necessary frameworks
  b:
    i: Create store and slicers that make reducers to put into store, use typescript interfaces for the object models
    ii. Need to study class components.
    iii. Create Budgets component, connect budget reducer to it.
    iv. Use ag-grid to display information in each component
    v. Need to Study Jest
    vi. Use typescript in all the previous steps
*/

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }

// export default App;

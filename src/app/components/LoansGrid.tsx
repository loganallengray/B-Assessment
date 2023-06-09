import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoans } from '../models/loansSlice';

const LoansGrid = () => {
    const [rowData] = useState(useAppSelector(selectLoans));
    console.log(rowData);

    const [columnDefs] = useState([
        { field: 'id' },
        { field: 'paidOff' },
        { field: 'amount' },
        { field: 'budgetId' },
        { field: 'collateralId' },
    ])

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

export default LoansGrid;
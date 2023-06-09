import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectBudgets } from '../models/budgetsSlice';


const BudgetsGrid = () => {
    const [rowData] = useState(useAppSelector(selectBudgets));

    const [columnDefs] = useState([
        { field: 'id' },
        { field: 'name' },
        { field: 'limit' },
        { field: 'currentAmount' },
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

export default BudgetsGrid;
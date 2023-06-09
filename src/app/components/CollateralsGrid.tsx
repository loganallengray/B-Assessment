import React, { useState, useRef, useEffect, useMemo, useCallback, Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCollaterals } from '../models/collateralsSlice';
import { ICollateral } from '../models/interfaces';

class CollateralsGrid extends Component<{}, { rowData: ICollateral[], columnDefs: object[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            rowData: useAppSelector(selectCollaterals),
            columnDefs: [
                { field: 'id' },
                { field: 'name' },
                { field: 'worth' },
                { field: 'description' },
            ],
        }
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
                <AgGridReact
                    rowData={this.state.rowData}
                    columnDefs={this.state.columnDefs}>
                </AgGridReact>
            </div >
        );
    }
}

export default CollateralsGrid;

// ** How I would do it normally **
//
// const CollateralsGrid = () => {
//     const [rowData] = useState(useAppSelector(selectCollaterals));

//     const [columnDefs] = useState([
//         { field: 'id' },
//         { field: 'name' },
//         { field: 'worth' },
//         { field: 'description' },
//     ])

//     return (
//         <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
//             <AgGridReact
//                 rowData={rowData}
//                 columnDefs={columnDefs}>
//             </AgGridReact>
//         </div>
//     );
// };
//
// export default CollateralsGrid;

/* 
    Budgets: ID, Name, Limit, CurrentAmount
    Collateral: ID, Name, Worth, Description
    Loan: ID, PaidOff, Amount, BudgetID, CollateralID

    Budgets are projects that people are doing,
    Collaterals are what they can offer up in order to get loans,
    Loans are used to supply funds to budgets that go over their set limit, and require collateral
*/

export interface ILoan {
    id: number;
    paidOff: boolean;
    amount: number;
    budgetId: number;
    collateralId: number;
}

export interface IBudget {
    id: number;
    name: string;
    limit: number;
    currentAmount: number;
}

export interface ICollateral {
    id: number;
    name: string;
    worth: number;
    description: string;
}
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filterdYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(el => {
    return el.date.getFullYear().toString() === filterdYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;

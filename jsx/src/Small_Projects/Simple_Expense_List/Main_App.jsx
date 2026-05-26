import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './expense.css'

export default function Expense() { //Make a parent components
    const [expenses, setExpenses] = useState([])    //useState for expenses array that will be rendered in the list.
    const [input, setInput] = useState("")          //useState for input field that will be rendered in the list.
    const [amount, setAmount] = useState("")        //useState for amount field that will be rendered in the list.

    function addExpense() {     //Function to add the expense.
        if (input === '' || amount === '') return;  //this is empty check if the input or amount is empty.

        setExpenses(prev => [...prev,   //This is using the spread syntax to add the new expense to the existing expenses.
        {
            id: Date.now(), //Creates a unique ID for the expense based on the current time.
            text: input,    //Stores the expense text.
            amount: Number(amount)  //Stores the expense amount as a number.
        }
        ])

        setInput("")      //Clear the input field.
        setAmount("")     //Clear the amount field.
    }

    function deleteExpenses(id) {
        setExpenses(prev => prev.filter(item => item.id !== id))    //This is using the filter method to remove the expense with the matching ID.
        //The logic here is when you delete id 2 this item.id !== id will compare so if item.id and id is not equal it will keep the item. and if it is equal it will remove the item.
    }

    const total = expenses.reduce((sum, item) => sum + item.amount, 0)

    return (
        <div className="expense-container">
            <h1 className="expense-title">Simple Expense List</h1>

            <div className="expense-form">
                <input
                    className="expense-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Category'
                />
                <input
                    className="expense-input"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder='Amount'
                    type="number"
                />
                <button className="expense-add-btn" onClick={addExpense}>
                    Add
                </button>
            </div>

            {/* Total Section */}
            {expenses.length > 0 && (
                <div className="expense-total">
                    <span className="expense-total-label">Total</span>
                    <span className="expense-total-value">P{total.toLocaleString()}</span>
                </div>
            )}

            {/* Expenses List */}
            {expenses.length === 0 ? (
                <p className="expense-empty">No expenses yet - add one above!</p>
            ) : (
                <ul className="expense-list">
                    {expenses.map(item => (  //item is just a PARAMETER VARIABLE. We can name it anything.
                        <ExpenseItem
                            key={item.id}
                            item={item}
                            deleteExpenses={deleteExpenses}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

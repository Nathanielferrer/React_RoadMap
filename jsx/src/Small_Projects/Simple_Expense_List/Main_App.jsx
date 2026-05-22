import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './expense.css'

export default function Expense() {
    const [expenses, setExpenses] = useState([])
    const [input, setInput] = useState("")
    const [amount, setAmount] = useState("")

    function addExpense() {
        if (input === '' || amount === '') return;

        setExpenses(prev => [...prev,
        {
            id: Date.now(),
            text: input,
            amount: Number(amount)
        }
        ])

        setInput("")
        setAmount("")
    }

    function deleteExpenses(id) {
        setExpenses(prev => prev.filter(item => item.id !== id))
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

            {expenses.length > 0 && (
                <div className="expense-total">
                    <span className="expense-total-label">Total</span>
                    <span className="expense-total-value">P{total.toLocaleString()}</span>
                </div>
            )}

            {expenses.length === 0 ? (
                <p className="expense-empty">No expenses yet - add one above!</p>
            ) : (
                <ul className="expense-list">
                    {expenses.map(item => (
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

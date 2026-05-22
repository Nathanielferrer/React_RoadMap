export default function ExpenseItem({ item, deleteExpenses }) {
    return (
        <li className="expense-item">
            <div className="expense-item-info">
                <span className="expense-item-category">{item.text}</span>
                <span className="expense-item-dot"></span>
                <span className="expense-item-amount">P{item.amount.toLocaleString()}</span>
            </div>
            <button className="expense-delete-btn" onClick={() => deleteExpenses(item.id)}>
                Delete
            </button>
        </li>
    )
}

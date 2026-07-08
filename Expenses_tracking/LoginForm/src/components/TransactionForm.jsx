import InputField from "./InputField";
import { useState } from "react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({ amount: "", category: "", date: "", type: "expense" })

  function handleChange(e) {
    setFormData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (formData.amount === "" || formData.date === "" || formData.category === "") return;

    const newTransaction = {
      ...formData,
      id: Date.now(),
    };

    addTransaction(newTransaction);

    setFormData({
      amount: "",
      category: "",
      date: "",
      type: "expense"
    });


  }

  return (
    <form className="transaction-form" onClick={handleSubmit}>
      <h3>Add New Transaction</h3>
      <InputField
        label="amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <InputField
        label="Category"
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <InputField
        label="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <RadioGroup
        label="Type"
        name="type"
        value={formData.type}
        options={["income", "expense"]}
        onChange={handleChange}
      />


      <button type="submit" >Add Transacition</button>
    </form>
  );
}

import InputField from "./InputField";
import { useState } from "react";
import { useTransactionStore } from "../store/transactionStore";
import RadioGroup from "./RadioGroup";

export default function TransactionForm() {
  const [formData, setFormData] = useState({ amount: "", category: "", date: "", type: "expense" }) //Make a state that will store the form data.
  const addTransaction = useTransactionStore(state => state.addTransaction) //This is different than usual useState if we are using zustand (The state is what is all inside the zustand)
  //So the logic here is go through all the state and get only the value of state.addTransaction

  function handleChange(e) { //Function that will handle the state change on the Input Field.
    setFormData(prev => ({  //This will update the previous state with a new value. (prev is the previous state that is stored at that moment)
      ...prev, [e.target.name]: e.target.value //Targeting the input field using e.target.name
    }));
  }

  function handleSubmit(e) { //Function that will handle the form submission.
    e.preventDefault()  //Prevents the page from refreshing when the form is submitted.

    if (formData.amount === "" || formData.date === "" || formData.category === "") return;

    const newTransaction = {  //So this is where the transaction object stored to remember the data
      ...formData,  //This will get the previous values from the form data
      id: Date.now(), //This will give a unique ID to the new transaction
    };

    addTransaction(newTransaction);  //This will add the new transaction to the state

    setFormData({ //This will clear the form data after submission
      amount: "",
      category: "",
      date: "",
      type: "expense"
    });


  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <InputField   //This a custom InputField component to reuse the same code 
        label="amount"  //This is all the props that the InputField component needs, Label is the text that will be displayed next to the input field
        type="number" //This is the type of the input field (number, text, date, password, etc.)
        name="amount" //This is the name of the input field (this is used to identify the input field)
        value={formData.amount} //This is the value of the input field (this is the data that will be stored in the input field)
        onChange={handleChange} //This is the function that will handle the state change on the Input Field.
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

import React, { useState } from 'react';
import UI from "./Components/UserInput";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [value, setValue] = useState("");
  const [anotherValue, setAnotherValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const changeOfValue = (e) => {
    setValue(e.target.value);
  }

  const changeOfAnotherValue = (e) => {
    setAnotherValue(e.target.value);
  }

  const addItem = () => {
    setItems(previousItems => [...previousItems, { value, anotherValue }]);
    setValue("");
    setAnotherValue("");
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    const itemToEdit = items[index];
    setValue(itemToEdit.value);
    setAnotherValue(itemToEdit.anotherValue);
  }

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = { value, anotherValue };
      setItems(updatedItems);
      setEditIndex(null);
      setValue("");
      setAnotherValue("");
    }
  }

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure to delete?");
    if (isConfirmed) {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    }
  }

  return (
    <>
      <h1>To Do List</h1>
      <input type="text" value={value} placeholder="Enter an Item" onChange={changeOfValue} />
      <input type="text" value={anotherValue} placeholder="Enter Description" onChange={changeOfAnotherValue} />
      <button onClick={addItem}>Add Item</button>
      <UI values={items} onEdit={handleEdit} onDelete={handleDelete} />
      {editIndex !== null && (
        <>
          <button onClick={handleSaveEdit}>Save Edit</button>
          <button onClick={() => setEditIndex(null)}>Cancel Edit</button>
        </>
      )}
    </>
  );
}

export default App;
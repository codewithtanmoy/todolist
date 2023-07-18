import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const userInput = (props) => {
  const handleEdit = (index) => {
    props.onEdit(index);
  };

  const handleDelete = (index) => {
    props.onDelete(index);
  };

  return (
    <>
      <br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.values.map((item, index) => (
            <tr key={index}>
              <td>{item.value}</td>
              <td>{item.anotherValue}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(index)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default userInput;

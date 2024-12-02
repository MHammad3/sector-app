import React from "react";
import "../style/table.css";

function Table({ users, setUsers }) {
  // Function to handle delete action
  const handleDelete = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  return (
    <>
      {users && users.length > 0 ? (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Gender</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>{item.gender}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => handleDelete(index)} // Call handleDelete with the user's id
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No data available</h1>
      )}
    </>
  );
}

export default Table;

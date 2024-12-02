import React from "react";
import "../style/table.css";

function Table({ users, setUsers, setUpdateUser }) {
  // Function to handle delete action
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (id) => {
    const getUserInfo = users.find((user) => user.id === id);
    setUpdateUser(getUserInfo);
  };

  return (
    <>
      {users.length > 0 ? (
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
                  <td className="buttons">
                    <button
                      className="button"
                      onClick={() => handleDelete(item.id)} // Call handleDelete with the user's id
                    >
                      Delete
                    </button>
                    <button
                      className="button"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
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

import { useState } from "react";
import "./App.css";
import Form from "./page/Form";
import Table from "./page/Table";
function App() {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);

  return (
    <>
      <Form
        setUsers={setUsers}
        users={users}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
      />
      <Table users={users} setUsers={setUsers} setUpdateUser={setUpdateUser} />
    </>
  );
}

export default App;

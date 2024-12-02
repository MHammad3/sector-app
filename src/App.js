import { useState } from "react";
import "./App.css";
import Form from "./page/Form";
import Table from "./page/Table";
function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Form setUsers={setUsers} users={users} />
      <Table users={users} setUsers={setUsers} />
    </>
  );
}

export default App;

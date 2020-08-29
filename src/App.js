import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidV4 } from "uuid";
import AddUserForm from "./components/AddUserForm";

function App() {
  const userData = [
    { id: uuidV4(), name: "Tania", username: "floppy" },
    { id: uuidV4(), name: "Marcos", username: "crappy" },
    { id: uuidV4(), name: "Luis", username: "beny" },
  ];

  //state
  const [users, setUser] = useState(userData);
  const [editEnable, setEditEnable] = useState([]);

  //agregar usuario
  const addUser = (user) => {
    user.id = uuidV4();
    setUser([...users, user]);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((elem) => elem.id !== id);
    setUser(newUsers);
  };

  const editUser = (user) => {
    const newUsers = users.filter((elem) => elem.id !== user.id);
    newUsers.push(user);
    setUser(newUsers);
    setEditEnable([]);
  };

  const editHandler = (user) => {
    setEditEnable([true, user.id]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm
            editUser={editUser}
            editEnable={editEnable}
            addUser={addUser}
          ></AddUserForm>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            editHandler={editHandler}
            deleteUser={deleteUser}
            users={users}
          ></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;

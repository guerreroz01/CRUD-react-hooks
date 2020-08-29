import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import axios from "axios";

function App() {
  //state
  const [users, setUser] = useState([]);
  const [editEnable, setEditEnable] = useState([]);

  //componentDidMount con hook primera llamada a la base de datos antes de montar el componente
  useEffect(() => {
    (async function () {
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/api",
        responseType: "json",
      });
      setUser(res.data);
    })();
  }, []);

  //agregar usuario
  const addUser = async (user) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/api",
      data: user,
    });
    setUser(res.data);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/${id}`);
    setUser(res.data);
  };

  const editUser = async (user) => {
    const res = await axios.put(`http://localhost:5000/api/${user._id}`, user);
    setUser(res.data);
  };

  const editHandler = (user) => {
    setEditEnable([true, user._id]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks and MongoDB</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>{editEnable[0] ? "Edit user" : "Add user"}</h2>
          <AddUserForm
            setEditEnable={setEditEnable}
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
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "200px",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "lighter",
          }}
        >
          Created by Oliver Reyes{" "}
          <span style={{ fontWeight: "bold" }}>
            email: oliver.dentistry@gmail.com
          </span>
        </h3>
      </div>
    </div>
  );
}

export default App;

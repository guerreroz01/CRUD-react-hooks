import React from "react";
import { v4 as uuidV4 } from "uuid";

function UserTable(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.name}</td>
                  <td>{elem.username}</td>
                  <td>
                    <button className="button muted-button">Edit</button>
                    <button
                      onClick={() => {
                        props.deleteUser(elem.id);
                      }}
                      className="button muted-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>No Users</tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;

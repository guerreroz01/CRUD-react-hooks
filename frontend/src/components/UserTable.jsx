import React from "react";

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
                <tr key={elem._id}>
                  <td>{elem.name}</td>
                  <td>{elem.username}</td>
                  <td>
                    <button
                      onClick={() => props.editHandler(elem)}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        props.deleteUser(elem._id);
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
            <tr>
              <th>No Users</th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;

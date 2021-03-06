import React from "react";
import { useForm } from "react-hook-form";

function AddUserForm(props) {
  const { addUser, editEnable, editUser, setEditEnable } = props;
  const { register, errors, handleSubmit } = useForm();

  const requiredColor = (error) => {
    if (error.name) {
      const $name = document.getElementById("name");
      $name.setAttribute("placeholder", error.name.message);
      $name.style.borderColor = "red";
      setTimeout(() => {
        $name.setAttribute("placeholder", "name");
        $name.style.borderColor = "blue";
      }, 3000);
    }
    if (error.username) {
      const $username = document.getElementById("username");
      $username.setAttribute("placeholder", error.username.message);
      $username.style.borderColor = "red";
      setTimeout(() => {
        $username.setAttribute("placeholder", "username");
        $username.style.borderColor = "blue";
      }, 3000);
    }
  };

  const editUserHandler = (data, e) => {
    e.preventDefault();
    e.target.reset();

    data._id = editEnable[1];
    editUser(data);
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.reset();

    addUser(data);
  };

  return (
    <>
      <form
        onSubmit={
          editEnable.length
            ? handleSubmit(editUserHandler)
            : handleSubmit(onSubmit)
        }
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Escribe un Nombre"
          name="name"
          id="name"
          ref={register({
            required: {
              value: true,
              message: "campo requerido",
            },
          })}
        />
        {errors.name && requiredColor(errors)}
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Escribe un Username"
          id="username"
          ref={register({
            required: {
              value: true,
              message: "campo requerido",
            },
          })}
        />
        {errors.username && requiredColor(errors)}
        <button>{editEnable.length ? "Edit user" : "Add new user"}</button>
        {editEnable.length > 0 && (
          <button
            style={{ marginLeft: "2rem" }}
            onClick={() => setEditEnable([])}
          >
            Go Back
          </button>
        )}
      </form>
    </>
  );
}

export default AddUserForm;

import React from "react";
import { useForm } from "react-hook-form";

function AddUserForm(props) {
  const { register, errors, handleSubmit } = useForm();

  const { addUser } = props;

  const onSubmit = (data, e) => {
    //prevenir el envio del form
    e.preventDefault();
    //resetear los campos
    e.target.reset();

    addUser(data);
  };

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
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
          placeholder="username"
          id="username"
          ref={register({
            required: {
              value: true,
              message: "campo requerido",
            },
          })}
        />
        {errors.username && requiredColor(errors)}
        <button>Add new user</button>
      </form>
    </>
  );
}

export default AddUserForm;

import React, { useState } from "react";
import UserCrudApp from "./UserCrud";

const generateId = () => `user-${Date.now().toString(36)}`;

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    id: null,
  });
  const [listOfUsers, setListOfUsers] = useState([]);

  function handleChange(e) {
    // console.log("Name of Field > ", e.target.name); ====== can check the name of field ======
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.name || !user.age || !user.email || !user.city) return;

    if (user.id) {
      setListOfUsers(
        listOfUsers.map((u) => (u.id === user.id ? { ...user } : u))
      );
    } else {
      setListOfUsers([...listOfUsers, { ...user, id: generateId() }]);
    }
    setUser({ name: "", email: "", age: "", city: "" });
  }

  function deleteUser(id) {
    setListOfUsers(listOfUsers.filter((user) => user.id !== id));
  }

  function handleEdit(id) {
    setUser(listOfUsers.find((u) => u.id === id));
  }

  return (
    <>
      <div>
        <h2>Form will coming soon</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex border-2 border-gray-200 justify-around items-center w-1/3 m-4 rounded-lg">
            <div className="m-4 px-4 py-2 rounded-lg flex flex-col justify-betweem items-start gap-2">
              <label>Name</label>
              <input
                className="border-2 border-gray-300 rounded-sm px-2 py-1 focus:outline-gray-600"
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter your full Name"
                onChange={handleChange}
              />

              <label>Age</label>
              <input
                className="border-2 border-gray-300 rounded-sm px-2 py-1 focus:outline-gray-600"
                type="text"
                name="age"
                value={user.age}
                placeholder="Enter your Age"
                onChange={handleChange}
              />
            </div>
            <div className="m-4 px-4 py-2 rounded-lg flex flex-col justify-betweem items-start gap-2">
              <label>Email</label>
              <input
                className="border-2 border-gray-300 rounded-sm px-2 py-1 focus:outline-gray-600"
                type="text"
                name="email"
                value={user.email}
                placeholder="Enter your Email"
                onChange={handleChange}
              />

              <label>City</label>
              <input
                className="border-2 border-gray-300 rounded-sm px-2 py-1 focus:outline-gray-600"
                type="text"
                name="city"
                value={user.city}
                placeholder="Your current city"
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 m-4 rounded cursor-pointer hover:bg-sky-700"
          />
        </form>

        <h3>The name you entered - {user.name}</h3>
        <h3>Your age - {user.age}</h3>

        {/* NavBar */}

        <div className="border-t border-gray-300 my-4" />

        {/* <UserCrudApp /> */}

        <h3>Here are the users</h3>
        <div className="flex flex-wrap items-center justify-center">
          {listOfUsers.map((user, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 p-4 m-3 list-none w-1/3 rounded-lg bg-gray-200"
            >
              <li>{user.name}</li>
              <li>ID - {user.id}</li>
              <li>Email - {user.email}</li>
              <li>Age - {user.age}</li>
              <li>City - {user.city}</li>
              <button
                className="border-2 border-gray-200 p-1 mt-2 cursor-pointer rounded-md bg-red-500 text-white w-20"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <button
                className="border-2 border-gray-200 ml-2 p-1 cursor-pointer rounded-md bg-blue-300 w-15"
                onClick={() => handleEdit(user.id)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;

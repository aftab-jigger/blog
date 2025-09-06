import React, { useState } from "react";
import UserCrudApp from "./UserCrud";

const Form = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  const [listOfUsers, setListOfUsers] = useState([]);

  function handleChange(e) {
    // console.log("Name of Field > ", e.target.name); ====== can check the name of field ======
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setListOfUsers([...listOfUsers, user]);
    setUser({ name: "", age: "" });
  }

  function deleteUser(id) {
    setListOfUsers(listOfUsers.filter((user, i) => i !== id));
  }

  return (
    <>
      <div>
        <h2>Form will coming soon</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="border-2 border-gray-200 m-4 px-4 py-2 rounded-lg flex flex-col justify-betweem items-start gap-2">
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

            <input
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-sky-700"
            />
          </div>
        </form>

        <h3>The name you entered - {user.name}</h3>
        <h3>Your age - {user.age}</h3>

        {/* NavBar */}

        <div className="border-t border-gray-300 my-4" />

        {/* <UserCrudApp /> */}

        <div className="flex flex-col items-center">
          <h3>Here are the users</h3>
          {listOfUsers.map((user, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 p-4 m-3 list-none w-50"
            >
              <li>{user.name}</li>
              <li>ID - {index}</li>
              <li>Age - {user.age}</li>
              <button
                className="border-2 border-gray-200 p-1 mt-2 cursor-pointer rounded-md bg-red-500 text-white w-20"
                onClick={() => deleteUser(index)}
              >
                Delete
              </button>
              <button
                className="border-2 border-gray-200 ml-2 p-1 cursor-pointer rounded-md bg-blue-300 w-15"
                onClick={() => console.log("Clicked on Edit Button")}
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

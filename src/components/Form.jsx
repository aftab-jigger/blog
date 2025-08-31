import React, { useState } from "react";
import UserCrudApp from "./UserCrud";

const Form = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  console.log(user.name);

  function handleChange(e) {
    console.log("Event > ", e.target);
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev, // keep other fields unchanged
      [name]: value, // update only the name
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(user.name);
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
      </div>
    </>
  );
};

export default Form;

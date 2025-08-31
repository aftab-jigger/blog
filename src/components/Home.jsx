import React from "react";
import { useState } from "react";
import Popup from "./Popup";

const Home = () => {
  const users = [
    { id: 1, name: "Aftab", age: "30" },
    { id: 2, name: "Ahmed", age: "30" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [usser, setUsser] = useState("");
  return (
    <div>
      <div className="w-1/2 mx-auto p-4 border border-gray-300 rounded-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Friends
        </h2>
        <div className="min-h-60 p-4 border border-green-200 flex justify-between items-start">
          {users.map((user) => (
            <div
              onClick={() => {
                setIsOpen(true);
                setUsser(user);
              }}
              key={user.id}
              className="border-1 border-indigo-500/50 p-3 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 hover:border-2"
            >
              {user.name} ({user.age})
            </div>
          ))}
        </div>
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} user={usser} />
      </div>
    </div>
  );
};

export default Home;

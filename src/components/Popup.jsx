import React from "react";

const Popup = ({ isOpen, setIsOpen, user }) => {
  if (isOpen)
    return (
      <div>
        <div
          className="fixed inset-0 bg-opacity-40 flex justify-center items-center backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-gray-200 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{user.name}</h2>
            <p>Your age is {user.age}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-sky-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Popup;

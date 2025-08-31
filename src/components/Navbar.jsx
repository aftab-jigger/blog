import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-300 text-black rounded-xl ">
        <div className="container mx-auto flex justify-between items-center min-h-24 m-3 p-6">
          <h1 className="text-xl font-bold">MyWebsite</h1>
          <div>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/form" className="mr-4">
              Form
            </Link>
            <a href="#contact" className="mr-4">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Navbar;

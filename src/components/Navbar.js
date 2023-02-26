import React from "react";
import "./Navbar.css";



const Navbar = (props) => {
  return (
    <div class="navbar">
      <div class="navbar-container">
        <a class="navbar-logo" href="/">
          Movie Search
        </a>
        <div class="navbar-search">
          <form action="#" onSubmit={props.handleSubmit}>
            <input type="text" name="search" placeholder="Search" onChange={props.handleChange} />
            <button type="submit" onClick={props.handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

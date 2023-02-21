import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div class="navbar">
  <div class="navbar-container">
    <a class="navbar-logo" href="#">Movie Search</a>
    <div class="navbar-search">
      <form action="#" method="get">
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Navbar
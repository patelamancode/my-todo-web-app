import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <h1>Todo App</h1>
      <div>
        <NavLink to='/todo/done' style={{marginRight:'30px'}}>Done Todo</NavLink>
        <NavLink to='/todo/notdone'>Not-Done Todo</NavLink>
      </div>
    </>
  )
}

export default Navbar

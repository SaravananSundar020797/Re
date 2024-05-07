import React from 'react'
import './Header.css';

export const Header = (props) => {
  return (
    <header className='headerBlock'>
      <div>
        <h1 className='headerLevel_h1 m-0'>
          {props.title}
        </h1>
      </div>
    </header>
  )
}

// Header.defaultProps = {
//   title :"To Do List",
// }

export default Header
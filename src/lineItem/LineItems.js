import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li>
          <div>
            <input type="checkbox" checked ={item.checked} onChange={() => handleCheck(item.id)}/>
            <label  htmlFor="" onDoubleClick={() => handleCheck(item.id)}>{item.item}<span className="levelTag" style = {(item.checked) ? {display : 'flex'} : null }>Completed</span></label>
          </div>
          <button className="deleteBtn" onClick={() => handleDelete(item.id)}>
            <FaRegTrashAlt
              className="deleteSvg"
            />
          </button>
        </li>
  )
}

export default LineItems
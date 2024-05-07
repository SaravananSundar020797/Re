import React from 'react';
import './addItems.css';
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

export const AddItems = ({newItems,setNewItems,handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addItems' onSubmit={(e)=>handleSubmit(e)}>
      <div className='inputGroup'>
        <input autoFocus type="text" ref={inputRef} placeholder = 'Enter items ...' value = {newItems} onChange={(e) => setNewItems(e.target.value)} required />
        <button className='addBtn' type='submit' onClick={() => inputRef.current.focus()}>
          <FaPlus
            className='plusSvg'
          />
        </button>
      </div>
    </form>
  )
}

export default AddItems
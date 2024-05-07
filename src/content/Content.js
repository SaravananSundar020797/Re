import React from "react";
import './Content.css'


import { ListItems } from "../listItems/ListItems";

export const Content = ({items,handleCheck,handleDelete}) => {
 
  return (
    <>
      {(items.length) ?  
      (<ListItems 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete= {handleDelete}
          length = {items.length}
      />) :
      (
      <div className="dangerAlert">
        <p>Your Item List Empty</p>
      </div>
      )
      }
     
    </>
  );
};


export default Content
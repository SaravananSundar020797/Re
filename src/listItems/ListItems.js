import React from 'react'

import LineItems from '../lineItem/LineItems';

export const ListItems = ({items,handleCheck,handleDelete,length}) => {
  return (
    <ul>
        <div className="itemsCount"><span>{length}</span>{length===1?"Item":"Items"}</div>
        {items.map((item) => (
          <LineItems
          item = {item}
          key = {item.id}
          handleCheck = {handleCheck}
          handleDelete= {handleDelete}
          />
        )
        )}
      </ul>
  )
}

export default LineItems
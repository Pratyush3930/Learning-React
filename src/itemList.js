import LineItem from './LineItem';
import React from 'react'

const itemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />

        )
      })}

    </ul>
  )
}

export default itemList
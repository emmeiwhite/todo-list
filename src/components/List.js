import React from 'react'

const iconStyle = { marginRight: '1rem', cursor: 'pointer' }


function List({ name, handleDeleteItem, handleEdit }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-3 shadow-lg">
      <span>
        {name}
      </span>

      <div>
        <span style={iconStyle}><i className="fas fa-pen" onClick={handleEdit}></i></span>
        <span style={iconStyle}><i className="fas fa-archive" onClick={handleDeleteItem}></i></span>
      </div>

    </li>
  )
}

export default List;
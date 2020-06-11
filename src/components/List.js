import React from 'react'

const iconStyle = { marginRight: '1rem', cursor: 'pointer' }


function List({ item }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {item}
      </span>

      <div>
        <span style={iconStyle}><i className="fas fa-pen"></i></span>
        <span style={iconStyle}><i className="fas fa-archive"></i></span>
      </div>

    </li>
  )
}

export default List;
import React from 'react'

const NotsCard = ({note}) => {
  return (
    <div className='border border-blue-900/50 m-3 p-3 rounded'>
          <p>{note.title}</p>
          <p>{note.text}</p>
    </div>
  )
}

export default NotsCard;
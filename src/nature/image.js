import React from 'react'

const Image = ({src}) => {
  return (
    <div style={{display: 'flex', width: 'auto'}}>
      <img
        src={src}
        style={{ width: '150px', height: '150px' }} />
    </div>
  )
}

export default Image
import React from 'react'

function AutoGeneratedImage({username}) {
  const generateName = () => {
    if (username.includes(' ')) {
      username = username.split(' ')

      return username[0].slice(0, 1).toUpperCase() + username[username.length - 1].slice(0, 1).toUpperCase()
    }
    return username.slice(0,2).toUpperCase();
  }

  return (
    <div className="auto-generated-image-container">
      <h2 className="auto-generated-image-name">
      { 
        generateName()
      }
      </h2>
    </div>
  )
}

export default AutoGeneratedImage
import React from 'react'

const NewMessage = (props) => {
  let input 
  return (
    <section id='new-message'>
      <input
        ref={(node) => input = node}
        onKeyPress={(e) => {
          console.log(e.key)
          if (e.key === 'Enter') {
            console.log(e.keyCode)
            props.dispatch(input.value, 'Me')
            input.value = ''
          }
        }
        }
      />
    </section>
  )
}

export default NewMessage
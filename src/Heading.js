import React from 'react'

export const Heading = (props) => {
  return (
    <div>
        <h4>Counter</h4>
        <h1>
            {props.count}
        </h1>
    </div>
  )
}

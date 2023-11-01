/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function App() {
  return (
    <>
      <p>
        Implement this React Component so that the "X" moves, but doesn't fall outside the line
      </p>
      <p>
        Also implement the "moves counter" to keep track of successful moves
      </p>
      <div className='line'>
        <div></div>
        <div></div>
        <div>X</div>
        <div></div>
        <div></div>
      </div>
      <div className='buttons'>
        <button>👈 Move Left</button>
        <button>Move Right 👉</button>
      </div>
      <div className='moves-counter'>
        You moved <span>0</span> times
      </div>
    </>
  )
}

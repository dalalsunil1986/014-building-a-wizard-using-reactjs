import React from 'react'

import './app.css'

export default function App() {
  return (
    <div
      className="page-container"
    >
      <h1>Its a dangerous world! Create a party to stay alive..</h1>
      <div className='flex'>
        <div className='modal-window'>
          <h2>Select your character's class</h2>
          <div className='class-selection'>
            {
              ['archer', 'warrior', 'bard', 'wizard', 'thief', 'cleric'].map(klass => {
                return <div className='class-slot'>
                  <div>{ klass }</div>
                  <img src={`/classes/${klass}.jpg`} width={150} height={150} />
                </div>
              })
            }
          </div>
        </div>
        <div className='character-slots'>
          {
            [1,2,3,4].map(no => {
              return <div className='character-slot'>
                <span>{ no }</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

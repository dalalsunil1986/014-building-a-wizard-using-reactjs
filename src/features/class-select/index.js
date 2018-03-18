import React from 'react'

export default function ClassSelect(props) {
  return <div>
    <h2>Select your character's class</h2>
    <div className='class-selection'>
      {
        ['archer', 'warrior', 'bard', 'wizard', 'thief', 'cleric'].map(klass => {
          return <div
            className='class-slot'
            onClick={() => props.onClassSelect(klass)}
          >
            <div>{ klass }</div>
            <img src={`/classes/${klass}.jpg`} width={150} height={150} />
          </div>
        })
      }
    </div>
  </div>
}
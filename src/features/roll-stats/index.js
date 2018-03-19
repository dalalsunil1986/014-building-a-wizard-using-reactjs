import React from 'react'
import './styles.css'

export default function RollStats(props) {
  return <div>
    <h2>Roll your character's attributes</h2>
    <div className='flex roll-attributes'>
      <div className='attributes'>
        <ul>
          <li>STR: { props.str }</li>
          <li>INT: { props.int }</li>
          <li>WIS: { props.wis }</li>
          <li>DEX: { props.dex }</li>
          <li>CON: { props.con }</li>
          <li>CHA: { props.cha }</li>
        </ul>
      </div>
      <div className='actions'>
        <button
        >Roll</button>
        <button
        >Save</button>
      </div>
    </div>
  </div>
}

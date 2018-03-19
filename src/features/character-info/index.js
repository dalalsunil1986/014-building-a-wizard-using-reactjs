import React from 'react'
import './styles.css'

export default function CharacterInfo(props) {
  return <div>
    <h2>Character info</h2>
    <div className='character-info'>
      <div>
        <label for='charcter-name'>Name</label>
        <input name='charcter-name'
        />
      </div>

      <div>
        <label for='charcter-bio'>Bio</label>
        <textarea name='charcter-bio'
        />
      </div>

      <div className='button'>
        <button
        >Save</button>
      </div>
    </div>
  </div>
}
import React from 'react'
import './styles.css'

export default function CharacterInfo(props) {
  return <div>
    <h2>Character info</h2>
    <div className='character-info'>
      <div>
        <label for='charcter-name'>Name</label>
        <input name='charcter-name'
          value={props.characterName}
          onChange={props.handleNameChange}
        />
      </div>

      <div>
        <label for='charcter-bio'>Bio</label>
        <textarea name='charcter-bio'
          value={props.characterBio}
          onChange={props.handleBioChange}
        />
      </div>

      <div className='button'>
        <button
          onClick={props.handleInfoSave}
        >Save</button>
      </div>
    </div>
  </div>
}
import React from 'react'
import ClassSelect from './features/class-select'
import CharacterInfo from './features/character-info'
import RollStats from './features/roll-stats'

import './app.css'

class App extends React.Component {
  state = {
    currentStep: 'ClassSelect',
  }

  renderCurrentStep() {
    return <div>This section will change based on our current step</div>
  }

  render() {
    return (
      <div
        className="page-container"
      >
        <h1>Its a dangerous world! Create a party to stay alive..</h1>
        <div className='flex'>
          <div className='modal-window'>
            { this.renderCurrentStep() }
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
}

export default App
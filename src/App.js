import React from 'react'
import ClassSelect from './features/class-select'
import CharacterInfo from './features/character-info'
import RollStats from './features/roll-stats'

import initialState from './initial-state'

import './app.css'

class App extends React.Component {
  state = initialState

  renderCurrentStep = () => {
    switch(this.state.currentStep) {
      case 'ClassSelect':
        return <ClassSelect
          handleClassSelection={this.handleClassSelection}
        />
      case 'CharacterInfo':
        return <CharacterInfo
          name={this.state.party[this.state.currentSlot].name}
          handleNameChange={this.handleNameChange}
          bio={this.state.party[this.state.currentSlot].bio}
          handleBioChange={this.handleBioChange}
          handleInfoSave={this.handleInfoSave}
        />
      case 'RollStats':
        return <RollStats
        />
      default:
        alert("Not a valid step!")
    }
  }

  handleClassSelection = (klass) => {
    const party = {...this.state.party}
    const player = party[this.state.currentSlot]
    player.klass = klass
    this.setState({ party, currentStep: 'CharacterInfo' })
  }

  handleNameChange = (e) => {
    const party = {...this.state.party}
    const player = party[this.state.currentSlot]
    player.name = e.target.value
    this.setState({ party })
  }

  handleBioChange = (e) => {
    const party = {...this.state.party}
    const player = party[this.state.currentSlot]
    player.bio = e.target.value
    this.setState({ party })
  }

  handleInfoSave = () => {
    this.handleRoll()
    this.setState({ currentStep: 'RollStats' })
  }

<<<<<<< HEAD
  randomStat = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handleRoll = () => {
    const party = {...this.state.party}
    const player = party[this.state.currentSlot]
    player.attributes = {
      str: this.randomStat(10, 18),
      int: this.randomStat(10, 18),
      wis: this.randomStat(10, 18),
      dex: this.randomStat(10, 18),
      con: this.randomStat(10, 18),
      cha: this.randomStat(10, 18),
    }
    this.setState({ party })
  }

  handleStatsSave = () => {
    if(this.state.currentSlot < 3) {
      this.setState(prevState => ({ currentStep: 'ClassSelect', currentSlot: prevState.currentSlot + 1 }))
    } else {
      this.setState({ currentStep: 'DONE' })
    }
    
  }

=======
>>>>>>> layout only
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
              [0,1,2,3].map(no => {
                return <div className={`character-slot ${this.state.currentSlot === no ? 'highlighted' : ''}`}>
                  <span>{ no+1 }</span>
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
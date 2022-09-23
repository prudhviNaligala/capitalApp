import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  updateCapital = event => {
    this.setState({countryId: event.target.value})
  }

  getCapital = () => {
    const {countryId} = this.state

    const filteredCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === countryId,
    )
    return filteredCountry.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCapital(countryId)
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1>Country And Capitals</h1>
          <div className="capital-container">
            <select
              className="select"
              onChange={this.updateCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

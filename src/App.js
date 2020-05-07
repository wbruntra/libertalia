import React from 'react'
import './App.css'
import cards from './cards.json'

function App() {
  const features = ['Rank', 'Name', 'DAY', 'DUSK', 'NIGHT', 'END OF CAMPAIGN']

  return (
    <div className="container">
      <table className="striped table-responsive">
        <tbody>
          <tr>
            {features.map((feature) => {
              return <th>{feature}</th>
            })}
          </tr>
          {cards.map((card) => {
            return (
              <tr>
                {features.map((feature) => {
                  return <td>{card[feature]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App

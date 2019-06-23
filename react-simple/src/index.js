import React from 'react'
import ReactDOM from 'react-dom'
import Leaderboard from './components/Leaderboard'
import './styles/App.scss'

ReactDOM.render(
  <Leaderboard />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}
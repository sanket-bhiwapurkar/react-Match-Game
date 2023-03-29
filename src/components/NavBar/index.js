import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="scoreboard">
        <li className="nav-item">
          <p className="score-label">Score:</p>
          <p className="score">{score}</p>
        </li>
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="score" style={{margin: '0px'}}>
            {timer} sec
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

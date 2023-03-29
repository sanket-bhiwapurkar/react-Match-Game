import './index.css'

const OverItem = props => {
  const {score, resetGame} = props
  const onReset = () => {
    resetGame()
  }
  return (
    <div className="Over-item-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="title">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button type="button" className="replay-btn" onClick={onReset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        <p style={{margin: '0px'}}>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default OverItem

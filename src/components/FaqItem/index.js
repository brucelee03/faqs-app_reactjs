import './index.css'

const FaqItem = props => {
  const {questionDetails, onToggleQuestion} = props
  const {id, questionText, answerText, answerShowed} = questionDetails

  const onClickToggleBtn = () => {
    onToggleQuestion(id)
  }

  return (
    <li className="question-answer-container">
      <div className="question-card">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onClickToggleBtn}>
          <img
            src={
              answerShowed
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={answerShowed ? 'minus' : 'plus'}
            className="plus-or-minus-icon"
          />
        </button>
      </div>
      {answerShowed && (
        <div className="answer-card">
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem

import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {faqsList: props.faqsList}
  }

  onToggleQuestion = id => {
    const {faqsList} = this.state
    const updatedFaqsList = faqsList.map(eachQuestion => {
      if (eachQuestion.id === id) {
        return {...eachQuestion, answerShowed: !eachQuestion.answerShowed}
      }
      return eachQuestion
    })
    this.setState({faqsList: updatedFaqsList})
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="faqs-container">
        <div className="faqs-card">
          <p className="heading">FAQs</p>
          <ul className="questions-container">
            {faqsList.map(eachQuestion => (
              <FaqItem
                key={eachQuestion.id}
                questionDetails={eachQuestion}
                onToggleQuestion={this.onToggleQuestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

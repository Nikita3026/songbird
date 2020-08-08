import React, {Component} from 'react';
import Header from './components/Header/Header';
import CurrentQuestion from './components/CurrentQuestion/CurrentQuestion';
import BlockOfAnswers from './components/BlockOfAnswers/BlockOfAnswers';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber:0,
      score:0,
      rightAnswer:null,
      isNextLevelButtonActive:false,
      didTheUserAnswer:false
    }

    this.changePageNumber = this.changePageNumber.bind(this);
    this.setRightAnswer = this.setRightAnswer.bind(this);
    this.changeNextLevelButtonActivity = this.changeNextLevelButtonActivity.bind(this);
    this.changeUserAnswerStatus = this.changeUserAnswerStatus.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }

  changePageNumber() {
      const newPageNumber = this.state.currentPageNumber + 1;
      this.setState({
        currentPageNumber: (newPageNumber>5) ? (newPageNumber- 6) : newPageNumber
      });
      this.changeNextLevelButtonActivity();
      this.changeUserAnswerStatus();
  }

  setRightAnswer(randomAnswer) {
    this.setState({
      rightAnswer:randomAnswer
    })
  }

  changeNextLevelButtonActivity() {
    this.setState({
      isNextLevelButtonActive: !this.state.isNextLevelButtonActive
    })
  }

  changeUserAnswerStatus() {
    this.setState({
      didTheUserAnswer: !this.state.didTheUserAnswer
    })
  }

  changeScore(addedPoints) {
    this.setState({
      score: this.state.score + addedPoints
    })
  }

  render(){
    return (
      <div className = "container">
        <Header
          score = {this.state.score}
          currentPageNumber = {this.state.currentPageNumber}
        />
        <CurrentQuestion/>
        <BlockOfAnswers
        currentPageNumber = {this.state.currentPageNumber}
        rightAnswer = {this.state.rightAnswer}
        setRightAnswer = {this.setRightAnswer}
        changeButtonActivity = {this.changeNextLevelButtonActivity}
        didTheUserAnswer = {this.state.didTheUserAnswer}
        changeUserAnswerStatus = {this.changeUserAnswerStatus}
        changeScore = {this.changeScore}
        />
        <NextLevelButton
        handleClick = {this.changePageNumber}
        isButtonActive = {this.state.isNextLevelButtonActive}
        />
      </div>
    );
  }
}

export default App;

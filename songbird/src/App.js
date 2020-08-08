import React, {Component, Fragment} from 'react';
import Header from './components/Header/Header';
import CurrentQuestion from './components/CurrentQuestion/CurrentQuestion';
import BlockOfAnswers from './components/BlockOfAnswers/BlockOfAnswers';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';
import EndNotification from './components/EndNotification/EndNotification';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber:0,
      score:0,
      rightAnswer:null,
      isNextLevelButtonActive:false,
      didTheUserAnswer:false,
      isEndNotificationNeed:false,
      isItNeedToDisableAnswers:false,
    }

    this.changePageNumber = this.changePageNumber.bind(this);
    this.setRightAnswer = this.setRightAnswer.bind(this);
    this.changeNextLevelButtonActivity = this.changeNextLevelButtonActivity.bind(this);
    this.changeUserAnswerStatus = this.changeUserAnswerStatus.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.renderMainBody = this.renderMainBody.bind(this);
    this.changeDisabledStatusOfAnswers = this.changeDisabledStatusOfAnswers.bind(this);
  }

  changePageNumber({target}) {
      const newPageNumber = this.state.currentPageNumber + 1;
      if(newPageNumber <= 5) {
        this.setState({
          currentPageNumber: newPageNumber
        });
        this.changeUserAnswerStatus();
      }
      else this.changeNotificationNeed(true);

      if(target.dataset.key === '1') {
        this.setState({
          currentPageNumber: newPageNumber - 6
        });
        this.changeScore(-this.state.score);
        this.changeNotificationNeed(false);
      } else {
        this.changeNextLevelButtonActivity();
        this.changeDisabledStatusOfAnswers();
      }

  }

  changeNotificationNeed(value) {
    this.setState({
      isEndNotificationNeed: value
    });
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

  changeDisabledStatusOfAnswers() {
    this.setState({
      isItNeedToDisableAnswers: !this.state.isItNeedToDisableAnswers
    })
  }

  renderMainBody () {
    if(this.state.isEndNotificationNeed) {
      return <EndNotification
      score = {this.state.score}
      handleClick = {this.changePageNumber}
      />;
    }
    return (
      <Fragment>
        <CurrentQuestion/>
        <BlockOfAnswers
        currentPageNumber = {this.state.currentPageNumber}
        rightAnswer = {this.state.rightAnswer}
        setRightAnswer = {this.setRightAnswer}
        changeButtonActivity = {this.changeNextLevelButtonActivity}
        didTheUserAnswer = {this.state.didTheUserAnswer}
        changeUserAnswerStatus = {this.changeUserAnswerStatus}
        changeScore = {this.changeScore}
        isItNeedToDisableAnswers = {this.state.isItNeedToDisableAnswers}
        changeDisabledStatusOfAnswers = {this.changeDisabledStatusOfAnswers}
        />
        <NextLevelButton
        handleClick = {this.changePageNumber}
        isButtonActive = {this.state.isNextLevelButtonActive}
        value = "Следующий уровень"
        dataKey = {0}
        />
      </Fragment>)
  }

  render(){
    return (
      <div className = "container">
        <Header
          score = {this.state.score}
          currentPageNumber = {this.state.currentPageNumber}
        />
        <this.renderMainBody/>
      </div>
    );
  }
}

export default App;

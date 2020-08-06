import React, {Component} from 'react';
import Header from './components/Header/Header';
import CurrentQuestion from './components/CurrentQuestion/CurrentQuestion';
import BlockOfAnswers from './components/BlockOfAnswers/BlockOfAnswers';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber:0
    }

    this.changePageNumber = this.changePageNumber.bind(this);
  }

  changePageNumber() {
    const newPageNumber = this.state.currentPageNumber + 1;
    this.setState({
      currentPageNumber: (newPageNumber>5) ? (newPageNumber- 6) : newPageNumber
    });
  }


  render(){
    return (
      <div className = "container">
        <Header/>
        <CurrentQuestion/>
        <BlockOfAnswers currentPageNumber = {this.state.currentPageNumber}/>
        <NextLevelButton handleClick = {this.changePageNumber}/>
      </div>
    );
  }
}

export default App;

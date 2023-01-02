import {Component} from 'react'

import {
  AppContainer,
  HeaderContainer,
  HeaderTitlesContainer,
  HeaderTitles,
  ScoreContainer,
  ScoreText,
  DigitalScore,
  ChoicesContainer,
  ChoiceItemListContainer,
  PlayAgainButton,
  GameResultContainer,
  ResultChoiceItems,
  ParagraphEl,
  ChoiceImageStyles,
  ResultChoiceItemsContainer,
  ResultMessage,
  ChoiceImage,
  ChoiceButtonElement,
} from './styledComponents'

import ReactPopUp from '../ReactPopup'

let resultMessage = ''

class GamingApp extends Component {
  state = {
    score: 0,
    onClickChoiceItem: false,
    ourImageUrl: '',
    opponentImageUrl: '',
  }

  renderUpdates = id => {
    const {choicesList} = this.props
    // const choicesListCopy = [...choicesList]
    // const shuffledChoiceList = choicesListCopy.sort(() => Math.random() - 0.5)

    const indexForOpponentChoice =
      Math.ceil(Math.random() * choicesList.length) - 1

    console.log(
      'Math.random vlaues',
      Math.ceil(Math.random() * choicesList.length) - 1,
    )

    const ourChoiceItem = choicesList.filter(eachChoice => eachChoice.id === id)

    const renderResultMessage = () => {
      if (id === 'ROCK' && choicesList[indexForOpponentChoice].id === 'ROCK') {
        return 'IT IS DRAW'
      }
      if (
        id === 'ROCK' &&
        choicesList[indexForOpponentChoice].id === 'SCISSORS'
      ) {
        return 'YOU WON'
      }
      if (id === 'ROCK' && choicesList[indexForOpponentChoice].id === 'PAPER') {
        return 'YOU LOSE'
      }
      if (
        id === 'SCISSORS' &&
        choicesList[indexForOpponentChoice].id === 'SCISSORS'
      ) {
        return 'IT IS DRAW'
      }
      if (
        id === 'SCISSORS' &&
        choicesList[indexForOpponentChoice].id === 'PAPER'
      ) {
        return 'YOU WON'
      }
      if (
        id === 'SCISSORS' &&
        choicesList[indexForOpponentChoice].id === 'ROCK'
      ) {
        return 'YOU LOSE'
      }
      if (
        id === 'PAPER' &&
        choicesList[indexForOpponentChoice].id === 'PAPER'
      ) {
        return 'IT IS DRAW'
      }
      if (
        id === 'PAPER' &&
        choicesList[indexForOpponentChoice].id === 'SCISSORS'
      ) {
        return 'YOU LOSE'
      }
      if (id === 'PAPER' && choicesList[indexForOpponentChoice].id === 'ROCK') {
        return 'YOU WON'
      }
      return null
    }

    console.log(renderResultMessage(), '# # # # # # #')

    resultMessage = renderResultMessage()

    if (renderResultMessage() === 'YOU WON') {
      console.log('OWN CONDITION LOGGED')
      this.setState(prevState => ({score: prevState.score + 1}))
    }
    if (renderResultMessage() === 'YOU LOSE') {
      console.log('LOSS CONDITION LOGGED')
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      onClickChoiceItem: true,
      ourImageUrl: ourChoiceItem[0].imageUrl,
      opponentImageUrl: choicesList[indexForOpponentChoice].imageUrl,
    })
  }

  onClickRockButton = () => {
    this.renderUpdates('ROCK')
  }

  onClickScissorsButton = () => {
    this.renderUpdates('SCISSORS')
  }

  onClickPaperButton = () => {
    this.renderUpdates('PAPER')
  }

  onClickPlayAgainButton = () => {
    this.setState({onClickChoiceItem: false})
  }

  renderChoiceItemsView = () => {
    const {choicesList} = this.props

    return (
      <ChoiceItemListContainer>
        <ChoiceButtonElement
          type="button"
          onClick={this.onClickRockButton}
          data-testid="rockButton"
        >
          <ChoiceImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </ChoiceButtonElement>

        <ChoiceButtonElement
          type="button"
          onClick={this.onClickScissorsButton}
          data-testid="scissorsButton"
        >
          <ChoiceImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </ChoiceButtonElement>

        <ChoiceButtonElement
          type="button"
          onClick={this.onClickPaperButton}
          data-testid="paperButton"
        >
          <ChoiceImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </ChoiceButtonElement>

        {/* {choicesList.map(eachChoice => (
          <ChoiceItem
            key={eachChoice.id}
            choiceDetails={eachChoice}
            onClickChoice={this.onClickChoice}
          />
        ))} */}
      </ChoiceItemListContainer>
    )
  }

  GameResultView = () => {
    const {ourImageUrl, opponentImageUrl} = this.state

    // console.log('Our-Choice', selectChoiceItem)

    // console.log('Opponent-Choice', shuffledChoiceList[0].id)

    return (
      <GameResultContainer>
        <ResultChoiceItemsContainer>
          <ResultChoiceItems>
            <ParagraphEl>YOU</ParagraphEl>
            <ChoiceImageStyles src={ourImageUrl} alt="your choice" />
          </ResultChoiceItems>

          <ResultChoiceItems>
            <ParagraphEl>OPPONENT</ParagraphEl>
            <ChoiceImageStyles src={opponentImageUrl} alt="opponent choice" />
          </ResultChoiceItems>
        </ResultChoiceItemsContainer>

        <ResultMessage>{resultMessage}</ResultMessage>
        <PlayAgainButton onClick={this.onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  render() {
    const {score, onClickChoiceItem} = this.state

    return (
      <AppContainer>
        <HeaderTitles>Rock Paper Scissors</HeaderTitles>
        <HeaderContainer>
          <HeaderTitlesContainer>
            <HeaderTitles>ROCK</HeaderTitles>
            <HeaderTitles>PAPER</HeaderTitles>
            <HeaderTitles>SCISSORS</HeaderTitles>
          </HeaderTitlesContainer>

          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <DigitalScore>{score}</DigitalScore>
          </ScoreContainer>
        </HeaderContainer>

        <ChoicesContainer>
          {onClickChoiceItem
            ? this.GameResultView()
            : this.renderChoiceItemsView()}
        </ChoicesContainer>
        <ReactPopUp />
      </AppContainer>
    )
  }
}

export default GamingApp

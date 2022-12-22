import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
`

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 60%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderTitles = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 6px;
`

export const ScoreContainer = styled.div`
  height: 120px;
  width: 140px;
  background-color: #ffffff;
  border-radius: 6px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
`

export const DigitalScore = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-top: 2px;
`

export const ChoicesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChoiceItemListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ResultChoiceItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

export const ResultChoiceItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const ParagraphEl = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 4px;
`

export const ChoiceImageStyles = styled.img`
  height: 160px;
  width: 160px;
`

export const PlayAgainButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ResultMessage = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
`

export const ChoiceImage = styled.img`
  height: 160px;
  width: 160px;
`

export const ChoiceButtonElement = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

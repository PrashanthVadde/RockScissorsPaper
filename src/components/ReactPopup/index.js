import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PopUpContainer,
  RulesButton,
  RulesImageContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

const ReactPopUp = () => (
  <PopUpContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesImageContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesImageContainer>
      )}
    </Popup>
  </PopUpContainer>
)
export default ReactPopUp

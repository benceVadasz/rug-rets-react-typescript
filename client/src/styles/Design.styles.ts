import styled from "@emotion/styled";
import {ToggleButton} from '@material-ui/lab';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {ToggleButtonGroupProps} from '@material-ui/lab';

export const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

export const DesignTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 1 / 2 / 6;
`;

export const ShapePicker = styled.div`
  grid-area: 2 / 1 / 4 / 6;
  background-color: blue;
`;

export const Canvas = styled.div`
  grid-area: 4 / 1 / 10 / 5;
  background-image: linear-gradient(
      rgba(209, 207, 197, 0.5) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      rgba(209, 207, 197, 0.5) 1px,
      rgba(245, 243, 231, 0.5) 1px
    );
  background-size: 20px 20px;
  overflow: scroll;
`;

export const ColorPickerContainer = styled.div`
  overflow: scroll;
  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.25);
  grid-area: 5 / 5 / 9 / 6;
`;

export const ColorBtnContainer = styled.div`
  grid-area: 4 / 5 / 5 / 6;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: 9 / 5 / 10 / 6;
  background-color: yellow;
`;

export const ToggleGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>`
  height: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;
`

export const Toggle = styled(ToggleButton)`
  
`

export const ColorSelector = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  right: 0;
  left: 0;
`
export const Color = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;    
`
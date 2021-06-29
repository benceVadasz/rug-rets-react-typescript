import styled from "@emotion/styled";

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
  background-color: #e5e5f7;
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

export const ColorPicker = styled.div`
  overflow: scroll;
  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.25);
  grid-area: 5 / 5 / 9 / 6;
  background-color: red;
`;

export const ColorBtnContainer = styled.div`
  grid-area: 4 / 5 / 5 / 6;
  background-color: purple;
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
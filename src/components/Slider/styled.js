import { Slider } from '@mui/material'
import styled from 'styled-components'

export const StyledWrapSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-top: 25px;
  position: fixed;
  top: 30%;

  @media (max-width: 1000px) {
    position: unset;
    height: auto;
    width: 100%;
    justify-content: center;
  }
`

export const StyledSlider = styled(Slider)`
  @media (max-width: 1000px) {
    width: 80% !important;
  }
  @media (max-width: 450px) {
    & .MuiSlider-markLabel {
      display: none;
    }
  }
`

export const StyledLabel = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const StyledSpan = styled.span`
  color: ${({ color }) => color};
  font-weight: 600;
`

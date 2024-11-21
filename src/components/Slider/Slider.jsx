import * as React from 'react'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { StyledLabel, StyledSlider, StyledSpan, StyledWrapSlider } from './styled'

export default function SliderComponent({ sliderValue, setSliderValue, marks }) {
  const currentMark = marks.find(mark => mark.value === sliderValue.value) || marks[0]
  const handleChange = (event, newValue) => {
    const upd = marks.find(mark => mark.value === newValue)
    setSliderValue(upd)
  }
  const isMobile = useWindowWidth()
  return (
    <StyledWrapSlider>
      <StyledLabel>
        <StyledSpan color={currentMark.color}>{sliderValue.label}</StyledSpan>
      </StyledLabel>
      <StyledSlider
        aria-label='Restricted values'
        value={sliderValue.value}
        step={null}
        marks={marks}
        orientation={isMobile ? 'horizontal' : 'vertical'}
        onChange={handleChange}
        sx={{
          color: currentMark.color,
          '& .MuiSlider-thumb': {
            boxShadow: `0 0 10px ${currentMark.color}`,
          },
          '& .MuiSlider-track': {
            backgroundColor: currentMark.color,
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },
        }}
      />
    </StyledWrapSlider>
  )
}

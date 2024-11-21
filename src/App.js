import logo from './logo.svg'
import './App.css'
import { berryApi } from './services/api'
import { useEffect, useState } from 'react'
import BerryList from './components/BerryList/BerryList'
// import Slider from './components/Slider/Slider'
import SliderComponent from './components/Slider/Slider'
import { StyledApp } from './styled'

const marks = [
  {
    value: 0,
    label: 'All',
    name: '',
    color: 'blue',
  },
  {
    value: 20,
    label: 'Very Soft',
    name: 'very-soft',
    color: 'green',
  },
  {
    value: 40,
    label: 'Soft',
    name: 'soft',
    color: 'limegreen',
  },
  {
    value: 60,
    label: 'Hard',
    name: 'hard',
    color: 'orange',
  },
  {
    value: 80,
    label: 'Very Hard',
    name: 'very-hard',
    color: 'red',
  },
  {
    value: 100,
    label: 'Super Hard',
    name: 'super-hard',
    color: 'darkred',
  },
]

function App() {
  const [berryList, setBerryList] = useState([])
  const [sliderValue, setSliderValue] = useState(marks[0])

  const fetch = async () => {
    const result = await berryApi.getBerries()
    console.log('result', result.results)
    setBerryList(result.results)
  }
  useEffect(() => {
    fetch()
  }, [])

  console.log('sliderValue', sliderValue)

  return (
    <StyledApp>
      <SliderComponent marks={marks} sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <BerryList berryList={berryList} filterName={sliderValue.name} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </StyledApp>
  )
}

export default App

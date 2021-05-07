import GlobalStyle from './theme/globalStyle'
import { useState, useEffect } from 'react'
import Select from './Select'

function App() {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(null)

  const options = [
    { id: 1, name: 'Orange', label: 'Orange' },
    { id: 1, name: 'Lime', label: 'Green' },
    { id: 1, name: 'Strawberry', label: 'Red' },
    { id: 1, name: 'Lemon', label: 'Yellow' },
    { id: 1, name: 'kiwi', label: 'Brown' },
    { id: 1, name: 'Blackberry', label: 'Purple' },
    { id: 1, name: 'Watermelon', label: 'Rose' }
  ]

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className='container_center'>
      <GlobalStyle />
      <h1>Select a fruit:</h1>
      <Select
        className='select'
        disabled={false}
        loading={loading}
        value={value}
        onChange={(e) => handleChange(e)}
        onClear={handleClear}
        name='mySelect'
        selectOptions={options}
        placeholder={{ loading: 'Loading...', finish: 'Type or select' }}
      />
    </div>
  )
}

export default App

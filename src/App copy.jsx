import { useState } from 'react'
import './App.css'

function App() {
  const [isBlue, setIsBlue] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
        onClick={() => !setIsBlue(!isBlue)}
        style={
          {
            backgroundColor: isBlue ? 'blue' : 'red',
            color: 'black',
            cursor: 'pointer',
            minWidth: '120px',
            padding: '10px 20px',
            fontSize: '18px',
          }
        }
        >{isBlue ? 'Go Red' : 'Go Blue'}</button>
      </div>

        
    </div>
  )
}
export default App
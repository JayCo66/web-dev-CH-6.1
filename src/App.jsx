import { useState } from 'react'
import './App.css'

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [text, setText] = useState('Hello world');
  const [color, setColor] = useState('#000000ff');
  const [count, setCount] = useState(1);

  return (
    <div>

      <div style={{ marginBottom: '40px' }}>
        <button
          onClick={() => setIsBlue(!isBlue)}
          style={{
            backgroundColor: isBlue ? 'blue' : 'red',
            color: 'black',
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          {isBlue ? 'Go Red' : 'Go Blue'}
        </button>
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: color, marginTop: 0, fontWeight: 'normal' }}>{text}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ padding: '8px', fontSize: '16px', border: '1px solid #ccc' }}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ padding: '0', cursor: 'pointer', width: '60px', height: '35px', border: '1px solid #ccc', backgroundColor: '#eee' }}
          />
        </div>
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginTop: 0 }}>{count}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer', border: '1px solid gray', borderRadius: '4px', backgroundColor: '#f0f0f0', color: 'black' }}
          >
            Count Up
          </button>
          <button
            onClick={() => setCount(count - 1)}
            style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer', border: '1px solid gray', borderRadius: '4px', backgroundColor: '#f0f0f0', color: 'black' }}
          >
            Count Down
          </button>
        </div>
      </div>

    </div>
  );
}

export default App
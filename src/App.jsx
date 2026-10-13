import { useState } from 'react';
import './App.css';
import FoodContainer from './FoodContainer';

function App() {
  const [currentPage, setCurrentPage] = useState('menu');
  const [isBlue, setIsBlue] = useState(false);
  const [text, setText] = useState('Hello world');
  const [color, setColor] = useState('#000000ff');
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setCurrentPage('menu')}>Menu Management</button>
        <button onClick={() => setCurrentPage('start')}>Get start with React</button>
      </div>

      {currentPage === 'menu' ? (
        <FoodContainer />
      ) : (
        <div>
          <h2>Get start with React</h2>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => setIsBlue(!isBlue)}
              style={{
                backgroundColor: isBlue ? 'blue' : 'red',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              {isBlue ? 'Go Red' : 'Go Blue'}
            </button>
          </div>

          <hr />

          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: color }}>{text}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                type="color"
                value={color.slice(0, 7)}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>

          <hr />

          <div style={{ marginBottom: '20px' }}>
            <h2>{count}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setCount(count + 1)}>Count Up</button>
              <button onClick={() => setCount(count - 1)}>Count Down</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
import { useState } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

const initialFood = [
  { name: 'cake', price: 35, isBestSeller: true },
  { name: 'bread', price: 25, isBestSeller: false },
  { name: 'milk', price: 15, isBestSeller: true },
  { name: 'donut', price: 45, isBestSeller: false },
  { name: 'cookie', price: 55, isBestSeller: true },
];

const FoodContainer = () => {
  const [food, setFood] = useState(initialFood);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'user';
  });

  const isAdmin = mode === 'admin';

  const toggleMode = () => {
    const nextMode = isAdmin ? 'user' : 'admin';
    setMode(nextMode);
    localStorage.setItem('mode', nextMode);
  };

  const deleteItem = (index) => {
    const result = food.filter((_, i) => i !== index);
    setFood(result);
  };

  const addItem = (item) => {
    setFood([...food, item]);
  };

  return (
    <div className="food-container">
      <div className="mode-toggle">
        <span>{isAdmin ? 'Admin Mode' : 'User Mode'}</span>
        <button onClick={toggleMode}>
          {isAdmin ? 'User' : 'Admin'}
        </button>
      </div>

      <h3>Our Menu</h3>

      <FoodList food={food} deleteItem={deleteItem} isAdmin={isAdmin} />

      {isAdmin && <FoodForm addItem={addItem} />}
    </div>
  );
};

export default FoodContainer;

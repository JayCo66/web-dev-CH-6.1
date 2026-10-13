const FoodItem = ({ item, index, deleteItem, isAdmin }) => {
  return (
    <li className="food-item">
      <span>
        {item.name} - {item.price} baht
        {item.isBestSeller && ' 🏅'}
      </span>
      {isAdmin && (
        <button onClick={() => deleteItem(index)}>Del</button>
      )}
    </li>
  );
};

export default FoodItem;

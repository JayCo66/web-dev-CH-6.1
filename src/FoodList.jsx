import FoodItem from './FoodItem';

const FoodList = ({ food, deleteItem, isAdmin }) => {
  return (
    <div className="food-list-container">
      <ul>
        {food.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
            isAdmin={isAdmin}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;

import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const intialItem = {
  name: "hiba",
  isCompleted: true,
  quantity: 5,
};
const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  let isClicked = false;
  const handleAddButtonClick = () => {
    const newItem = {
      name: item,
      isCompleted: false,
      quantity: 1,
    };
    setItem("");
    setItems([...items, newItem]);
  };
  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isCompleted = !newItems[index].isCompleted;

    setItems(newItems);
  };
  const onLeft = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  };
  const onRight = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
  };
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            className="add-item-input"
            placeholder="Add an item..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                {item.isCompleted === true ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.name}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.name}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => onLeft(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => onRight(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">total:{items.length}</div>
      </div>
    </div>
  );
};

export default App;

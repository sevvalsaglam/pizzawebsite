import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [pizza, setPizza] = useState({
    size: 'Orta',
    dough: 'normal',
    toppings: [],
    count: 1,
    basePrice: 85.5,
  });

  const addTopping = (topping) => {
    if (!pizza.toppings.includes(topping) && pizza.toppings.length < 10) {
      setPizza((prev) => ({
        ...prev,
        toppings: [...prev.toppings, topping],
      }));
    }
  };

  const removeTopping = (topping) => {
    setPizza((prev) => ({
      ...prev,
      toppings: prev.toppings.filter((t) => t !== topping),
    }));
  };

  const updateSize = (size) => {
    setPizza((prev) => ({
      ...prev,
      size,
    }));
  };

  const updateDough = (dough) => {
    setPizza((prev) => ({
      ...prev,
      dough,
    }));
  };

  const increaseCount = () => {
    setPizza((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  const decreaseCount = () => {
    if (pizza.count > 1) {
      setPizza((prev) => ({
        ...prev,
        count: prev.count - 1,
      }));
    }
  };

  const calculatePrice = () => {
    const { basePrice, size, toppings, count } = pizza;
    const sizeMultiplier =
      size === 'Küçük' ? 0.8 : size === 'Büyük' ? 1.2 : 1;
    const toppingsPrice = toppings.length * 5;
    const totalPrice = (basePrice + toppingsPrice) * sizeMultiplier * count;
    return totalPrice.toFixed(2);
  };

  return (
    <OrderContext.Provider
      value={{
        pizza,
        addTopping,
        removeTopping,
        updateSize,
        updateDough,
        increaseCount,
        decreaseCount,
        calculatePrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

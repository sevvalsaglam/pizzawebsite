import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [pizza, setPizza] = useState({
    size: 'Orta',
    dough: 'normal',
    toppings: [],
    count: 1,
    basePrice: 85.50,
  });

  const addTopping = (topping) => {
    if (pizza.toppings.length < 10) {
      setPizza({
        ...pizza,
        toppings: [...pizza.toppings, topping],
      });
    }
  };

  const removeTopping = (topping) => {
    setPizza({
      ...pizza,
      toppings: pizza.toppings.filter((t) => t !== topping),
    });
  };

  const updateSize = (size) => {
    setPizza({
      ...pizza,
      size,
    });
  };

  const increaseCount = () => {
    setPizza({
      ...pizza,
      count: pizza.count + 1,
    });
  };

  const decreaseCount = () => {
    if (pizza.count > 1) {
      setPizza({
        ...pizza,
        count: pizza.count - 1,
      });
    }
  };

  const calculatePrice = () => {
    const basePrice = pizza.basePrice;
    const toppingsPrice = pizza.toppings.length * 5;
    const sizeMultiplier = 
      pizza.size === 'Küçük' ? 0.8 :
      pizza.size === 'Büyük' ? 1.2 : 1;

    return ((basePrice + toppingsPrice) * sizeMultiplier * pizza.count).toFixed(2);
  };

  return (
    <OrderContext.Provider
      value={{
        pizza,
        addTopping,
        removeTopping,
        updateSize,
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


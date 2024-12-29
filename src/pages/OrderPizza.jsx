
import Header from '../components/Header';
import PizzaCard from '../components/PizzaCard';
import OrderForm from '../components/OrderForm';

const OrderPizza = () => {

  return (
    <div>
      <Header />
      <div>
      <PizzaCard></PizzaCard>
      <OrderForm></OrderForm>
      </div>
    </div>
  );
};

export default OrderPizza;
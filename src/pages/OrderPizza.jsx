
import Header from '../components/Header';
import PizzaCard from '../components/PizzaCard';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const OrderPizza = () => {

  return (
    <div>
       <Header noBackground={false} /> {/* Arka planı açık bırak */}
      <div>
      <PizzaCard></PizzaCard>
      <OrderForm></OrderForm>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderPizza;
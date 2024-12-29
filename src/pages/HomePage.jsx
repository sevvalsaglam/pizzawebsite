import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div >
      <Header />
      
        <h1 className="text-4xl font-bold mb-8">Pizza Siparişine Başla</h1>
        <Link
          to="/order-pizza"
          className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md"
        >
          Sipariş Ver
        </Link>
     
    </div>
  );
};

export default HomePage;


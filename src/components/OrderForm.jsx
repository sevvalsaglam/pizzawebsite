import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import './PizzaCustomization.css';
import './PizzaToppings.css';

const ToppingsList = ({ toppings, selectedToppings, onChange }) => (
  <div className="grid grid-cols-2 gap-x-24 gap-y-4">
    {toppings.map((topping) => (
      <label key={topping.id} className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={selectedToppings.includes(topping.name)}
          onChange={() => onChange(topping.name)}
          className="custom-checkbox"
        />
        <span className="text-[#3A3A3A] text-base">{topping.name}</span>
      </label>
    ))}
  </div>
);

const SizeSelection = ({ pizzaSize, updateSize, isInvalid }) => (
  <div>
    <div className={`flex items-center gap-1 mb-4 ${isInvalid('size') ? 'invalid-field' : ''}`}>
      <h2 className="text-[22px] font-medium text-gray-800">Boyut Seç</h2>
      <span className="text-red-500 text-xl">*</span>
      {isInvalid('size') && <span className="text-red-500 text-[22px] ml-1">!</span>}
    </div>
    <div className="flex flex-col gap-4">
      {['Küçük', 'Orta', 'Büyük'].map((size) => (
        <label key={size} className="radio-label">
          <input
            type="radio"
            name="size"
            value={size}
            checked={pizzaSize === size}
            onChange={(e) => updateSize(e.target.value)}
            className="custom-radio"
          />
          <span className="text-lg text-gray-700">{size}</span>
        </label>
      ))}
    </div>
  </div>
);

const DoughSelection = ({ pizzaDough, updateDough, isInvalid }) => (
  <div>
    <div className={`gap-1 mb-4 ${isInvalid('dough') ? 'invalid-field' : ''}`}>
      <h2 className="text-[22px] font-medium text-gray-800">Hamur Seç</h2>
      <span className="text-red-500 text-xl">*</span>
      {isInvalid('dough') && <span className="text-red-500 text-xl ml-1">!</span>}
    </div>
    <select
      className="h-[48px] w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-gray-400"
      value={pizzaDough}
      onChange={(e) => updateDough(e.target.value)}
    >
      <option value="" disabled>Hamur Kalınlığı</option>
      <option value="thin">İnce</option>
      <option value="mid">Orta</option>
      <option value="thick">Kalın</option>
    </select>
  </div>
);


const OrderForm = () => {
  const { addTopping, removeTopping, calculatePrice } = useOrder();
  const [note, setNote] = useState('');
  const [count, setCount] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [pizza, setPizza] = useState({ size: '', dough: '' });
  const [touched, setTouched] = useState({ size: false, dough: false });
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toppings = [
    { id: 'pepperoni', name: 'Pepperoni', price: 5 },
    { id: 'sosis', name: 'Sosis', price: 5 },
    { id: 'kanada', name: 'Kanada Jambonu', price: 5 },
    { id: 'tavuk', name: 'Tavuk Izgara', price: 5 },
    { id: 'sogan', name: 'Soğan', price: 5 },
    { id: 'domates', name: 'Domates', price: 5 },
    { id: 'misir', name: 'Mısır', price: 5 },
    { id: 'sucuk', name: 'Sucuk', price: 5 },
    { id: 'jalapeno', name: 'Jalapeno', price: 5 },
    { id: 'sarimsak', name: 'Sarımsak', price: 5 },
    { id: 'biber', name: 'Biber', price: 5 },
    { id: 'ananas', name: 'Ananas', price: 5 },
  ];

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const calculateTotal = () => {
    const basePrice = 85.50;
    const selectionsPrice = 25.00;
    return (basePrice + selectionsPrice) * count;
  };

  const handleSubmit = () => {
    if (!note.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    // Handle order submission
  };

  const updateSize = (value) => {
    setPizza((prev) => ({ ...prev, size: value }));
    setTouched((prev) => ({ ...prev, size: true }));
  };

  const updateDough = (value) => {
    setPizza((prev) => ({ ...prev, dough: value }));
    setTouched((prev) => ({ ...prev, dough: true }));
  };

  const isInvalid = (field) => touched[field] && !pizza[field];

  const handleToppingChange = (toppingName) => {
    setSelectedToppings((prev) => {
      if (prev.includes(toppingName)) {
        return prev.filter((t) => t !== toppingName);
      }
      if (prev.length >= 10) return prev;
      return [...prev, toppingName];
    });
  };

  return (
    <div style={{marginRight:'400px', marginLeft:'400px', display:'flex', flexDirection:'column', alignItems:'strech'}}>
      <main>
        <div>
          <div className="space-y-6 p-6">
            <div style={{
        fontSize: '22px',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'baseline',

      }} >
            <SizeSelection pizzaSize={pizza.size} updateSize={updateSize} isInvalid={isInvalid} />
            <DoughSelection pizzaDough={pizza.dough} updateDough={updateDough} isInvalid={isInvalid} />
            </div>
            <div className="p-6">
              <h2 className="text-[28px] text-[#3A3A3A] font-semibold mb-2">Ek Malzemeler</h2>
              <p
                className={`text-base mb-4 ${
                  selectedToppings.length < 4 ? 'text-red-600 font-bold' : 'text-gray-600'
                }`}
              >
                En Fazla 10 malzeme seçebilirsiniz. 5₺
                {selectedToppings.length < 4 && '!'}
              </p>
              <ToppingsList toppings={toppings} selectedToppings={selectedToppings} onChange={handleToppingChange} />
            </div>
            <div className="max-w-[608px] mx-auto p-4">
              <div className="mb-8">
                <h2 className="text-[22px] font-semibold mb-2 text-[#1A1A1A]">Sipariş Notu</h2>
                <div className="relative">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onFocus={() => setHasError(false)}
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    className={`w-full border ${hasError ? 'border-red-500' : 'border-[#E6E6E6]'}
                      rounded-[8px] p-4 h-[92px] text-[#1A1A1A] text-[15px] placeholder-[#999999]
                      focus:outline-none focus:border-[#FFD84D]`}
                  />
                  {hasError && <AlertCircle className="absolute right-4 top-4 text-red-500 w-5 h-5" />}
                </div>
              </div>

              <div className="bg-[#F9F9F9] p-4 rounded-[8px] flex-row">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={decreaseCount}
                      className="w-[48px] h-[48px] flex items-center justify-center bg-[#FFD84D] rounded-[8px] text-black text-2xl font-medium"
                    >
                      -
                    </button>
                    <span className="w-[48px] h-[48px] flex items-center justify-center rounded-[8px] text-black text-2xl font-medium">{count}</span>
                    <button
                      onClick={increaseCount}
                      className="w-[48px] h-[48px] flex items-center justify-center bg-[#FFD84D] rounded-[8px] text-black text-2xl font-medium"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <div className="text-[13px] text-[#999999] mb-1">Seçimler</div>
                    <div className="text-[15px] font-semibold text-[#1A1A1A]">25.00₺</div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#E6E6E6]">
                  <span className="text-[15px] font-semibold text-[#1A1A1A]">Toplam</span>
                  <span className="text-[22px] font-bold text-[#CE2829]">{calculateTotal().toFixed(2)}₺</span>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#FFD84D] text-[#1A1A1A] font-semibold text-[15px] py-[14px] rounded-[8px] mt-4"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderForm;

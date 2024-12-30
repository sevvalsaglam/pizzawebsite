import React from 'react'

function PizzaCard() {
  const pizza = {
    name: "Position Absolute Acı Pizza",
    price: 85.50,
    rating: 4.9,
    reviews: 200,
    description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#CE2829',
          padding: '20px',
          color: '#fff',
          textAlign: 'center',
          fontSize: '24px',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <span style={{
          padding: '8px',
          color: '#FAF7F2',
          paddingLeft: '380px'
        }}>
          Anasayfa -
        </span>
        <p style={{
          color: '#FFFFFF',
          fontWeight: 'bold'
        }}>Sipariş Oluştur</p>
      </div>
    
      <div style={{ paddingLeft: '400px', paddingRight: '400px', alignItems: 'stretch' }}>
        <h1 className="text-[22px] font-bold mb-2 " style={{ fontSize: '22px' }}>{pizza.name}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl font-bold">{pizza.price.toFixed(2)}₺</span>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{pizza.rating}</span>
            <span>({pizza.reviews})</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          {pizza.description}
        </p>
      </div>
    </>
  );
}

export default PizzaCard;

import React from 'react'

function PizzaCard() {
  return (
    <>
        <div
        style={{
        backgroundColor: '#CE2829',
        padding: '20px',
        color: '#fff',
        textAlign:'center',
        fontSize: '24px',
        width: '100%',
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',

      }}>
        <span style={{
        padding: '8px',
        color: '#FAF7F2',
        paddingLeft:'380px'
      }}>
        Anasayfa -
        </span>
        <p style={{
        color: '#FFFFFF',
        fontWeight: 'bold'
        }}>Sipariş Oluştur</p>
        </div>
    
    <div style={{paddingLeft:'400px',
    paddingRight:'400px', alignItems:'stretch'}}>

        <h1 className="text-[22px] font-bold mb-2 " style={{fontSize:'22px'}}>Position Absolute Acı Pizza</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl font-bold">85.50₺</span>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra 
          geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, 
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. 
          Küçük bir pizzaya bazen pizzetta denir.
        </p>
    </div>
    </>
  )
}

export default PizzaCard
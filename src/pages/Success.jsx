import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Success = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Başarıyla Sipariş Verildi!</h2>
        <Link to="/">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Ana Sayfaya Dön</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

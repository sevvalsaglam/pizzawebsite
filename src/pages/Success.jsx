import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div
      style={{
        backgroundColor: '#CE2829',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: 'Roboto Condensed, sans-serif',
        
      }}
    >
      <Header noBackground={true} />
      
      {/* Slogan */}
      <h1
        style={{
          fontSize: '70px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '40px',
          fontFamily: 'Roboto Condensed, sans-serif', // HomePage ile uyumlu font
        }}
      >
        TEBRİKLER! <br />
        SİPARİŞİNİZ ALINDI!
      </h1>

      {/* Ana Sayfa Butonu */}
      <Link
        to="/"
        className="inline-block"
        style={{
          backgroundColor: '#FBBF24',
          color: 'black',
          fontWeight: '600',
          fontSize: '24px',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          textAlign: 'center',
          display: 'inline-block',
          fontFamily: 'Barlow', // HomePage ile uyumlu font
          marginTop: '20px',
        }}
      >
        ANA SAYFA
      </Link>
    </div>
  );
};

export default Success;

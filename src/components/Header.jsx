import React from 'react';

const Header = ({ noBackground }) => {
  return (
    <header
      className="headerTitle"
      style={{
        backgroundColor: noBackground ? 'transparent' : '#CE2829', // Arka planı kontrol et
      }}
    >
      <h1>Teknolojik Yemekler</h1>
    </header>
  );
};

export default Header;

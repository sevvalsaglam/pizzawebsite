// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerLinks">
        <ul>
          <li>Kampanyalar</li>
          <li>Pizzalar</li>
          <li>Yan Ürünler</li>
          <li>Restoranlar</li>
          <li>Temassız Teslimat Nedir?</li>
          <li>Her Dilime Güven</li>
          <li>Kişisel Verilerin Korunması</li>
          <li>Çerez Politikası</li>
          <li>Kullanım Koşulları</li>
          <li>Ürün İçerikleri ve Alerjenler</li>
          <li>İletişim</li>
        </ul>
      </div>

      <div className="footerDisclaimer">
        <p>© Teknolojik Yemekler Türkiye 2024. Tüm hakları saklıdır.</p>
        <p>Ürünlerimizde kullandığımız salam, sosis, sucuk, pepperoni ürünleri piliç etinden üretilmiştir.</p>
      </div>
    </footer>
  );
};

export default Footer;

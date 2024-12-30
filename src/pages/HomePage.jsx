import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: '#CE2829',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // İçeriği üst kısıma hizala
        alignItems: 'center',
        fontFamily: 'Roboto Condensed, sans-serif',
        backgroundImage:
          "url('/banner.png.png'), " +  // 1. yarım daire pizza görseli
          "url('/div.png'), " +         // 2. dağınık pizza malzemeleri görseli
          "url('/shape-2.png.png')",    // 3. minimal desen görseli
        backgroundSize: 'contain, contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'bottom center, center center, right center',
      }}
    >
      <Header noBackground={true} /> {/* Header'da arka plan yok */}

      <h1
        style={{
          fontSize: '70px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '40px',
          marginTop: '50px', // Sloganı yukarıya al
        }}
      >
        KOD ACIKTIRIR<br />
        PIZZA, DOYURUR
      </h1>

      <Link
        to="/order-pizza"
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
          fontFamily: 'Barlow',
          marginTop: '20px', // Butonu da biraz yukarı al
        }}
      >
        ACIKTIM
      </Link>
    </div>
  );
};

export default HomePage;

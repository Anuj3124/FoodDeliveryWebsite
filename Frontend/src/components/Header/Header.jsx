import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${assets.header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '34vw',
        margin: '30px auto',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden'
      }}
    >
      <div className="header-contents">
        <h2>Order your Fav Food</h2>
        <p>Choose from our diverse menu featuring a delectable array of dishes</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

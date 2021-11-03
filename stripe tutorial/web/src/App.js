import React, { useState } from 'react';
import './App.css';
import redmi9T from './redmi9T.jpg';
import StripeContainer from './StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <>
        <h1 className="shopName">Shopping place</h1>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
              <div className="infoTovar">
                <h3 className="tovarName">Redmi 9T 64GB</h3>
                <h2 className="tovarPrice">$180</h2>
                <button className="purchaseBtn" onClick={() => setShowItem(true)}>
                  Purchase 🛒
                </button>
              </div>
              <img src={redmi9T} className="phoneImg" alt="Redmi" />
          </>
        )}
      </>
    </div>
  );
}

export default App;

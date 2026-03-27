import React, { useEffect } from 'react';

const PaymentSuccess = () => {
  useEffect(() => {
    // Clear cart after successful payment
    localStorage.removeItem('cart');
    localStorage.removeItem('techyCart');
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>Payment Successful</h1>
      <p>Your order has been placed successfully.</p>

      <button onClick={() => window.location.href = '/#/'}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;

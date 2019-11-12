import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as zoid from 'zoid/dist/zoid.frameworks';

const Widget = zoid.create({
  tag: 'coinprofile-payment-module',
  url: 'https://staging.paymentgateway.coinprofile.co/',
  dimensions: {
    width: '100%',
    height: '100%',
  },
});

const PayWidget = Widget.driver('react', {
  React: React,
  ReactDom: ReactDOM,
});

function CoinPay({ amount, publicKey, email, buttontext, className }) {
  const [showPayment, setShowPayment] = useState(false);

  function showPaymentHandler() {
    setShowPayment(true);
  }

  function closePaymentHandler() {
    setShowPayment(false);
  }

  return (
    <div>
      {showPayment ? (
        <div className="work">
          <PayWidget
            amount={amount}
            coinprofileKey={publicKey}
            email={email}
            closePayment={closePaymentHandler}
            className={className}
          />
        </div>
      ) : null}
      <button onClick={showPaymentHandler}>{buttontext}</button>
    </div>
  );
}

export default CoinPay;

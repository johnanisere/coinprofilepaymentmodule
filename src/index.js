import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as zoid from 'zoid/dist/zoid.frameworks';

const Widget = zoid.create({
  tag: 'payment-widget',
  url: 'http://localhost:3000',
  dimensions: {
    width: '100%',
    height: '100%',
  },
});

const PayWidget = Widget.driver('react', {
  React: React,
  ReactDom: ReactDOM,
});

function CoinPay({
  amount,
  publicKey,
  email,
  buttontext,
  className,
  callBack,
  disable,
}) {
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
            callback={callBack}
          />
        </div>
      ) : null}
      <button onClick={showPaymentHandler} disabled={disable}>
        {buttontext}
      </button>
    </div>
  );
}

export default CoinPay;

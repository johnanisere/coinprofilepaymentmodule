import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as zoid from 'zoid/dist/zoid.frameworks';

const Widget = zoid.create({
  tag: 'payment-widget', //Same tag would be used in the child component
  url: 'http://localhost:3000', //The route that should first display on iframe
  dimensions: {
    //The default size the widget should display in
    width: '100%',
    height: '100%',
  },
});

const PayWidget = Widget.driver('react', {
  React: React,
  ReactDOM: ReactDOM,
});

function CoinPay({
  amount,
  publicKey,
  email,
  buttontext,
  className,
  disable,
  callBack,
  username,
  decimals,
  currency,
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
            username={username}
            currency={currency}
            decimals={decimals}
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

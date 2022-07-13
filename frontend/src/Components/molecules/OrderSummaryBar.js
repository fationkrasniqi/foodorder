import React from 'react';

function OrderSummaryBar({ text, total, className }) {
  return (
    <div className={className}>
      {text}
      <span>${total}</span>{' '}
    </div>
  );
}

export default OrderSummaryBar;

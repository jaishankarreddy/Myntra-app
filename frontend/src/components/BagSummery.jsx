import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BagSummery = () => {

  const bagItems = useSelector(state=> state.bag);
  const items = useSelector(state=> state.items);
  
  const finalItems = items.filter(items=>{
    const itemFound = bagItems.indexOf(items.id);
    return itemFound >= 0;
  })
console.log(finalItems);
let CONVENIENT_FEE=99
let totalItem = bagItems.length
let totalMRP = 0
let totalDiscount=0

finalItems.forEach(item => {
   totalMRP += item.original_price;
   totalDiscount += item.original_price - item.current_price
   console.log(totalMRP);
});

const finalPayment =totalMRP - totalDiscount + CONVENIENT_FEE


  return (
    <div className="bag-summery">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummery;

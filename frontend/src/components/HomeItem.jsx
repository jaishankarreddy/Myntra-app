import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((Store) => Store.bag);
  const dispatch = useDispatch();
  const elementFoundInBag = bagItems.indexOf(item.id) >= 0;
  // console.log("element found is", elementFoundInBag);

  const AddItem = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };
  const removeItems=()=>{
    dispatch(bagSliceAction.removeFromBag(item.id));
  }

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {!elementFoundInBag ? (
          <button
            type="button"
            onClick={AddItem}
            className="btn btn-success btn-add-bag"
          >
            <IoIosAddCircleOutline />
            Add to cart
          </button>
        ) : (
          <button type="button" onClick={removeItems} className="btn btn-danger btn-add-bag">
            <MdOutlineDeleteOutline />
            Delete from cart
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;

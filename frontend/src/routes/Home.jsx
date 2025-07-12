import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import Store from "../store";

const Home = () => {

  const items = useSelector(Store=> Store.items)

  return (
    <main>
      <div className="items-container">
        {items.map((item)=><HomeItem key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Home;

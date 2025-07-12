import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import Store from "../store";

function App() {
  const fetchStatus = useSelector((Store) => Store.fetching);


  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ?<LoadingSpinner/> : <Outlet />  }
      <Footer />
    </>
  );
}

export default App;

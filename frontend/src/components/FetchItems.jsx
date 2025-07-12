import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchingStatusActions } from "../store/fetchingStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((Store) => Store.fetching);
  const dispatch = useDispatch();
//   console.log(fetchStatus);


  useEffect(() => {
    if (fetchStatus.fetchDone) return;
  
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingStatusActions.makeFetchingStart());
  
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
          dispatch(fetchingStatusActions.markFetchDone());
          dispatch(fetchingStatusActions.makeFetchingFinished());

        dispatch(itemsActions.addInitialItems(items[0]));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      });
  
    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone, dispatch]);
  

  return (
    <>
    </>
  );
};

export default FetchItems;

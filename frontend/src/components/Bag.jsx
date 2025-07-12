import React from 'react'
import BagSummery from './BagSummery'
import BagItem from './BagItem'
import {useSelector} from 'react-redux'

const Bag = () => {

  const bagItems = useSelector(state=> state.bag);
  const items = useSelector(state=> state.items);
  const finalItems = items.filter(items=>{
    const itemFound = bagItems.indexOf(items.id);
    return itemFound >= 0;
  })


  return (
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=> <BagItem key={item.id} item={item}/>)}
          
        </div>
        <div className="bag-summary">
            <BagSummery/>
        </div>
      </div>
    </main>
  )
}

export default Bag
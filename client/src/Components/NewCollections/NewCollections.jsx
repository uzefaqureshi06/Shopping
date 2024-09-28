import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './NewCollections.css'
import Item from '../item/Item'
import new_collections from '../Assets/Frontend_Assets/new_collections'
import { getProductsAction } from '../../redux/actions/products'
const NewCollections = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {products.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={`$${item.price}`} old_price={`$${item.oldPrice}`} />
        })}

      </div>
    </div>
  )
}

export default NewCollections

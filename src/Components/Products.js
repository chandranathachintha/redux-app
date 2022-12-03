import React from 'react';
import JsonData from '../data/JsonData.json';
import { useDispatch } from 'react-redux';
import { incrementcart,decrementcart } from '../redux/slices/CartReducer';

const Products = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className='container d-flex justify-content-around mt-5 flex-wrap'>
            {
                JsonData.products.map(product=>{
                    return(
                        <div className="card mt-5" style={{"width": "18rem"}} key={product.id}>
                            <img src={product.url} className="card-img-top" alt="..."  height='300px'/>
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Rs.{product.price}</p>
                                <div className='d-flex justify-content-around'>
                                    <button className='btn btn-primary' 
                                    onClick={()=>dispatch(incrementcart({
                                        productName : product.name,
                                        productPrice : product.price,
                                    }))}>Add</button>
                                    <button className='btn btn-primary'
                                    onClick={()=>dispatch(decrementcart({
                                        productName : product.name,
                                        productPrice : product.price,
                                    }))}>Remove</button>
                                </div>
                        </div>
</div>
                    )
                })
            }
      </div>
    </div>
  );
}

export default Products;

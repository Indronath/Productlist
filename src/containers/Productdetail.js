import React,{useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { selectedProducts,removeselectedProducts } from '../redux/actions/ProductActions';

const Productdetail = () => {
    const {productId} = useParams();
    let product = useSelector((state) => state.product);
    const {title,price,category,description,image} = product;
    
    const dispatch = useDispatch();
    
    const fetchproductdetl = async (id) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=> {console.log("Error :", err)});
        dispatch(selectedProducts(res.data));
    }
    useEffect(()=> {
        if(productId && productId !== "") fetchproductdetl(productId);
        return () => {
             dispatch(removeselectedProducts());
             };
    },[productId])

   
    //console.log(product,"hello");
    return (
        <div className="ui grid container margin_top">
            {Object.keys.length === 0 ? (
                <div class="ui segment">
               ...Loading
              </div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divided">
                            And
                        </div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui tag teal label">$ {price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                    
                                </div>
                                <Link to={`/`}>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Productdetail;

import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/ProductActions';
import Productcomponent from './Productcomponent';

const Productlisting = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fatchproducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=> {console.log("Error",err)});
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fatchproducts();
    },[])
    // console.log("Products : ",products);
    // console.log(setProducts);
    return (
        <div className="ui grid container margin_top">
            <Productcomponent/>
        </div>
    )
}


export default Productlisting

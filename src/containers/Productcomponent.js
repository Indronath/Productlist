import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
export const Productcomponent = () => {
    const products = useSelector((state) => state.allproducts.products);
    const productlist = products.map((product) => {
        const {id,title,price,category,description,image} = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                <div className="ui small image">
                    <img src={image} alt={title} height={150}/>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                    {/* <div class="description">{description}</div> */}
                </div>
                </div>
            </div> 
            </Link>
        </div>
        )
    })
    return (
        <>{productlist}</>
    )
}
export default Productcomponent;

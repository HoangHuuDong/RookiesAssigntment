import React, { Fragment, useState, useEffect } from "react";
import ShowProduct from "./CRUD_Product/ShowProduct";
import DeleteProduct from "./CRUD_Product/DeleteProduct";
import AddProDuct from "./CRUD_Product/AddProduct";
import UpdateProduct from "./CRUD_Product/UpdateProduct";


const List = props =>{

    const list = props.listItemProps

    return(
    <Fragment>
        <div className="grid__column-10">
            <nav className="category">
                <h3 className="category-heading">
                    Product
                    <AddProDuct/>
                </h3>
                <ul className="category-list">
                    {list.map(item =>{
                        return (                        
                        <li className="product-item">
                            <p id={item.id} className="product-item-link">
                                {item.name}
                            </p>
                            <ShowProduct id={item.id} name={item.name}/>
                            <UpdateProduct id={item.id}/>
                            <DeleteProduct id={item.id}/>
                        </li>
                        )                    
                    })}
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

export default List;
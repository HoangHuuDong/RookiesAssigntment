import React, { Fragment } from "react";
import ShowProduct from "./CRUD_Product/ShowProduct";
import DeleteProduct from "./CRUD_Product/DeleteProduct";
import AddProDuct from "./CRUD_Product/AddProduct";
import UpdateProduct from "./CRUD_Product/UpdateProduct";


const List = props =>{

    const list = props.listItemProps;
    const category = list.map(item =>{
        return {id: item.categoryId, value: item.categoryName}
    } )

    const uniqueCategory = [];
    category.map((item) =>{
        var unique = uniqueCategory.find((x) => x.id === item.id);
        if(!unique) uniqueCategory.push(item);
    })

    return(
    <Fragment>
        <div className="grid__column-10">
            <nav className="category">
                <h3 className="category-heading">
                    Product
                    <AddProDuct props = {uniqueCategory}/>
                </h3>
                <ul className="category-list">
                    {list.map(item =>{
                        return (                        
                        <li className="product-item">
                            <p id={item.id} className="product-item-link">
                                {item.name}
                            </p>
                            <ShowProduct id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} image2={item.image2} image3={item.image3}/>
                            <UpdateProduct id={item.id} props = {uniqueCategory}/>
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
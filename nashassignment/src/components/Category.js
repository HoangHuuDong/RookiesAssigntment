import React, { Fragment  } from "react";
import AddCategory from "./CRUD_Category/AddCategory";
import DeleteCategory from "./CRUD_Category/DeleteCategory";
import UpdateCategory from "./CRUD_Category/UpdateCategory";
import ShowCategory from "./CRUD_Category/ShowCategory";

const Category = props =>{
    const list = props.listProps

    const active = (id) => {
        const url = "/" + id;
        window.location.href = url;
    }

    return (
    <Fragment> 
        <div className="grid__column-2">
            <nav className="category">
                <h3 className="category-heading">
                    Category
                    <AddCategory/>
                </h3>

                <ul className="category-list">
                    {list.map(item =>{
                        return (                        
                        <li className="category-item">
                            <p onClick={()=>active(item.id)} className="category-item-link">
                                {item.name}
                            </p>

                            <ShowCategory id={item.id} name={item.name}/>
                            <UpdateCategory id={item.id}/>
                            <DeleteCategory id={item.id}/>
                        </li>
                        )                    
                    })}
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

export default Category;
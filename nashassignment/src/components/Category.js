import React, { Fragment, useState } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import AddCategory from "./CRUD_Category/AddCategory";
import DeleteCategory from "./CRUD_Category/DeleteCategory";
import UpdateCategory from "./CRUD_Category/UpdateCategory";
import ShowCategory from "./CRUD_Category/ShowCategory";

const Category = props =>{
    const list = props.listProps

    const navigate  = useNavigate();

    const [itemState,setItemState] = useState([])


    const active = (id) => {
        // var add = document.getElementById("category-item");
        // add.setAttribute("ClassName","category-item--active");
        navigate('/product/'+id)
        console.log(id)
        const getData = async (_id) =>{
            try {
                const res = await axios.get('https://localhost:7290/api/product/get-by-idCategory/'+_id)
                setItemState(res.data)
                console.log(itemState)
            } catch (error) {
                console.log(error.message)
            }
        }
        getData(id)
    };

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
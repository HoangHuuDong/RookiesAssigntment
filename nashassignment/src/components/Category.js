import React, { Fragment, useState } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'

const Category = props =>{
    const list = props.listProps
    // console.log(list)
    // this.active = this.active.bind(this);

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
                    <button className="btn-custom"> New </button>
                </h3>

                <ul className="category-list">
                    {list.map(item =>{
                        return (                        
                        <li id="category-item" className="category-item">
                            <p onClick={()=>active(item.id)} href="#" className="category-item-link">
                                {item.name}
                            </p>
                        </li>)                    
                    })}
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

export default Category;
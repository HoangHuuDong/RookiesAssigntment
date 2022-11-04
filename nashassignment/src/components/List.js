import React, { Fragment, useState, useEffect } from "react";
import ListItem from "./ListItem";
import axios from "axios";


const List = props =>{

    const list = props.listItemProps

    // const { data } = useFetch( 'https://localhost:7290/api/product/get-product' );
    // console.log(data);
    // const [listState,setListState] = useState([])

    // useEffect(() =>{
    //     const getData = async () =>{
    //         try {
    //             const res = await axios.get('https://localhost:7290/api/category/get-category')
    //             setListState(res.data)
    //             console.log(listState)
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     getData()
    // })

    return(
    <Fragment>
        <div className="grid__column-10">
            <nav className="category">
                <h3 className="category-heading">
                    Product
                    <button className="btn-custom"> New </button>
                </h3>
                <ul className="category-list">
                    {list.map(item =>{
                        return (                        
                        <li className="">
                            <a id={item.id} href="#" className="category-item-link">
                                {item.name}
                                </a>
                        </li>
                        )                    
                    })}
                </ul>
            </nav>
        </div>
    </Fragment>
    )
}

// const useFetch = (url = 'https://localhost:7290/api/product/get-product', options = null) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(url, options)
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, [url, options]);
//   return {data}
// }

export default List;
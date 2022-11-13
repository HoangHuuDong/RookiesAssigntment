import React, { Fragment, useEffect, useState } from "react";
import { getCustomer, SearchCustomer, SortByName, SortByRole } from "./CustomerAPI";
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Customer = () =>{
    const [listCustomer,setListCustomer] = useState([])

    useEffect(() =>{
        getCustomer()
        .then((res) => setListCustomer(res.data))
        .catch((error) => console.log(error))
    },[])

    const search_customer = async name => {
        const result = await SearchCustomer(name)
        setListCustomer(result.data)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        console.log(name)
        search_customer(name);
    }

    const sortbyrole = async () =>{
        const result = await SortByRole()
        setListCustomer(result.data)
    }

    const sortbyname = async () => {
        const result = await SortByName()
        setListCustomer(result.data)
    }

    return (
        <Fragment>
          <div className="app">
            <header className="header">
              <Header/>
            </header>
    
            <div className="app_container">
                <div className="grid">
                    <div className="grid__row app_content">
                        <div className="grid__full-width">
                            <nav className="customer">
                                <h3 className="category-heading">
                                    Customer
                                </h3>
                                <div className="header__search-customer">
                                    <Form className='form-search' onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control className="form-search-control"
                                            type="text"
                                            name="name"
                                            placeholder="Search customer"
                                            autoFocus
                                        />
                                        </Form.Group>
                                        <Button className="header__search-customer-btn" variant="primary" type="submit">
                                            Search
                                        </Button>
                                    </Form>
                                    <div className="home-filter-customer">
                                        <span className="home-filter__label-customer">Sort by</span>
                                        <div className="byRole">
                                            <button onClick={() => sortbyrole()} className="home-filter__btn btn-customer">
                                                Role
                                            </button>
                                        </div>
                                        <div className="byName">
                                            <button onClick={() => sortbyname()} className="home-filter__btn btn-customer">
                                                Name
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <ul className="category-list">
                                    <li className="product-item">
                                        <p className="customer-item-link">
                                            ID
                                        </p>
                                        <p className="customer-item-link">
                                            Name
                                        </p>
                                        <p className="customer-item-link">
                                            Role
                                        </p>
                                        <p className="customer-item-link">
                                            Order Finished
                                        </p>                                    
                                        <p className="customer-item-link">
                                            Order Not Finished Yet
                                        </p>
                                    </li>
                                    {listCustomer.map(item =>{
                                        return (
                                            <li className="product-item">
                                                <p className="customer-item-link">
                                                    {item.id}
                                                </p>
                                                <p id={item.id} className="customer-item-link ml-80" >
                                                    {item.name}
                                                </p>
                                                <p id={item.id} className="customer-item-link">
                                                    {item.nameRole}
                                                </p>
                                                <p id={item.id} className="customer-item-link">
                                                    {item.ordersFinish}
                                                </p>
                                                <p id={item.id} className="customer-item-link">
                                                    {item.ordersNotFinish}
                                                </p>
                                            </li>
                                        )                 
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Fragment>
      );
}

export default Customer;
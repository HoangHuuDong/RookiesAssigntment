import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateProduct } from '../ProductAPI';
import ShowNoti from '../ShowNoti';

const UpdateProduct = (props) => {
    const idProduct = props.id;
    const category = props.props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const update_product = async(idP,product,date) => {
      const result = await updateProduct(idP,product,date);
      if(result.status = '200'){
        setTimeout(() => {
          alert("Your shop is being updated!");
        }, 1000);
      }
      else{
        alert("Something was wrong, check it out!!");
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }

    const getCurrentDate = (separator='-') =>{

      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const idP = idProduct;
      const product = e.target;
      const date = getCurrentDate();
      update_product(idP,product,date);
    }
    
    return (
      <>
        <button className="btn-custom-item" onClick={handleShow}>
          Edit
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder=""
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    placeholder=""
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>OldPrice</Form.Label>
                <Form.Control
                    type="text"
                    name="oldprice"
                    placeholder=""
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    placeholder=""
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="text"
                    name="image"
                    placeholder=""
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select                     
                    type="text"
                    name="category"
                    autoFocus
                    aria-label="Default select example">
                    {category.map((item) =>{
                        return <option value={item.id}>{item.value}</option>
                    })}
                </Form.Select>
                </Form.Group>
                <Button onClick={() => setShow(false)} variant="primary" type="submit">
                    Save
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default UpdateProduct;
  
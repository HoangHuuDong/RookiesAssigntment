import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateProduct } from '../ProductAPI';

const UpdateProduct = (props) => {
    const idProduct = props.id;

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const update_product = async(_id,productName,productDescription,productPrice) => {
      const result = await updateProduct(_id,productName,productDescription,productPrice);
      console.log(result)
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const id = idProduct;
      const name = e.target.name.value;
      const description = e.target.description.value;
      const price = e.target.price.value;

      update_product(id,name,description,price);
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
                <Form.Group className="mb-3">
                    <Form.Label>Id Category</Form.Label>
                    <Form.Control placeholder={idProduct} disabled />
                </Form.Group>
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
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    type="text"
                    name="price"
                    placeholder=""
                    autoFocus
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
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
  
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropzone from '../Dropzone';
import { addProduct } from '../ProductAPI';

const AddProDuct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const add_product = async(name,description,oldPrice,price) => {
    const result = await addProduct(name,description,oldPrice,price);
    console.log(result)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.targer.description.value;
    const oldPrice = e.targer.oldprice.value;
    const price = e.targer.price.value;
    // const Image = e.targer.description.value;
    add_product(name,description,oldPrice,price);
  }
  return (
    <>
      <button className="btn-custom" onClick={handleShow}>
        New
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
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
              <Dropzone/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProDuct;
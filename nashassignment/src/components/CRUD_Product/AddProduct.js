import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addCategory } from '../CategoryAPI';

const AddProDuct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const add_category = async(categoryName) => {
    const result = await addCategory(categoryName);
    console.log(result)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    add_category(name);
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
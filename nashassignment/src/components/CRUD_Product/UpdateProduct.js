import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateCategory } from '../CategoryAPI';

const UpdateProduct = (props) => {
    const idCategory = props.id;

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const update_category = async(_id,categoryName) => {
      const result = await updateCategory(_id,categoryName);
      console.log(result)
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const id = idCategory;
      const name = e.target.name.value;
      update_category(id,name);
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
                    <Form.Control placeholder={idCategory} disabled />
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
  
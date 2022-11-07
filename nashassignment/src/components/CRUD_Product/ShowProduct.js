import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ShowProduct = (props) => {
    const idProduct = props.id;
    const nameProduct = props.name;
    const description = props.description;
    const price = props.price;
    const image = props.image;
    const image2 = props.image2;
    const image3 = props.image3;

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className="btn-custom-item" onClick={handleShow}>
          Show
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Show Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Id Product</Form.Label>
                    <Form.Control placeholder={idProduct} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name Product</Form.Label>
                    <Form.Control placeholder={nameProduct} disabled />
                </Form.Group>                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder={description} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control placeholder={price} disabled />
                </Form.Group>                
                <Form.Group className="mb-3 image-show" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image</Form.Label>
                    <div className='image-show-item'>
                        <img className="img-size" src={image}/>
                        <img className="img-size" src={image2}/>
                        <img className="img-size" src={image3}/>
                    </div>
                </Form.Group>
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

export default ShowProduct;

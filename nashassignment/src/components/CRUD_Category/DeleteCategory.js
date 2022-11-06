import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { delCategory } from '../CategoryAPI';

const DeleteCategory = (props) => {
    const idCategory = props.id;
    // console.log(idCategory);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const del_category = async(id) => {
        const result = await delCategory(id);
        console.log(result)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        del_category(idCategory);
    }
    return (
        <>
            <button className="btn-custom-item" onClick={handleShow}>
                Delete  
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                <Alert variant="danger" onClose={handleClose} dismissible>
                    <Alert.Heading>Warning !!!</Alert.Heading>
                    <p>
                        Are you sure to delete this !!!
                    </p>
                </Alert>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Yes
                </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DeleteCategory;
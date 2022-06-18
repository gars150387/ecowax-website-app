import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import '../styles/modal.scss'

export const ModalHome = () => {

const [show, setShow] = useState(true)

  const handleClose = () => setShow(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqq2iw2', 'template_l0cnn0y', e.target, 'user_7hiY7EgOGmmB04VGtCfcX')
        .then((result) => {
            Swal.fire({
              title:'Bienvenido!', 
              text:'Gracias por unirte a nuestra comunidad, seras de los primeros en enterarte de nuestras ofertas', 
              icon:'success',
              confirmButtonColor: '#4c644c',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }})
        }, (error) => {
            Swal.fire(' Oops...', 'Algo salio mal, intentalo nuevamente o mas tarde', 'error')
        });
    e.target.reset()
    handleClose()

};  

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal-container'
      >
        <Modal.Header>
          <Modal.Title className="modal-title">Ecowax</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            Te queremos invitar a unirte a nuestra comunidad, unete con tu
            correo electronico y estaras al tanto de todas nuestras ofertas!
          </span>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Unite con tu correo electronico"
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mas tarde
          </Button>
          <Button variant="primary" type="submit">
            Unete!
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
 
      </Modal>
    </>
  );
};

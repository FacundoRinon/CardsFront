import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ card }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow} className="characterModal">
        Info
      </span>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header
          className="characterModal"
          closeVariant="white"
          closeButton
        >
          <Modal.Title>{card.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="characterModal">
          <div className="container">
            <div className="row d-flex">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={`${card.character}`}
                  className="characterModalPic"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <h3>Description</h3>
                  <p>{card.description}</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h3>Ability</h3>
                    <p>{card.ability}</p>
                  </div>
                  <div className="col-6">
                    <h3>Cost</h3>
                    <h5>10 strength</h5>
                    <h5>5 inteligence</h5>
                    <h5>5 energy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="characterModal">
          <Button variant="secondary" onClick={handleClose}>
            Buy character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

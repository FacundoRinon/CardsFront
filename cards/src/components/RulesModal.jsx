import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RulesModal({ trigger, onClose }) {
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);

  const handleClose = () => {
    setShow(false);
    onClose();
    setPage(1);
  };

  useEffect(() => {
    setShow(trigger);
  }, [trigger]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="characterModal"
          closeVariant="white"
          closeButton
        >
          <Modal.Title>How to Collect</Modal.Title>
        </Modal.Header>
        <Modal.Body className="characterModal">
          {page === 1 && (
            <p>
              To obtain new cards, you must recruit sorcerers in the store. You
              can use filters to find sorcerers that match the amount of points
              you have.
            </p>
          )}
          {page === 2 && (
            <p>
              Once you recruit sorcerers, you should add them to your team,
              which can have up to 3 members.
            </p>
          )}
          {page === 3 && (
            <p>
              Each sorcerer earns points based on their stats every 10 minutes.
            </p>
          )}
          {page === 4 && (
            <p>You can use those points to recruit more sorcerers.</p>
          )}
        </Modal.Body>
        <Modal.Footer className="characterModal">
          {page !== 4 && (
            <Button variant="primary" onClick={() => setPage(page + 1)}>
              Understood
            </Button>
          )}
          {page === 4 && (
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RulesModal;

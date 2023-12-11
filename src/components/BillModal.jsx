import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='rounded' onClick={handleShow}>
       Invoice modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoices</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Table striped bordered hover size="lg" responsive>
      <thead className='bg'>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>

          <th>Username</th>
          <th>Username</th>



        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>

          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>

          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>3</td>
          <td>@mdo</td>

          <td>@mdo</td>

          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
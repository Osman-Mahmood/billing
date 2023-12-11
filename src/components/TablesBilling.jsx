import React from 'react'
import Table from 'react-bootstrap/Table';

const TablesBilling = () => {
  return (
    <div className='mt-3'>
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
    </div>
  )
}

export default TablesBilling

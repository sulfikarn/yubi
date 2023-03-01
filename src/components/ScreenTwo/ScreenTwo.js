import './ScreenTwo.css'
import { Table, Button  } from 'react-bootstrap';

export default function ScreenTwo({ tableData }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Website</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.website}</td>
                <td>
                  { item.status &&
                  <Button  className='btn-sucess'>SUCCESS</Button>
                  }
                  { !item.status &&
                  <Button  className='btn-fail'>FAILURE</Button>
                  }
                </td>
              </tr>
            )

          })}

        </tbody>
      </Table>

    </>

  )
}

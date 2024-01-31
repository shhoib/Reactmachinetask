import { useEffect, useState } from 'react';
import './Table.scss';
import axiosInstance from '../../api/axios';


const Table = () => {

    const [tableData,setTableData] = useState([]);

    useEffect(()=>{
        const fetchTableData = async()=>{
         const response  = await axiosInstance.get('/api/table');
            setTableData(response.data)
        }
        fetchTableData();
    },[]);

    return (
    <div className='tableContainer'>
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.quantity}</td>
            <td>{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>


    <div className="profile">
        <img className='profileIMG' src="/img/media.png" alt="profile.png" loading='lazy'/>
        <h6>John Doe</h6>
        <p>CEO</p>
        <div className="icons">
            <img src="/img/facebook.png" alt="facebook" loading='lazy'/>
            <img src="/img/instagram.png" alt="instagram" loading='lazy'/>
            <img src="/img/twitter.png" alt="twitter" loading='lazy'/>
        </div>
    </div>
    </div>
  )
}

export default Table
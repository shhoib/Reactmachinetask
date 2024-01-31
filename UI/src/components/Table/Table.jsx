import { useEffect, useState } from 'react';
import './Table.scss';
import axiosInstance from '../../api/axios';
import { RiArrowRightSLine,RiArrowDropLeftLine } from "react-icons/ri";



const Table = () => {

    const [tableData,setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const fetchTableData = async()=>{
         const response  = await axiosInstance.get('/api/table');
            setTableData(response.data)
        }
        fetchTableData();
    },[]);

    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = tableData.slice(firstIndex,lastIndex);
    const npage = Math.ceil(tableData.length/ recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prePage = ()=>{
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
      }
    }
    const nextPage = ()=>{
      if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
      }
    }
    const changeCPage = (id)=>{
      setCurrentPage(id)
    }

    return (

    <div className='tableContainer'>

     <div className="withPagination">
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
        {records.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.quantity}</td>
            <td>{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="pagination">
      <button onClick={prePage}><RiArrowDropLeftLine /></button>
      {numbers.map((n,i)=>(
        <div className={`pageNmbr ${currentPage==n ? 'active' : '' }`} key={i}>
          <p onClick={()=> changeCPage(n)}>{n}</p>
        </div>
      ))}
      <button onClick={nextPage}><RiArrowRightSLine/></button>
    </div>

    </div>


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
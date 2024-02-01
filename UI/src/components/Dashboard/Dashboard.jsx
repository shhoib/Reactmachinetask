import { useContext } from 'react';
import Table from '../Table/Table';
import Charts from '../charts/Charts';
import './Dashboard.scss';
import { CgMenuLeftAlt } from "react-icons/cg";
import {context} from '../../store/context'
import { IoMdClose } from "react-icons/io";

const Dashboard = () => {

  const {isMenuOpened,setIsMenuOpened} = useContext(context);

  // console.log(isMenuOpened);

  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <div className='dashboard'>
      <header>
        <h5>Good Morning ! 🌞</h5>
        <p className='menuIcon' onClick={handleMenu}>
         {isMenuOpened ? <IoMdClose className='closeMenu'/>: <CgMenuLeftAlt /> }
        </p>
        <div className="profile">
          <div className="emails">
            <h6>John doe</h6>
            <p>john@gmail.com</p>
          </div>
          <img src="/img/Rectangle 10.png" alt="" loading='lazy' />
        </div>
      </header>

      <Charts />
      <Table />
    </div>
  );
};

export default Dashboard;

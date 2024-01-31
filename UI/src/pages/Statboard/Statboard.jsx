import './Statboard.scss';
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../../components/Dashboard/Dashboard';

const Statboard  = () => {
  return (
    <div style={{display:'flex'}}>
    <Sidebar/>
    <Dashboard/>
    </div>
  )
}

export default Statboard;
import Charts from '../charts/Charts';
import './Dashboard.scss';


const Dashboard = () => {
  return (
    <div className='dashboard'>
        
     <header>
        <h5>Good Morning ! 🌞</h5>
        <div className="profile">
            <div className="emails">
                <h6>John doe</h6>
                <p>john@gmail.com</p>
            </div>
            <img src="/img/Rectangle 10.png" alt="" loading='lazy'/>
        </div>
     </header>

     <Charts/>
    </div>
  )
}

export default Dashboard;
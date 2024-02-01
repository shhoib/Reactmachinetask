import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../../components/Dashboard/Dashboard';
import { context } from '../../store/context';
import { useState } from 'react';

const Statboard  = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div style={{display:'flex'}}>
    <context.Provider value={{isMenuOpened , setIsMenuOpened}}>
      <Sidebar/>
      <Dashboard/>
    </context.Provider>
    </div>
  )
}

export default Statboard;
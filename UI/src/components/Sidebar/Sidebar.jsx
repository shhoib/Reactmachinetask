import './Sidebar.scss';


const Sidebar = () => {

    const liData = [
        {
            img : '/img/Circled Menu.png',
            text : 'Dashboard',
            index : 1
        },
        {
            img : '/img/Support.png',
            text : 'Support',
            index : 2
        },
        {
            img : '/img/Puzzle.png',
            text : 'Plugins',
            index : 3
        },
        {
            img : '/img/Help.png',
            text : 'Help',
            index : 4
        },
    ]
  return (
    <aside>
        <div className="chartHeader">
            <img src="/img/Briefcase.png" alt="" loading='lazy'/>
            <img className='statsIMG' src="/img/StatBoard.png" alt="" loading='lazy'/>
        </div>

        <div className="LIs">
            { liData.map((li)=>(
                <div className="li" key={li.index}>
                    <img src={li.img} alt="" />
                    <p>{li.text}</p>
                </div>
            ))}
        </div>

        <button>Logout <img src="/img/Shutdown.png" alt="" /> </button>
    </aside>
  )
}

export default Sidebar
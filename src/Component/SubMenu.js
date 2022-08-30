import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

     const showSubnav = () => setSubnav(!subnav);
  return (
    <>
        <Link to={item.path} className="SideBarLink" onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <span className='SideBarLabel'>{item.title}</span>
            </div>
            <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        </Link>
        {
            subnav && item.subNav.map((item, index)=>{
                return <Link to={item.path} key={index}  className="DropdownLink" >
                    {item.icon}
                    <span className='SideBarLabel'>{item.title}</span>
                </Link>
            })
        }
    </>
  )
}

export default SubMenu
import React,{useContext, useState} from 'react'
import Topbar from "./Topbar"
import {
  Link
} from "react-router-dom";
import CategoryContext from '../../context/AppContext';

function Menubar() {
    const [navbar,setNavbar]=useState(false);
    let {setCategory} = useContext(CategoryContext);
  return (
    <>
       <Topbar />
       <section className='menubar'>
        <ul className={navbar? "navbar":"flex"} onClick={()=>setNavbar(false)}>
            <li><button onClick={()=>setCategory('general')}>Home</button></li>
            <li><button onClick={()=>setCategory('business')}>Business</button></li>
            <li><button onClick={()=>setCategory('entertainment')}>Entertainment</button></li>
            <li><button onClick={()=>setCategory('general')}>General</button></li>
            <li><button onClick={()=>setCategory('health')}>Health</button></li>
            <li><button onClick={()=>setCategory('sports')}>Sports</button></li>
            <li><button onClick={()=>setCategory('technology')}>Technology</button></li>
        </ul>
        <button className="barIco" onClick={() => setNavbar(!navbar)}>
          {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
       </section>
    </>
  )
}

export default Menubar
import { Outlet } from "react-router-dom"
import {Link} from 'react-router-dom'
import './navigation.styles.scss'

export const Navigation = () => {
    return(
        <div> 
        <div id="navbar">
            <ul>
                <li><Link to='home'> Home</Link></li>
                <li><Link to='play'> Play</Link></li>
                <li><Link to='cards'> Cards</Link></li>
            </ul>
        </div>
            <Outlet/>
        </div>
         
    )
}
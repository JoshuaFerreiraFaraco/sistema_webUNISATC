import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <div>
            <span style={{padding: '8px'}}><NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : "")}>Home</NavLink></span>
            <span style={{padding: '8px'}}><NavLink to={'/products'} className={({ isActive }) => (isActive ? 'active' : "")}>Produtos</NavLink></span>
        </div>
    )
}
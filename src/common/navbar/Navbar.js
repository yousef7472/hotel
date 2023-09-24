import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HeaderCartButton from './HeaderCartButton';
import "./Navbar.css"

const Navbar = (props) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return ( 
        <>
            <nav className="navbar">
                <div className="container flex_space">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faCircleXmark} />
                        : <FontAwesomeIcon icon={faBars} />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li><NavLink to="/" onClick={closeMobileMenu} 
                                className={({ isActive }) => isActive ? "isActive" : ""}>
                                Home</NavLink>
                            </li>
                            <li><NavLink to="/about" onClick={closeMobileMenu} 
                                className={({ isActive }) => isActive ? "isActive" : ""}>
                                About</NavLink>
                            </li>
                            <li><NavLink to="/gallery" onClick={closeMobileMenu} 
                                className={({ isActive }) =>isActive ? "isActive" : ""}>
                                Gallery</NavLink>
                            </li>
                            <li><NavLink to="/destination" onClick={closeMobileMenu} 
                                className={({ isActive }) => isActive ? "isActive" : ""}>
                                Destination</NavLink>
                            </li>
                            <li><NavLink to="/blog" onClick={closeMobileMenu} 
                                className={({ isActive }) => isActive ? "isActive" : ""}>
                                Blog</NavLink>
                            </li>
                            <li><NavLink to="/contact" onClick={closeMobileMenu} 
                                className={({ isActive }) => isActive ? "isActive" : ""}>
                                Contact us</NavLink>
                            </li>
                    </ul>
                    <ul className="login-area flex">
                        <li>
                            <NavLink to="/sign" className={({ isActive }) => isActive ? "isActive" : ""}>
                                Sign
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "isActive" : ""}>
                                Register
                            </NavLink>
                        </li>
                        {/* <li>
                            <Link to="/contact">
                                <button className='primary-btn'  aria-label="request a quote">Request a quote</button>
                            </Link>
                        </li> */}
                        <li>
                            <HeaderCartButton onClick={props.onShowCart} />
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <header>
                <div className="container flex_space">
                    <div className="logo">
                        <img src={require(`../../images/${process.env.REACT_APP_LOGO}`)} alt="logo hotel"/>
                    </div>
                    <div className="contact flex_space">
                        <div className="box flex_space">
                                <div className="icons">
                                <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div className="text">
                                    <h4>Working Hours</h4>
                                    <Link to="/contact">Monday - Sunday : 9.00am to 6.00pm</Link>
                                </div>
                            </div>
                            <div className="box flex_space">
                                <div className="icons">
                                <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="text">
                                    <h4>Call Us Hours</h4>
                                    <Link to="/contact">+2012 0785 1832</Link>
                                </div>
                            </div>
                            <div className="box flex_space">
                                <div className="icons">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="text">
                                    <h4>Mail Us</h4>
                                    <Link to="/contact">@yousef7shaban@gmail.com</Link>
                                </div>
                            </div>
                    </div>
                </div>
                
            </header> */}
        </>
     );
}
 
export default Navbar;
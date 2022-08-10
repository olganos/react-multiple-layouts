import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import './Header.css';

function Header () {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <NavLink
                    to="/page1"
                >
                    Page 1
                </NavLink>
                |
                <NavLink
                    to="/page2"
                >
                    Page 2
                </NavLink>
                |
                <NavLink
                    to="/page3"
                >
                    Page 3
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
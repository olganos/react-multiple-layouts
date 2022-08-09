import { Link } from 'react-router-dom';
import logo from './../../logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <Link
                    to="/page1"
                >
                    Page 1
                </Link>
                |
                <Link
                    to="/page2"
                >
                    Page 2
                </Link>
                |
                <Link
                    to="/page3"
                >
                    Page 3
                </Link>
            </nav>
        </header>
    );
}

export default Header;
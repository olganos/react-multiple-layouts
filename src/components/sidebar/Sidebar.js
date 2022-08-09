import { Link } from "react-router-dom";

import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className="no-bullets">
                    <li>
                        <Link to="/page3">
                            Page 3
                        </Link>
                    </li>
                    <li>
                        <Link to="/page4">
                            Page 4
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
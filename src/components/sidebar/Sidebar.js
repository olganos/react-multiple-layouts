import { NavLink } from "react-router-dom";

import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className="no-bullets">
                    <li>
                        <NavLink to="/page3">
                            Page 3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/page4">
                            Page 4
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
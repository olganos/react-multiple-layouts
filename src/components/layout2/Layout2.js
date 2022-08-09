import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './Layout2.css';

function Layout2() {
    return (
        <>
            <div className="App">
                <Header />
                <div className={"layout2Wrapper"}>
                    <Sidebar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout2;
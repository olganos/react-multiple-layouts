import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import './Layout.css';

function Layout() {
    return (
        <>
            <div className="App">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;
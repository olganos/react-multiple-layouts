import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import './Layout3.css';

function Layout3() {
    return (
        <>
            <div className="App">
                <Header />
                <div className={"layout3Wrapper"}>
                    <Sidebar />
                    <main>
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout3;
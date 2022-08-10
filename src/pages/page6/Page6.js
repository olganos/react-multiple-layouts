import { Outlet } from "react-router-dom";

function Page6() {
    return (
        <>
            <h1>This a page 6</h1>
            <p>
                The page number 6 content
            </p>
            <Outlet />
        </>
    );
}

export default Page6;
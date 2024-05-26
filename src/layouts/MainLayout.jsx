import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            {/* Packet */}
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
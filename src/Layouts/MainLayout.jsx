
import { Outlet, Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;
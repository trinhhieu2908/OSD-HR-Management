import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="container-body"><Outlet /></div>
            <Footer />
        </>
    );
};

export default Layout;

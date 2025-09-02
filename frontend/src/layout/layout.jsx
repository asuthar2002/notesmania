import { Outlet } from 'react-router-dom';
import Header from '../components/comm/header/header';

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ minHeight: '80vh', padding: '1rem' }}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="h-full w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

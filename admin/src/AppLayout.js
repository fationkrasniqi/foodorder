import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

const AppLayout = ({ admin }) =>
  admin ? (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : null;
export default AppLayout;

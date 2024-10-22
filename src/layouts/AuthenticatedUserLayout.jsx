import { Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from './useAuthStore';

const UserLayout = () => {
  const { isAuthenticated } = useAuthStore();

  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserLayout;

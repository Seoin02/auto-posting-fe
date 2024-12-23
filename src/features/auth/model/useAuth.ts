import { useState } from 'react';
import { useCookies } from 'react-cookie';
//import { logout } from '../api/authApi';

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [cookies, removeCookies] = useCookies();

  function handleLogin() {
    if (cookies.access_token) setIsAuth(true);
  }

  function handleLogout() {
    removeCookies('access_token', undefined, { path: '/' });
    removeCookies('refresh_token', undefined, { path: '/' });
    setIsAuth(false);
    //logout();
  }

  return {
    isAuth,
    cookies,
    handleLogin,
    handleLogout,
  };
}

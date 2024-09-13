import { User } from 'entities/User';
import Cookies from 'js-cookie';
// import { getUser } from './userAPI';

interface authProps {
  jwt: string;
  user: User;
}

export const setToken = (data: authProps) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.email);
  Cookies.set('jwt', data.jwt);

  if (Cookies.get('username')) {
    //  Router.reload('/');
  }
};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');
  // Router.reload();
};

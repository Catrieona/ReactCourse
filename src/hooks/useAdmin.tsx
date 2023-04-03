import { useSelector } from 'react-redux';

export const useAdmin = () => {
  return useSelector((store) => store.user.role === 'admin');
};

import {insertNewEmployee} from '../../realm/schema';

export const fetchApiData = () => {
  const middleware = async dispatch => {
    const resolve = await fetch('https://reqres.in/api/users');
    const userData = await resolve.json();
    const arr = userData.data.map(item => {
      const obj = {
        ...item,
        isSelected: false,
        username: '',
      };
      insertNewEmployee(obj);
      return obj;
    });
    dispatch({type: 'SAVE_API', payload: arr});
  };

  return middleware;
};

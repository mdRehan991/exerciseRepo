import Realm from 'realm';
import {databaseOptions} from '../../realm/schema';

const INITIAL_STATE = [];

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_API':
      return action.payload;

    case 'UPDATE_API':
      const id = action.payload.id;
      const arr = [...state];
      let extIndex = arr.findIndex(val => val.id === id);
      arr.splice(extIndex, 1, action.payload);

      const updateRealmFunc = async () => {
        const realm = await Realm.open(databaseOptions);
        realm.write(() => {
          const data = realm.objects('User');
          data[extIndex].first_name = action.payload.first_name;
          data[extIndex].last_name = action.payload.last_name;
          data[extIndex].email = action.payload.email;
          data[extIndex].username = action.payload.username;
        });
      };
      updateRealmFunc();
      return arr;

    case 'UPDATE_API_ON_LONGPRESS':
      const id1 = action.payload.id;
      const isSelected = action.payload.isSelected;
      const arr1 = [...state];
      let extIndex1 = arr1.findIndex(val => val.id === id1);
      arr1.splice(extIndex1, 1, {...action.payload, isSelected: !isSelected});
      return arr1;

    case 'DELETE_API':
      const id2 = action.payload.id;
      const arr2 = [...state];
      let extIndex2 = arr2.findIndex(val => val.id === id2);

      arr2.splice(extIndex2, 1);

      const updateRealmFunc2 = async () => {
        const realm = await Realm.open(databaseOptions);
        realm.write(() => {
          const data = realm.objects('User');
          realm.delete(data[extIndex2]);
        });
      };
      updateRealmFunc2();
      return arr2;

    case 'RESET':
      const arr3 = state.map(item => {
        return {...item, isSelected: false};
      });
      return arr3;

    default:
      return state;
  }
};

export default homeReducer;

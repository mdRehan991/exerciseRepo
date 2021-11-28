import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    avatar: 'string',
    username: 'string',
    isSelected: 'bool',
  },
  primaryKey: 'id',
};

export const databaseOptions = {
  path: 'myrealmDB',
  schema: [UserSchema],
};

export const insertNewEmployee = async val => {
  const realm = await Realm.open(databaseOptions);

  realm.write(() => {
    realm.create('User', val);
  });
};

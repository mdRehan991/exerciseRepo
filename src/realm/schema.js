import Realm from 'realm';

const EmployeeSchema = {
  name: 'Employee',
  properties: {
    id: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
  primaryKey: 'id',
};

export const databaseOptions = {
  path: 'myrealm',
  schema: [EmployeeSchema],
};

export const insertNewEmployee = async val => {
  const realm = await Realm.open(databaseOptions);

  let ID = realm.objects('Employee').length + 1;
  const obj = {...val, id: ID, salary: Number(val.salary)};

  realm.write(() => {
    realm.create('Employee', obj);
  });
};
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Realm from 'realm';
import {databaseOptions} from '../realm/schema';

const Search = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const realm = await Realm.open(databaseOptions);
      const data = realm.objects('Employee');
      setState(data);
    };
    getData();
  }, []);

  const searchFunction = () => {
    const searchData = state.filtered(`name = '${text}'`);
    setSearch(searchData);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffc299" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTitle}
          maxLength={20}
          placeholder="Search here..."
          placeholderTextColor="#808080"
          onChangeText={val => setText(val)}
        />
        <TouchableOpacity onPress={searchFunction}>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchButton}
              source={require('../assets/search.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[search == '' ? styles.listOff : styles.listOn]}
        showsVerticalScrollIndicator={false}
        scrollEnabled={search.length > 5 ? true : false}>
        {search.map((item, index) => (
          <View key={index} style={styles.listButton}>
            <View style={styles.view1}>
              <Text style={styles.body}>Id :</Text>
              <Text style={styles.body}>Name :</Text>
              <Text style={styles.body}>Designation :</Text>
              <Text style={styles.body}>Salary :</Text>
            </View>
            <View>
              <Text style={styles.body}>{item.id}</Text>
              <Text style={styles.body}>{item.name}</Text>
              <Text style={styles.body}>{item.designation}</Text>
              <Text style={styles.body}>{item.salary}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffb380',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputTitle: {
    width: '80%',
    height: 50,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  listOff: {
    flexGrow: 0,
  },
  listOn: {
    flexGrow: 1,
    marginTop: 30,
  },
  listButton: {
    flexDirection: 'row',
    marginBottom: 30,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  view1: {
    width: 120,
  },
  body: {
    fontSize: 15,
    color: '#595959',
    marginBottom: 5,
  },
  searchContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  searchButton: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: '#ffa366',
  },
});

export default Search;

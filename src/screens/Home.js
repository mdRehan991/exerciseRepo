import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Realm from 'realm';
import {databaseOptions} from '../realm/schema';

const Home = ({navigation}) => {
  const [state, setState] = useState([]);
  const [sort, setSort] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const realm = await Realm.open(databaseOptions);
      const data = realm.objects('Employee');
      const sortData = data.sorted('salary');
      setSort(sortData);
      setState(data);
    };
    getData();
  }, [state]);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffc299" />
      {state == '' ? (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            No employees found.{'\n'}
            {'\n'}Please Add employee
          </Text>
        </View>
      ) : null}

      {isSorted ? (
        <View style={styles.sortView}>
          <Text style={styles.sortText}>
            Data Sorted in Ascending Order of Salary!
          </Text>
        </View>
      ) : null}
      <ScrollView
        style={[state == '' ? styles.listOff : styles.listOn]}
        showsVerticalScrollIndicator={false}
        scrollEnabled={state.length > 5 ? true : false}>
        {(isSorted ? sort : state).map((item, index) => (
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
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.ssButton}
            source={require('../assets/search.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSorted(!isSorted)}>
        <View style={styles.sortContainer}>
          <Image
            style={styles.ssButton}
            source={require('../assets/sort.png')}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#808080',
  },
  sortView: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 15,
    color: '#808080',
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
    backgroundColor: '#ffa366',
    position: 'absolute',
    bottom: 90,
    right: 20,
  },
  ssButton: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  sortContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ffa366',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});

export default Home;

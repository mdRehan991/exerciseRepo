import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Realm from 'realm';
import {databaseOptions} from '../realm/schema';
import Data from '../data/Data';
import {fetchApiData} from '../redux/reducer/middleware';

const Home = ({navigation}) => {
  const [screen, setScreen] = useState(false);

  const arrData = useSelector(state => state);

  const dispatch = useDispatch();
  const saveApi = val => dispatch({type: 'SAVE_API', payload: val});
  const updateOnLongpress = val =>
    dispatch({type: 'UPDATE_API_ON_LONGPRESS', payload: val});
  const deleteApi = val => dispatch({type: 'DELETE_API', payload: val});
  const reset = () => dispatch({type: 'RESET'});
  const setApiData = () => dispatch(fetchApiData());

  useEffect(() => {
    const getData = async () => {
      const realm = await Realm.open(databaseOptions);
      const data = realm.objects('User');
      // eslint-disable-next-line eqeqeq
      if (data == '') {
        setApiData();
      } else {
        saveApi(JSON.parse(JSON.stringify(data)));
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressFunc = item => {
    if (item.isSelected) {
      deleteApi(item);
    } else {
      reset();
      navigation.navigate('Edit', item);
    }
  };

  const renderGroup = ({item}) => (
    <FlatList
      style={screen ? styles.flatlistGrid : styles.flatlistMenu}
      data={item.list}
      // eslint-disable-next-line no-shadow
      renderItem={({item, i}) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.container,
            screen ? styles.containerGrid : styles.containerMenu,
          ]}
          onPress={() => onPressFunc(item)}
          onLongPress={() => updateOnLongpress(item)}>
          {item.isSelected ? (
            <View style={styles.closeButtonContainer}>
              <Image
                style={styles.closeButtonImage}
                source={require('../assets/icons/closeButton.png')}
              />
            </View>
          ) : null}
          <Image
            style={[styles.image, screen ? null : styles.imageMenu]}
            source={{uri: item.avatar}}
          />
          <Text style={[styles.name, screen ? null : styles.nameMenu]}>
            {item.first_name}
          </Text>
          <Text style={[styles.name, screen ? null : styles.nameMenu]}>
            {item.last_name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setScreen(false)}>
          <Image
            style={[styles.menuIcon, screen ? styles.off : styles.on]}
            source={require('../assets/icons/menu.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen(true)}>
          <Image
            style={[styles.gridIcon, screen ? styles.on : styles.off]}
            source={require('../assets/icons/grid.png')}
          />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={Data(arrData)}
        keyExtractor={(x, i) => i}
        renderItem={renderGroup}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.alphabets}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 55,
  },
  gridIcon: {
    width: 35,
    height: 35,
  },
  on: {
    tintColor: '#000',
  },
  off: {
    tintColor: '#ccc',
  },
  list: {
    flexGrow: 1,
    marginTop: 20,
  },
  flatlistMenu: {
    marginLeft: 15,
  },
  flatlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
  },
  container: {
    marginBottom: 20,
    marginRight: 15,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  containerMenu: {
    flexDirection: 'row',
  },
  containerGrid: {
    width: 165,
    justifyContent: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  closeButtonImage: {
    width: 30,
    height: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#737373',
  },
  imageMenu: {
    marginHorizontal: 20,
  },
  nameMenu: {
    marginRight: 5,
  },
  alphabets: {
    fontSize: 30,
    fontWeight: '500',
    color: 'steelblue',
    marginVertical: 15,
    marginHorizontal: 15,
  },
});

export default Home;

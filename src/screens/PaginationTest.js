import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const PaginationTest = () => {
  const [state, setState] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, setRef] = useState(false);

  const getData = a => {
    fetch(`https://reqres.in/api/users?page=${a}`)
      .then(response => response.json())
      .then(json => {
        a == 1 ? setState(json.data) : setState(state.concat(json.data));
      })
      .finally(() => {
          setLoading(false);
          setRef(false);
      })
  };

  useEffect(() => {
    getData(pageNo);
    // setPageNo(pageNo + 1);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        style={{height: 560, marginTop: 60}}
        data={state}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.containerImage} source={{uri: item.avatar}} />
            <View style={styles.containerView}>
              <Text>ID : {item.id} </Text>
              <Text>
                Name : {item.first_name} {item.last_name}{' '}
              </Text>
              <Text>E-mail : {item.email}</Text>
            </View>
          </View>
        )}
        onEndReached={() => {
          setLoading(true);
          getData(pageNo + 1);
          setPageNo(pageNo + 1);
        }}
        refreshing={ref}
        onRefresh={() => {
            setRef(true);
            getData(1);
            setPageNo(1);
        }}
      />
      <ActivityIndicator animating={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: windowWidth,
    },
  
    containerImage: {
      width: 80,
      height: 80,
      marginHorizontal: 20,
      marginBottom : 40
    },
  
    containerView: {
      width: windowWidth - 150,
      paddingTop: 25,
    },
  });

export default PaginationTest;

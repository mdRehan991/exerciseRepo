import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const DataFetchFromAPI = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView>
      {/*   Conditional Rendering   */}
      {state && state.length == 0 ? (
        <View>
          <Button
            onPress={() => {
              setLoading(true);

              fetch('https://reqres.in/api/users')
                .then(response => response.json())
                .then(data => setState(data['data']))
                .finally(() => setLoading(false));
            }}
            title="Press to Fetch Data from API"
          />
          <ActivityIndicator
            size="large"
            animating={loading}
            style={{position: 'absolute', top: 300, left: windowWidth / 2 - 20}}
          />
        </View>
      ) : null}

      <View>
        <FlatList
          style={{height: 650, marginTop: 40}}
          data={state}
          keyExtractor={x => x.id}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Image
                style={styles.containerImage}
                source={{uri: item.avatar}}
              />
              <View style={styles.containerView}>
                <Text>ID : {item.id} </Text>
                <Text>
                  Name : {item.first_name} {item.last_name}{' '}
                </Text>
                <Text>E-mail : {item.email}</Text>
              </View>
            </View>
          )}
        />
      </View>
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
    marginBottom : 30
  },

  containerView: {
    width: windowWidth - 150,
    paddingTop: 25,
  },
});

export default DataFetchFromAPI;

import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.props.saveApi(data));
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Notes !</Text>
        </View>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={this.props.arrData}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.props.navigation.navigate('Edit', item)}>
              <View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
              <View>
                <Text style={styles.body} numberOfLines={3}>
                  {item.body}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  header: {
    width: 100,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fdcece',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  container: {
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 27,
    fontWeight: '500',
    color: '#ff8080',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  body: {
    fontSize: 20,
    color: '#bfbfbf',
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

const mapStateToProps = state => {
  return {arrData: state.homeRd};
};

const mapDispatchToProps = dispatch => {
  return {
    saveApi: val => dispatch({type: 'SAVE_API', payload: val}),
    updateApi: (titleVal, idVal) => {
      const obj = {
        titleVal: titleVal,
        idVal: idVal,
      };
      dispatch({type: 'UPDATE_API', payload: obj});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

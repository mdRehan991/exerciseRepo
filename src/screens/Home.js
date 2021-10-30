import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  state = {
    id: 0,
    title: '',
    body: '',
  };

  createFunction = () => {
    const check = this.state;
    if (check.title !== '' && check.body !== '') {
      this.setState({...this.state, id: this.state.id + 1}, () => {
        this.props.saveApi([...this.props.arrData, this.state]);
        this.titleInput.clear();
        this.bodyInput.clear();
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Notes !</Text>
        </View>
        <View>
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.inputTitle}
                maxLength={100}
                placeholder="Title :"
                placeholderTextColor="#bfbfbf"
                multiline={true}
                onChangeText={val => this.setState({...this.state, title: val})}
                ref={input => {
                  this.titleInput = input;
                }}
              />
            </View>
            <View>
              <View>
                <TextInput
                  style={styles.inputBody}
                  placeholder="Content here..."
                  placeholderTextColor="#bfbfbf"
                  multiline={true}
                  onChangeText={val =>
                    this.setState({...this.state, body: val})
                  }
                  ref={input => {
                    this.bodyInput = input;
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={this.createFunction}>
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={this.props.arrData}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listButton}
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
  safeView: {
    flex: 1,
    backgroundColor: '#000',
  },
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
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  inputTitle: {
    height: 80,
    fontSize: 25,
    fontWeight: '500',
    color: '#bfbfbf',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#1f1f1f',
  },
  inputBody: {
    height: 150,
    fontSize: 20,
    color: '#bfbfbf',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#1f1f1f',
  },
  createButtonContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  createButton: {
    width: 70,
    height: 40,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff8080',
    borderWidth: 1.2,
    borderRadius: 15,
  },
  createButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ff8080',
  },
  listButton: {
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
